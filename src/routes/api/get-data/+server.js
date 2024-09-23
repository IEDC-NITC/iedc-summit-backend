import {
  getAllData,
  getAllEvents,
  getAllLectures,
  getAllWorkshops,
  storage,
} from "$lib/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";
export async function GET() {
  const events = (await getAllEvents()).map(async (event) => {
    const imgUrl = await getDownloadURL(ref(storage, event.posterImage));
    return {
      ...event,
      imgUrl,
    };
  });

  const lectures = (await getAllLectures()).map(async (lecture) => {
    const imgUrl = await getDownloadURL(ref(storage, lecture.posterImage));
    return {
      ...lecture,
      imgUrl,
    };
  });
  const workshops = (await getAllWorkshops()).map(async (workshop) => {
    const imgUrl = await getDownloadURL(ref(storage, workshop.posterImage));
    return {
      ...workshop,
      imgUrl,
    };
  });

  const speakers = (await getAllData("speakers"))
    .map(async (speaker) => {
      const imgUrl = await getDownloadURL(ref(storage, speakerImage));
      return {
        ...speaker,
        imgUrl,
      };
    })
    .sort((a, b) => a.priority - b.priority);

  const sponsors = (await getAllData("sponsors"))
    .map(async (sponsor) => {
      const imgUrl = await getDownloadURL(ref(storage, sponsor.Image));
      return {
        ...sponsor,
        imgUrl,
      };
    })
    .sort((a, b) => a.priority - b.priority);

  const news = (await getAllData("news")).sort(
    (a, b) => a.priority - b.priority
  );

  return new Response(
    JSON.stringify({ events, lectures, workshops, news, speakers, sponsors }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
