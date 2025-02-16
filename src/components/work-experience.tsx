import Arrow from "@/icons/arrow";
import React from "react";
import WrapperBorder from "./ui/wrapper-border";
import List from "./ui/list";

export default function WorkExperience() {
  return (
    <div className="border px-2 md:px-4 py-8" id="work-experience">
      <div>
        <h2 className="bg-lightPink font-hanldee text-lg w-fit font-bold md:-translate-x-8">
          Work Experience
        </h2>
        <div className="rotate-12 mt-4 w-fit md:-rotate-12 md:translate-x-8">
          <Arrow />
        </div>
      </div>
      <div>
        <WrapperBorder className="md:ml-72">
          <List>
            <List.Li idx={0} className="mb-4">
              SDE 1 at
              <a
                href="https://www.animall.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2 bg-lightPink"
              >
                Animall Technologies Pvt Ltd
              </a>{" "}
              <br />
              <span className="text-sm font-light">
                Gurgaon, Haryana, India
              </span>{" "}
              <br />
              <span className="text-xs font-extralight">Jan, 2024</span>
            </List.Li>
            <List.Li idx={1} className="mb-4">
              Jr. Software Developer at {""}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2 bg-lightPink"
              >
                The Techie{"'"}s Craft
              </a>{" "}
              <br />
              <span className="text-sm font-light">New Delhi, India</span>{" "}
              <br />
              <span className="text-xs font-extralight">
                Aug 2023 - Dec, 2024
              </span>
            </List.Li>
            <List.Li idx={2}>
              SDE Intern at
              <a
                href="https://www.locofast.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2 bg-lightPink"
              >
                Locofast
              </a>{" "}
              <br />
              <span className="text-sm font-light">New Delhi, India</span>{" "}
              <br />
              <span className="text-xs font-extralight">
                Jan, 2022 - Aug 2023
              </span>
            </List.Li>
          </List>
        </WrapperBorder>
      </div>
    </div>
  );
}
