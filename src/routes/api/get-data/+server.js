import { getAllEvents, getAllLectures, getAllWorkshops } from "$lib/firebase-setup";

export async function GET() {
    const events = await getAllEvents();
    const lectures = await getAllLectures();
    const workshops = await getAllWorkshops();
    return new Response(JSON.stringify({ events, lectures, workshops }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}