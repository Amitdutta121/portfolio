"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { cardSurface, chipClassName, primaryPillLink } from "./design-system";

type ProjectProps = (typeof projectsData)[number];

const linkLabelMap: Record<string, string> = {
  github: "GitHub",
  paper: "HCII 2025",
  web: "Live Site",
  android: "Android",
  ios: "iOS",
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  links,
  category,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group h-full"
    >
      <section
        className={`${cardSurface} flex h-full max-w-[42rem] flex-col overflow-hidden dark:text-white`}
      >
        <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-white/5">
          <Image
            src={imageUrl}
            alt={`${title} project preview`}
            quality={95}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800 shadow-sm backdrop-blur dark:bg-black/50 dark:text-white">
            {category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl font-semibold leading-snug">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className={chipClassName}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {links && (
            <div className="mt-6 flex flex-wrap gap-2 pt-2 sm:mt-auto">
              {Object.entries(links).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryPillLink}
                >
                  {linkLabelMap[label] ?? label}
                  <FiExternalLink className="text-[0.8rem] opacity-70" />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
