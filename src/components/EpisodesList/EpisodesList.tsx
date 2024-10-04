import { EpisodeCard } from "../EpisodeCard/EpisodeCard";
import { Pagination } from "../Pagination/Pagination";
import type { EpisodesListProps } from "./types";

export function EpisodesList({ episodes, pagination }: EpisodesListProps) {
  return (
    <div className="my-5">
      <h2 className="text-1xl font-bold mb-5 text-center">Episodes</h2>
      <div className="ep-list-con">
        <ul className="ep-list flex flex-wrap gap-10 mb-10 justify-center">
          {episodes.map((episode, index) => {
            return (
              <li key={index} className="ep-item">
                <EpisodeCard episode={episode} />
              </li>
            );
          })}
        </ul>
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
}
