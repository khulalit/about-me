import Arrow from "@/icons/arrow";
import PaperClip from "./ui/paper-clip";

export default function Education() {
  return (
    <div className="border px-2 md:px-4 py-8" id="education">
      <div>
        <h2 className="bg-lightPink font-hanldee text-lg w-fit font-bold md:-translate-x-8">
          Academics
        </h2>
        <div className="rotate-12 mt-4 w-fit md:-rotate-12 md:translate-x-8">
          <Arrow />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start px-4 md:px-0 md:gap-20 md:flex-row md:justify-start md:items-stretch">
        <PaperClip varient="blue" title="M.Sc. Computer Science">
          <div className="flex gap-2 text-xs mt-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/Delhi_University%27s_official_logo.png"
              alt="du-logo"
              loading="lazy"
              width={24}
              height={24}
              className="shrink-0 self-start"
            />
            <div>
              <p>
                Department of Computer Science,{" "}
                <a
                  href="https://www.du.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  University of Delhi
                </a>
              </p>
              <p>2021-2023</p>
              <p>New Delhi, India</p>
            </div>
          </div>
        </PaperClip>
        <PaperClip varient="pink" title="B.Sc. (H) Computer Science">
          <div className="flex gap-2 text-xs mt-16">
            <img
              src="https://www.andcollege.du.ac.in/assets/front/images/logo.png"
              alt="du-logo"
              loading="lazy"
              width={24}
              height={24}
              className="shrink-0 self-start"
            />
            <div>
              <p>
                <a
                  href="https://www.andcollege.du.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Acharya Narendra Dev College
                </a>{" "}
                ,{" "}
                <a
                  href="https://www.du.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  University of Delhi
                </a>
              </p>
              <p>2021-2023</p>
              <p>New Delhi, India</p>
            </div>
          </div>
        </PaperClip>
        <PaperClip
          varient="yellow"
          title="UGC NET (Computer Science & Applications)"
        >
          <div className="flex gap-2 text-xs mt-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/UGC_India_Logo.png/140px-UGC_India_Logo.png"
              alt="ugc-net-logo"
              loading="lazy"
              width={24}
              height={24}
              className="shrink-0 self-start"
            />
            <div>
              <p>
                Conducted by{" "}
                <a
                  href="https://ugcnet.nta.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  National Testing Agency (NTA)
                </a>
              </p>
              <p>September 2024</p>
              <p>India</p>
            </div>
          </div>
        </PaperClip>
      </div>
    </div>
  );
}
