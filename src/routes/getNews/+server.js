import { json } from "@sveltejs/kit";
import { getAllData, storage } from "$lib/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";

export async function GET() {
  let list = await getAllData("news");

  list = list.sort((a, b) => a.priority - b.priority);


  return new Response(JSON.stringify(list), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
