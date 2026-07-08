"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  cardSurface,
  chipClassName,
  sectionShell,
  sectionSubtitle,
} from "./design-system";

const skillGroups = [
  {
    title: "Applied AI / ML",
    description: "Adaptive systems, model development, and agentic workflows.",
    skills: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Adaptive Learning",
      "LangChain",
      "LangGraph",
      "pgvector",
    ],
  },
  {
    title: "MLOps / Pipelines",
    description: "Experiment tracking, reproducibility, and deployment flow.",
    skills: ["MLflow", "DVC", "Docker", "Kubernetes", "FastAPI", "CI/CD"],
  },
  {
    title: "Backend Systems",
    description: "APIs, services, databases, and production application logic.",
    skills: ["Spring Boot", "Node.js", "Express", "PostgreSQL", "MySQL"],
  },
  {
    title: "Frontend / Mobile",
    description: "Modern interfaces for web and cross-platform mobile apps.",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud / Tools",
    description: "Cloud services, source control, and application data stores.",
    skills: ["AWS", "Firebase", "Git", "MongoDB"],
  },
] as const;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className={`${sectionShell} text-center`}
    >
      <SectionHeading>Skills</SectionHeading>
      <p className={sectionSubtitle}>
        A focused stack for building adaptive AI systems, ML pipelines, and
        production-ready applications.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            className={`${cardSurface} p-6 text-left`}
            key={group.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
              {group.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/60">
              {group.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  className={chipClassName}
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
