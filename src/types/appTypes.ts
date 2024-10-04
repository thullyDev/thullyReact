import type { Dispatch, SetStateAction } from "react";
import type { PPagination } from "./misc";

export type AppContextType = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
  setTabState: Dispatch<SetStateAction<number>>;
  setEpisodeId: Dispatch<SetStateAction<number | null>>;
  pages: number;
};
