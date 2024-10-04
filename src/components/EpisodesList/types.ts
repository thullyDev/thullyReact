import type { PPagination } from "../../types/misc";
import type { Episode } from "../../types/requestsTypes";

export type EpisodesListProps = {
  episodes: Episode[];
  pagination: PPagination;
};
