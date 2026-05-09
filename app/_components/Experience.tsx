"use client";
import Timeline from "./Timeline/Timeline";
import { items } from "../_lib/constants";
import ScrollIndicator from "./ScrollIndicator";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-dvh flex justify-center text-center -translate-y-30 relative py-24 px-4 sm:px-8 lg:py-30 lg:px-30"
    >
      <div className="w-full">
        <h6 className="text-center md:text-left font-thin w-full text-sm text-(--gray-color) font-[nasalization] mb-16">
          002 | EXPERIENCE
        </h6>
        <Timeline items={items} />
      </div>
      <ScrollIndicator />
    </section>
  );
}
