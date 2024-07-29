import { json } from "@sveltejs/kit"
import { getAllWorkshops, storage } from "$lib/firebase-setup"
import { getDownloadURL, ref } from "firebase/storage"

export async function GET() {
    let events = await getAllWorkshops()
    let new_events = []
    for (let event of events) {
        const imgUrl = await getDownloadURL(ref(storage, event.posterImage))
        new_events.push({...event, imgUrl})
    }

    return json(events)
}