import type {
  Episode,
  GetContent,
  GetTimelineResponse,
} from "../types/requestsTypes";

let podcastEpisodes: Episode[] = [];

export async function getContent(): Promise<GetContent | null> {
  const data = (await request(
    "https://arthurfrost.qflo.co.za/php/getTimeline.php",
  )) as GetTimelineResponse | null;

  if (!data) return null;

  const { Body, Timeline } = data;
  const { About: aboutUs, Background: backgroundImage } = Body[0];
  podcastEpisodes = Timeline;

  return {
    aboutUs,
    backgroundImage,
    podcastEpisodes,
  };
}

export function getEpisode(iid: number): Episode | null {
  const episodes = podcastEpisodes.filter(({ Id }) => Id == iid);
  if (episodes.length == 0) {
    return null;
  }
  return episodes[0];
}

async function request(url: string): Promise<Record<any, any> | null> {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
