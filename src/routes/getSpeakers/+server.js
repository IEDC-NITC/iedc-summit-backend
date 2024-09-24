import { json } from "@sveltejs/kit";
import { getAllData, storage } from "$lib/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";

export async function GET() {
  let events = await getAllData("speakers");
  let list = [];
  for (let each of events) {
    const imgUrl = await getDownloadURL(ref(storage, each.Image));
    list.push({ ...each, imgUrl });
  }

  

  if (list.length > 0) {
    list = list.sort((a, b) => a.Priority - b.Priority);
  }


  return new Response(JSON.stringify(list), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
