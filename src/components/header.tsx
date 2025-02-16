import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="flex justify-between py-6 px-2 bg-yellow-500 w-full">
      <div className="font-hanldee text-2xl font-extrabold">Lalit</div>
      <NavLinks />
    </header>
  );
}
