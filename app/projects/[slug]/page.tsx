import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { projectsData } from "@/lib/data";
import { cardSurface, chipClassName, primaryPillLink } from "@/components/design-system";
import { projectContent } from "@/content/projects";

const linkLabelMap: Record<string, string> = {
  github: "GitHub",
  paper: "Paper",
  web: "Live Site",
  android: "Android",
  ios: "iOS",
};

type Props = {
  params: { slug: string };
};

function getProject(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = getProject(params.slug);

  if (!project) {
    return { title: "Project not found | Amit Dutta" };
  }

  return {
    title: `${project.title} | Amit Dutta`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { title, description, tags, imageUrl, links, category, slug } = project;
  const Content = projectContent[slug];

  return (
    <main className="mx-auto mb-28 mt-8 w-full max-w-[48rem] px-4">
      <Link
        href="/#projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-gray-950 dark:text-white/60 dark:hover:text-white"
      >
        <FiArrowLeft />
        Back to projects
      </Link>

      <article className={`${cardSurface} overflow-hidden`}>
        {imageUrl && (
          <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-white/5 sm:h-80">
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              quality={95}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-10">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:bg-white/10 dark:text-white/70">
            {category}
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-snug text-gray-950 dark:text-white sm:text-4xl">
            {title}
          </h1>

          <p className="mt-5 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li className={chipClassName} key={tag}>
                {tag}
              </li>
            ))}
          </ul>

          {Content && (
            <div className="border-t border-black/5 pt-2 dark:border-white/10">
              <Content />
            </div>
          )}

          {links && Object.keys(links).length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 border-t border-black/5 pt-6 dark:border-white/10">
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
      </article>
    </main>
  );
}
