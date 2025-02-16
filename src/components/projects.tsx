import Arrow from "@/icons/arrow";

import Card from "./ui/card";
import Button2 from "./ui/button-2";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="border px-2 md:px-4 py-8 " id="projects">
      <div>
        <h2 className="bg-lightPink font-hanldee text-lg w-fit font-bold md:-translate-x-8">
          Projects
        </h2>
        <div className="rotate-12 mt-4 w-fit md:-rotate-12 md:translate-x-8">
          <Arrow />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          {
            image: "/codecompile.JPG",
            title: "Online code compiler",
            link: "https://codecompile.netlify.app/",
          },
          {
            image: "/nearest-tailwind-value.JPG",
            title: "Tool to find nearest tailwind value",
            link: "https://tailwind-nearest-value.vercel.app/",
          },
          {
            image: "/bare-style-css.JPG",
            title: "CSS library",
            link: "https://demo-bare-style-css.netlify.app/",
            codeLink: "https://github.com/khulalit/bare-style-css/",
          },
          {
            image: "/json-to-ts.JPG",
            title: "JSON to TS Npm package",
            link: "https://www.npmjs.com/package/@khulalit/json-to-ts-interface",
          },
          {
            image: "/create-express-pdf-api.JPG",
            title: "Pdf express starter kit",
            link: "https://www.npmjs.com/package/create-express-api-pdf",
          },
          {
            image: "/make-my-pizza.JPG",
            title: "Make your own pizza",
            link: "https://make-your-own-pizza-1.netlify.app/make-pizza",
          },
        ].map((project, index) => (
          <Card key={index} className="w-full max-w-72 mx-auto">
            <Card.Body>
              <Image
                src={project.image}
                alt={project.title}
                width={180}
                height={200}
                className="w-full h-auto object-cover rounded-md"
              />
            </Card.Body>
            <Card.Footer className="text-center">
              {project.title} <br />
              <a
                href={project.link}
                target="_blank"
                className="mr-4"
                rel="noopener noreferrer"
              >
                <Button2 varient="pink">Link</Button2>
              </a>
              {project.codeLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button2 varient="blue">Github</Button2>
                </a>
              )}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}
