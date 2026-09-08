"use client";

import React, { useMemo, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {
  sectionSubtitle,
  filterPillBase,
  filterPillActive,
  filterPillInactive,
} from "./design-system";

const projectsSectionShell =
  "mb-20 w-full max-w-[75rem] scroll-mt-28 sm:mb-28";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))],
    []
  );

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} id="projects" className={projectsSectionShell}>
      <SectionHeading>Featured Projects</SectionHeading>
      <p className={sectionSubtitle}>
        Research, ML, and production applications that represent my work.
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`${filterPillBase} ${
              activeCategory === category ? filterPillActive : filterPillInactive
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <React.Fragment key={project.slug}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
