import { useState } from "react";
import type { AboutUsProps } from "./types";
import { OuterAboutUs } from "../OuterAboutUs/OuterAboutUs";

export function AboutUs({ aboutUsData }: AboutUsProps) {
  if (!aboutUsData) {
    return <></>;
  }

  const { aboutUs } = aboutUsData;

  return (
    <div>
      <div className="inner-con my-5">
        <div className="about-text flex flex-col gap-5 justify-center">
          <h1 className="text-2xl font-bold text-center">
            Join Our broadcasts and Rejoice with us and god.
          </h1>
          <button
            onClick={() => {
              const ele = document.querySelector(
                ".outer-about-con",
              ) as HTMLElement;
              ele.style.display = "block";
            }}
            type="button"
            className="aboutus-btn underline text-red-600"
          >
            Read About Us
          </button>
        </div>
        <div className="outer-about-con hidden">
          <OuterAboutUs aboutUs={aboutUs} />
        </div>
      </div>
    </div>
  );
}
