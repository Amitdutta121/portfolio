import React from "react";
import { secondaryPillLink } from "./design-system";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:amitdutta121@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amitdutta121/",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=V9jpKdUAAAAJ&hl=en",
  },
  {
    label: "GitHub",
    href: "https://github.com/Amitdutta121",
  },
] as const;

export default function Footer() {
  return (
    <footer className="mx-auto mb-10 mt-4 w-full max-w-[58rem] border-t border-black/10 px-4 pt-8 text-center text-sm text-gray-600 dark:border-white/10 dark:text-white/60">
      <p className="font-medium text-gray-800 dark:text-white/80">
        Amit Dutta · Ph.D. candidate building adaptive AI systems and production
        software.
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
            }
            className={secondaryPillLink}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}