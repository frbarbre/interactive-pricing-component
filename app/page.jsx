"use client";

import { Card, Header } from "./components";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <main className="relative p-6 pb-16 md:pb-6">
      <m.div

        className="fixed z-[-1] bottom-[50%] left-0 right-0 bg-bg-pattern w-screen min-h-screen bg-no-repeat bg-cover"
      />
      <Header />
      <Card />
    </main>
  );
}
