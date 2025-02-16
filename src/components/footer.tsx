export default function Footer() {
  return (
    <footer className="border border-t-primaryDark py-4">
      <h2 className="font-hanldee text-center font-semibold text-xl ">Lalit</h2>
      <ul className="flex gap-2 justify-center">
        <li className="bg-primaryDark text-white w-fit">
          <a href="https://x.com/khulalit" target="_blank">
            X.com
          </a>
        </li>
        <li className="bg-primaryDark text-white w-fit">
          <a href="https://github.com/khulalit/about-me" target="_blank">
            Github
          </a>
        </li>
        <li className="bg-primaryDark text-white w-fit">
          <a href="https://linkedin.com/in/lalit-khudania" target="_blank">
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
}
