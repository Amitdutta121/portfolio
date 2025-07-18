import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amit Dutta | MLOps Engineer & PhD Researcher",
  description:
      "Portfolio of Amit Dutta — MLOps engineer and PhD researcher at the University of Nevada, Reno. Specialized in ML pipelines, full-stack development, and adaptive learning systems.",
  keywords: [
    "Amit Dutta",
    "MLOps",
    "PhD Researcher",
    "University of Nevada Reno",
    "Machine Learning",
    "Deep Learning",
    "Adaptive Systems",
    "React",
    "Next.js",
    "Spring Boot",
    "React Native",
    "Portfolio",
    "Software Engineer",
    "Intelligent Tutoring Systems"
  ],
  metadataBase: new URL("https://www.amitdutta.info"),
  authors: [
    {
      name: "Amit Dutta",
      url: "https://www.amitdutta.info",
    },
  ],
  creator: "Amit Dutta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amitdutta.info",
    siteName: "Amit Dutta Portfolio",
    title: "Amit Dutta | MLOps Engineer & PhD Researcher",
    description:
        "Explore the portfolio of Amit Dutta — experienced MLOps engineer and PhD student at UNR building scalable ML systems, adaptive simulations, and full-stack applications.",
    images: [
      {
        url: "/og-image.png", // must exist in /public
        width: 1200,
        height: 630,
        alt: "Amit Dutta Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Dutta | MLOps Engineer & PhD Researcher",
    description:
        "Scalable ML pipelines. Adaptive learning systems. Full-stack apps with React, Spring Boot, and Python.",
    creator: "@yourhandle", // update with your real Twitter handle
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
