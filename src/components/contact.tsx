import Arrow from "@/icons/arrow";
import ContactForm from "./contact-form";

export default function ContactMe() {
  return (
    <div className="border px-2 md:px-4 py-8" id="contact">
      <div>
        <h2 className="bg-lightPink font-hanldee text-lg w-fit font-bold md:-translate-x-8">
          Contact here
        </h2>
        <div className="rotate-12 mt-4 w-fit md:-rotate-12 md:translate-x-8">
          <Arrow />
        </div>
        <p>Hey, wanna contact me </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
