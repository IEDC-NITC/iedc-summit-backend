import { getAllDataFormatted, storage } from "$lib/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";
export async function GET() {
  let events = await getAllDataFormatted("events");
  let lectures = await getAllDataFormatted("lectures");
  let workshops = await getAllDataFormatted("workshops");
  let speakers = await getAllDataFormatted("speakers");
  let partners = await getAllDataFormatted("partners");
  let news = await getAllDataFormatted("news");

  return new Response(
    JSON.stringify({ events, lectures, workshops, news, speakers, partners }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
