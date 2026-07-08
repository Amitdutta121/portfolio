"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[48rem] scroll-mt-28 rounded-3xl border border-black/5 bg-white/75 px-6 py-8 text-center leading-8 shadow-sm backdrop-blur sm:mb-32 sm:px-10 dark:border-white/10 dark:bg-white/10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="mx-auto max-w-[42rem] text-gray-700 dark:text-white/75">
        <p className="mb-4">
          Hello, I&apos;m Amit Dutta, a Ph.D. candidate in Computer Science at
          the University of Nevada, Reno, focusing on adaptive learning
          systems. I have 6+ years of combined software engineering and applied
          AI research experience, building scalable ML pipelines, adaptive
          training systems, and full-stack applications using Python, PyTorch,
          LangChain, LangGraph, Spring Boot, React, and React Native. My work
          includes peer-reviewed research on statistically effective adaptive
          training algorithms and production applications used by 10,000+
          users.
        </p>

        <p>
          <span className="italic">Outside of my research and engineering work</span>,
          I enjoy exploring new technologies and occasionally contributing to
          open-source tools. I’m always learning—currently diving deeper into{" "}
          <span className="font-medium">cloud-native MLOps</span> practices,
          real-time data systems, and scaling ML workflows in production.
        </p>
      </div>
    </motion.section>
  );
}
