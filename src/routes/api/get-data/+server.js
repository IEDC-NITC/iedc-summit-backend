import { getAllEvents, getAllLectures, getAllWorkshops, storage } from "$lib/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage"
export async function GET() {
    const events = (await getAllEvents()).map(async (event) => {
        const imgUrl = await getDownloadURL(ref(storage, event.posterImage));
        return {
            ...event,
            imgUrl,
        }
    })

    const lectures = (await getAllLectures()).map(async (lecture) => {
        const imgUrl = await getDownloadURL(ref(storage, lecture.posterImage));
        return {
            ...lecture,
            imgUrl,
        }
    })
    const workshops = (await getAllWorkshops()).map(async (workshop) => {
        const imgUrl = await getDownloadURL(ref(storage, workshop.posterImage));
        return {
            ...workshop,
            imgUrl,
        }
    })
    return new Response(JSON.stringify({ events, lectures, workshops }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });
}