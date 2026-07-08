"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 w-full max-w-[64rem] scroll-mt-[100rem] rounded-3xl border border-black/5 bg-white/70 px-6 py-8 shadow-sm backdrop-blur sm:mb-32 sm:px-10 sm:py-12 dark:border-white/10 dark:bg-white/10"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.9fr]">
        <motion.div
          id="about"
          className="scroll-mt-28 text-center lg:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-6xl">
            Amit Dutta
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {[
              "Ph.D. candidate",
              "Adaptive Learning Systems",
              "Machine Learning Engineer",
              "Agentic AI",
            ].map((title) => (
              <span
                key={title}
                className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/80"
              >
                {title}
              </span>
            ))}
          </div>

          <div className="mt-7 space-y-4 text-base leading-8 text-gray-700 dark:text-white/75">
            <p>
              Hello, I&apos;m Amit Dutta, a Ph.D. candidate in Computer Science
              at the University of Nevada, Reno, focusing on adaptive learning
              systems. I have 6+ years of combined software engineering and
              applied AI research experience, building scalable ML pipelines,
              adaptive training systems, and full-stack applications using
              Python, PyTorch, LangChain, LangGraph, Spring Boot, React, and
              React Native.
            </p>

            <p>
              My work includes peer-reviewed research on statistically
              effective adaptive training algorithms and production applications
              used by 10,000+ users.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-base font-medium sm:flex-row lg:justify-start">
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-100"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>

            <a
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-105 focus:scale-105 active:scale-100 borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
            </a>

            <div className="flex gap-2">
              <a
                className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-100 borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/amitdutta121/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <BsLinkedin />
              </a>

              <a
                className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-100 borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://scholar.google.com/citations?user=V9jpKdUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar profile"
              >
                <SiGooglescholar />
              </a>

              <a
                className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-100 borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/Amitdutta121"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.25,
              }}
            >
              <Image
                src="/profile_picture.jpg"
                alt="Amit Dutta portrait"
                width={320}
                height={320}
                quality={95}
                priority={true}
                className="h-64 w-64 rounded-[2rem] border-[0.45rem] border-white object-cover shadow-2xl sm:h-80 sm:w-80"
              />
            </motion.div>

            <motion.span
              className="absolute -bottom-3 -left-3 rounded-full bg-white p-3 text-3xl shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
