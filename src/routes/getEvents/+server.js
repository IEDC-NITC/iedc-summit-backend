import { json } from "@sveltejs/kit"
import { getAllEvents, storage } from "$lib/firebase-setup"
import { getDownloadURL, ref } from "firebase/storage"

export async function GET() {
    let events = await getAllEvents()
    let new_events = []
    for (let event of events) {
        const imgUrl = await getDownloadURL(ref(storage, event.posterImage))
        new_events.push({ ...event, imgUrl })
    }

    return new Response(JSON.stringify(new_events), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });
}