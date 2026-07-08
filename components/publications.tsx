"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import {
  cardSurface,
  primaryPillLink,
  sectionShell,
  sectionSubtitle,
} from "./design-system";

const publications = [
  {
    title:
      "Weakness Adaptation in Adaptive Training for Nautical Rules of the Road",
    authors: "Amit Dutta and Sushil J. Louis",
    venue:
      "Adaptive Instructional Systems, 8th International Conference, AIS 2026",
    details:
      "Held as part of HCII 2026, Montreal, QC, Canada, July 26-31, 2026. Springer Nature, p. 301.",
    year: "2026",
    link: "https://scholar.google.com/citations?user=V9jpKdUAAAAJ&hl=en",
  },
  {
    title:
      "Evaluating Adaptive Training for Nautical Rules of the Road",
    authors: "Amit Dutta and Sushil J. Louis",
    venue: "International Conference on Human-Computer Interaction",
    details: "Springer, pp. 19-34.",
    year: "2025",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=V9jpKdUAAAAJ&citation_for_view=V9jpKdUAAAAJ:d1gkVwhDpl0C",
  },
  {
    title:
      "ROBB: Recurrent Proximal Policy Optimization Reinforcement Learning for Optimal Block Formation in Bitcoin Blockchain Network",
    authors:
      "Amit Dutta, Nafiz Imtiaz Rafin, M. Ali Akber Dewan, and Md. Golam Rabiul Alam",
    venue: "IEEE Access",
    details: "Vol. 12, pp. 31287-31311. IEEE.",
    year: "2024",
    link: "https://scholar.google.com/citations?user=V9jpKdUAAAAJ&hl=en",
  },
  {
    title:
      "Electromagnetic dispersion of surface plasmon polariton at the EG/SiC interface",
    authors: "Biplob Kumar Daas and Amit Dutta",
    venue: "Journal of Materials Research",
    details: "Vol. 29, no. 21, pp. 2485-2490. Springer.",
    year: "2014",
    link: "https://scholar.google.com/citations?user=V9jpKdUAAAAJ&hl=en",
  },
] as const;

export default function Publications() {
  return (
    <section id="research" className={sectionShell}>
      <SectionHeading>Research & Publications</SectionHeading>
      <p className={sectionSubtitle}>
        Peer-reviewed work connecting adaptive training, reinforcement learning,
        and applied AI systems.
      </p>

      <div className="grid gap-5">
        {publications.map((publication, index) => (
          <motion.article
            key={publication.title}
            className={`${cardSurface} p-6`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold leading-snug text-gray-950 dark:text-white">
                  {publication.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-white/60">
                  {publication.authors}
                </p>
                <p className="mt-3 leading-7 text-gray-700 dark:text-white/70">
                  <span className="font-medium">{publication.venue}</span>,{" "}
                  {publication.year}. {publication.details}
                </p>
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${primaryPillLink} shrink-0`}
              >
                View Paper
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
