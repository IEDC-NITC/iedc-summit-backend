import { getAllDataFormatted, storage } from "$lib/firebase-setup";
import axios from "axios";
import { getDownloadURL, ref } from "firebase/storage";
export async function GET() {
  let events = await getAllDataFormatted("events");
  let lectures = await getAllDataFormatted("lectures");
  let workshops = await getAllDataFormatted("workshops");
  let speakers = await axios.get("https://events.startupmission.in/api/event/iedcsummit-2024/speakers")
  let data = speakers.data['Kerala Startup Mission']

  data.forEach(( /** @type {{ [x: string]: any; }} */ obj) => {
    obj["Name"] = obj['name'];
    obj["Company"] = obj['organisation'];
    obj["Image"] = obj['photo'];
    obj["Designation"] = obj['designation'];
    obj["LinkedIn"] = obj['linkedin'];
    obj["Priority"] = obj['order'];
    obj["imgUrl"] = obj['photo'];

    delete obj['name'];
    delete obj['organisation'];
    delete obj['photo'];
    delete obj['designation'];
    delete obj['linkedin'];
    delete obj['order'];
    delete obj['photo'];
    delete obj['external_id']
  });

  let partners = await getAllDataFormatted("partners");
  let news = await getAllDataFormatted("news");
  let faqs = await getAllDataFormatted("faqs");

  return new Response(
    JSON.stringify({
      events,
      lectures,
      workshops,
      news,
      speakers: data,
      partners,
      faqs,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
