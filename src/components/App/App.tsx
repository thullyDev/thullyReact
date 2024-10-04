import { createContext, useEffect, useState } from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { EpisodesList } from "../EpisodesList/EpisodesList";
import { EpisodeWrapper } from "../EpisodeWrapper/EpisodeWrapper";
import { getContent } from "../../services/requests";
import type { Episode, IAboutUsData } from "../../types/requestsTypes";
import { paginateItems } from "../../misc";
import type { AppContextType } from "../../types/appTypes";
import { Loader } from "../Loader/Loader";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function App() {
  const [tabState, setTabState] = useState(1);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [episodeId, setEpisodeId] = useState<number | null>(null);
  const [aboutUsData, setAboutUsData] = useState<null | IAboutUsData>(null);

  useEffect(() => {
    if (tabState == 1) {
      async function getData() {
        const content = await getContent();

        if (!content) {
          alert("something went wrong getting the episodes!");
          return;
        }

        const { podcastEpisodes, aboutUs, backgroundImage } = content;
        const { items, pagination: ppagination } = paginateItems({
          data: podcastEpisodes,
          limit: 12,
          page,
        });
        const { page: _page, pages } = ppagination;

        setAboutUsData({
          aboutUs,
          backgroundImage,
        });
        setPage(_page);
        setPages(pages);
        setEpisodes(items);
        setLoading(false);
      }
      getData();
    }
  }, [tabState, page, loading]);

  return (
    <AppContext.Provider
      value={{ setLoading, setTabState, setEpisodeId, setPage, pages }}
    >
      <div className="app-content mx-5">
        <AboutUs aboutUsData={aboutUsData} />
        <div className="tab-con">
          {tabState == 1 || episodeId == null ? (
            <EpisodesList episodes={episodes} pagination={{ page, pages }} />
          ) : (
            <EpisodeWrapper episodeId={episodeId} />
          )}
        </div>
        <Loader loading={loading} /> :
      </div>
    </AppContext.Provider>
  );
}
