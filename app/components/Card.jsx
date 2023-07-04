import { Options, CTA } from ".";
import { motion as m } from "framer-motion";

export default function Card() {
  return (
    <m.section

      className="max-w-[500px] p-8 mx-auto rounded-lg shadow-lg bg-white"
    >
      <div>
        <Options />
      </div>
      <hr className="mt-8 mb-6" />
      <div>
        <CTA />
      </div>
    </m.section>
  );
}
