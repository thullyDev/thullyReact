import { useContext } from "react";
import { truncate } from "../../misc";
import type { EpisodeCardProps } from "./types";
import { AppContext } from "../App/App";
import type { AppContextType } from "../../types/appTypes";

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const context = useContext(AppContext) as AppContextType | undefined;
  if (!context) {
    return <></>;
  }
  const { setTabState, setEpisodeId } = context;
  const { Id, Image, Icon, Title, MediaName, Episode, CreateDate } = episode;
  const imageUrl = `https://arthurfrost.qflo.co.za/${Image}`;
  // some of the images are broken because of the api
  const iconUrl = `https://arthurfrost.qflo.co.za/${Icon}`;

  return (
    <div
      role="button"
      onClick={() => {
        setTabState(2);
        setEpisodeId(Id);
      }}
      className="ep-card cursor-pointer w-96"
      title={Title}
      data-id={Id}
    >
      <div className="inner-con flex flex-col gap-2 rounded-t-lg pb-2">
        <div className="thumb-con w-full">
          <img src={imageUrl} alt={Title} className="thumb w-full rounded-lg" />
        </div>
        <div className="info-con flex gap-2">
          <div className="top-con flex items-center gap-2">
            <span className="icon tick">
              <img
                src={iconUrl}
                alt={Title + " icon"}
                className="icon w-14 h-14 rounded-full"
              />
            </span>
          </div>
          <div className="details-con flex flex-col gap-2">
            <span className="title-con text-base font-bold">
              {truncate(Title, 50)}
            </span>
            <div className="bottom-con flex text-xs items-center gap-2 text-gray-400">
              <span className="episode-tick">{truncate(Episode, 20)}</span>
              <span className="tick-dot w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="tick-media">{MediaName}</span>
              {/*							<span className="category">
								{Category}
							</span>
*/}{" "}
              <span className="tick-dot w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="created-date">{CreateDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
