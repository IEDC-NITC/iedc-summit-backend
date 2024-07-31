import { json } from "@sveltejs/kit"
import { getAllLectures, storage } from "$lib/firebase-setup"
import { getDownloadURL, ref } from "firebase/storage"

export async function GET() {
    let events = await getAllLectures()
    let new_events = []
    for (let event of events) {
        const imgUrl = await getDownloadURL(ref(storage, event.posterImage))
        new_events.push({...event, imgUrl})
    }
    

    return json(new_events)
}