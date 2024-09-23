import { json } from "@sveltejs/kit";
import { getAllData, storage } from "$lib/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";

export async function GET() {
  let events = await getAllData("sponsors");
  let list = [];
  for (let each of events) {
    const imgUrl = await getDownloadURL(ref(storage, each.Image));
    list.push({ ...each, imgUrl });
  }

  events = events.sort((a, b) => a.priority - b.priority);

  return new Response(JSON.stringify(list), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
