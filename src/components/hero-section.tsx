import FloatingIcons from "./floating-icons";
import Button from "./ui/button";

export default function HeroSection() {
  return (
    <main
      className="h-[calc(100vh-80px)] flex-col justify-center pb-16 px-2 flex md:flex-row gap-16 md:pb-0 md:justify-between md:items-center md:px-8 relative overflow-hidden"
      id="#"
    >
      <div className="max-w-64">
        <h1 className="text-4xl font-extrabold">Hi, I{"'"}m Lalit</h1>
        <h2 className="text-sm mb-2">
          Frontend & Full Stack Developer | UI Enthusiast
        </h2>
      </div>

      <p className="md:max-w-96">
        I build modern, user-friendly web applications, keep experimenting with
        new things, and build open-source projects. <br />
        <Button btnSize="sm" className="mt-4">
          Download Resume
        </Button>
      </p>
      <FloatingIcons />
    </main>
  );
}
