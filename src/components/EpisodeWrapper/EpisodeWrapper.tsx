import { useEffect, useState } from "react";
import type { EpisodeWrapperProps } from "./type";
import { getEpisode } from "../../services/requests";
import type { Episode } from "../../types/requestsTypes";
import { EpisodeDetails } from "../EpisodeDetails/EpisodeDetails";

export function EpisodeWrapper({ episodeId }: EpisodeWrapperProps) {
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    async function getData() {
      const eepisode = getEpisode(episodeId);

      if (!eepisode) {
        alert("something went wrong trying to get the episode");
        return;
      }

      setEpisode(eepisode);
    }
    getData();
  }, []);

  return (
    <div>
      {episode == null ? "loading..." : <EpisodeDetails episode={episode} />}
    </div>
  );
}
