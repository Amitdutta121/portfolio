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
    description: "Adaptive systems, model training, and reinforcement learning.",
    skills: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Adaptive Learning",
      "Computer Vision",
      "Knowledge Distillation",
      "OpenAI Gym",
    ],
  },
  {
    title: "Agentic & LLM Systems",
    description: "RAG pipelines, agentic workflows, and LLM evaluation.",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "Knowledge Graphs",
      "pgvector",
      "Agents",
      "Tool Use",
      "LLM-as-Judge",
      "GEPA",
      "Prompt Engineering",
      "Ollama",
      "Hugging Face",
    ],
  },
  {
    title: "MLOps / Pipelines",
    description: "Experiment tracking, reproducibility, and deployment monitoring.",
    skills: [
      "MLflow",
      "DVC",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "CI/CD",
      "Prometheus",
      "Grafana",
    ],
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
    title: "Backend & Cloud",
    description: "APIs, services, databases, and cloud/payment integrations.",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "AWS",
      "Google Cloud Pub/Sub",
      "Stripe",
      "Firebase",
      "Git",
    ],
  },
  {
    title: "Systems & Simulation",
    description: "Game-engine simulations and native on-device applications.",
    skills: ["Unity", "C#", "Rust", "Tauri 2", "ONNX", "Whisper"],
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
