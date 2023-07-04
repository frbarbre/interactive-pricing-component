import { motion as m } from "framer-motion";

export default function Header() {
  return (
    <m.header

      className="w-full max-w-[400px] mx-auto text-center bg-bg-circles bg-no-repeat bg-center bg-contain py-6 my-8"
    >
      <h1 className="text-[24px] font-extrabold text-cta-bg">
        Simple, traffic-based pricing
      </h1>
      <p className="text-text text-[13px] pt-1">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </m.header>
  );
}
