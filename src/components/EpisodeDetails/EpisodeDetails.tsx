import type { EpisdoeDetailsProps } from "./types";
import { Icon as IconComponent } from "../Icon/Icon";
import type { AppContextType } from "../../types/appTypes";
import { AppContext } from "../App/App";
import { useContext } from "react";

export function EpisodeDetails({ episode }: EpisdoeDetailsProps) {
  const context = useContext(AppContext) as AppContextType | undefined;
  if (!context) {
    return <></>;
  }
  const { setTabState, setEpisodeId } = context;
  const {
    Image,
    Icon,
    Title,
    MediaName,
    Episode,
    Category,
    Description,
    CreateDate,
    Audio,
  } = episode;
  const imageUrl = `https://arthurfrost.qflo.co.za/${Image}`;
  const iconUrl = `https://arthurfrost.qflo.co.za/${Icon}`;
  const audioUrl = `https://arthurfrost.qflo.co.za/${Audio}`;

  return (
    <div className="episode-details">
      <div className="inner-con">
        <div className="back-con my-10">
          <button
            onClick={() => {
              setTabState(1);
              setEpisodeId(null);
            }}
            type="button"
            className="backbtn text-xl w-10 h-10 rounded-full bg-red-600"
          >
            <IconComponent icon="fa-solid fa-arrow-left" />
          </button>
        </div>
        <div className="top flex flex-col gap-5 items-center">
          <div className="thumb-con">
            <img src={imageUrl} alt={Title} className="thumb rounded-md" />
          </div>
          <div className="details-con flex flex-col gap-5">
            <h2 className="title-con text-xl font-bold text-center">{Title}</h2>
            <div className="bottom-con flex text-xs items-center justify-center gap-2 text-gray-400">
              <span className="episode-tick">{Episode}</span>
              <span className="tick-dot w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="tick-media">{MediaName}</span>
              <span className="category">{Category}</span>
              <span className="tick-dot w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="created-date">{CreateDate}</span>
            </div>
            <div className="short-desc text-sm text-gray-400">
              {Description}
            </div>
          </div>
        </div>
        <div className="bottom mt-5">
          <div className="inner-con flex justify-center gap-10">
            <span className="icon tick">
              <img
                src={iconUrl}
                alt={Title + " icon"}
                className="icon w-14 h-14 rounded-full"
              />
            </span>

            <audio src={audioUrl} controls></audio>
          </div>
        </div>
      </div>
    </div>
  );
}
