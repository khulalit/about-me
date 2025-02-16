import Arrow from "@/icons/arrow";
import React from "react";
import WrapperBorder from "./ui/wrapper-border";

export default function AboutMe() {
  return (
    <div className="border px-2 md:px-4 py-8" id="about">
      <div>
        <h2 className="bg-lightPink font-hanldee text-lg w-fit font-bold md:-translate-x-8">
          About Me
        </h2>
        <div className="rotate-12 mt-4 w-fit">
          <Arrow />
        </div>
      </div>
      <div className="md:flex md:gap-8">
        <p className="mt-2 text-justify md:max-w-48">
          I{"'"}m a Software Developer with experience in frontend and
          full-stack development. Passionate about UI engineering, AI, system
          programming, and open-source contributions. I enjoy solving problems
          and creating meaningful user experiences.
        </p>

        <WrapperBorder className="md:translate-y-28">
          <ul className="list-disc pl-4">
            <li>
              <strong>Current Role:</strong> SDE 1 at
              <a
                href="https://www.animall.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2 bg-lightPink"
              >
                Animall Technologies Pvt Ltd
              </a>
            </li>
            <li>
              <strong>Education:</strong>{" "}
              <a
                href="https://cs.du.ac.in/programmes/mcs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline bg-lightYellow"
              >
                M.Sc. in Computer Science,{" "}
              </a>
              <a
                href="http://www.du.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline bg-lightBlue"
              >
                University of Delhi
              </a>
            </li>
            <li>
              <strong>Tech Interests:</strong> Web development, UI frameworks,
              system programming, AI
            </li>
          </ul>
        </WrapperBorder>
      </div>
    </div>
  );
}
