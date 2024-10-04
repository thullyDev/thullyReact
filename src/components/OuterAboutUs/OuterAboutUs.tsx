import { Icon } from "../Icon/Icon";
import type { OuterAboutUsProps } from "./types";

export function OuterAboutUs({ aboutUs }: OuterAboutUsProps) {
  return (
    <div className="inner-con fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-95">
      <div
        onClick={() => {
          const ele = document.querySelector(".outer-about-con") as HTMLElement;
          ele.style.display = "none";
        }}
        className="close-btn-con w-full"
      >
        <button
          type="button"
          className="close-btn text-2xl w-10 h-10 bg-red-600 ml-10 mb-10 rounded-full"
        >
          <Icon icon="fa fa-close" />
        </button>
      </div>
      <div className="content-con w-96 h-96 overflow-auto bg-gray-800 py-5 px-5 rounded">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: aboutUs }}
        ></div>
      </div>
    </div>
  );
}
