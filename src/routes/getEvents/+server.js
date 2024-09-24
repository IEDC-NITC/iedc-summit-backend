import { json } from "@sveltejs/kit"
import { getAllData, storage } from "$lib/firebase-setup"
import { getDownloadURL, ref } from "firebase/storage"

export async function GET() {
    let events = await getAllData("events")
    let new_events = []
    for (let event of events) {
        const imgUrl = await getDownloadURL(ref(storage, event.posterImage))
        new_events.push({ ...event, imgUrl })
    }

    if (new_events.length > 0) {
        new_events = new_events.sort((a, b) => a.Priority - b.Priority);
    }



    return new Response(JSON.stringify(new_events), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });
}