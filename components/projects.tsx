"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { sectionShell, sectionSubtitle } from "./design-system";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section ref={ref} id="projects" className={sectionShell}>
      <SectionHeading>Featured Projects</SectionHeading>
      <p className={sectionSubtitle}>
        A focused selection of research, ML, and production applications that
        best represent my work.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
