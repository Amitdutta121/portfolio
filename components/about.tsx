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
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I'm currently pursuing a{" "}
          <span className="font-medium">PhD in Computer Science</span> at the
          University of Nevada, Reno, where my research focuses on{" "}
          <span className="font-medium">adaptive learning systems</span> combining{" "}
          <span className="font-medium">machine learning and evolutionary computing</span>.
          With over <span className="font-medium">4 years of experience</span> in
          software development, I specialize in building scalable{" "}
          <span className="font-medium">MLOps pipelines</span>, modern user interfaces
          with <span className="font-medium">React and React Native</span>, and
          robust backend systems using{" "}
          <span className="font-medium">Java Spring Boot</span>.
        </p>

        <p>
          <span className="italic">Outside of my research and engineering work</span>,
          I enjoy exploring new technologies and occasionally contributing to
          open-source tools. I’m always learning—currently diving deeper into{" "}
          <span className="font-medium">cloud-native MLOps</span> practices,
          real-time data systems, and scaling ML workflows in production.
        </p>
      </motion.section>
  );
}
