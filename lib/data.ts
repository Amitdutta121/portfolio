import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import sharebikeImg from "@/public/sharebike.png";
import upayImg from "@/public/upay.png";
import erpImg from "@/public/erp.png";
import natPortfolioImg from "@/public/NAT_portfolio.png";
import raftImg from "@/public/raft_radar_portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Research Assistant & PhD Student",
    location: "University of Nevada, Reno",
    description:
        "Pursuing a PhD in adaptive learning systems focused on combining machine learning and evolutionary computing. Developed neural network–based algorithms for personalized training.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 – Present",
  },
  {
    title: "Senior Software Engineer",
    location: "Brainstation23, Dhaka",
    description:
        "Led development of Sharebike, a white-label bike-sharing app using React Native, Firebase, Stripe, and CodePush. Implemented Stripe for in-app payments. Built web apps with React and managed CI/CD pipelines using Fastlane and CircleCI. Also developed and maintained a microservice-based backend using Java Spring Boot. Mentored junior developers and created internal libraries to streamline development.",
    icon: React.createElement(FaReact),
    date: "2021 – 2023",
  }
  ,
  {
    title: "Software Engineer",
    location: "Sweetitech, Dhaka",
    description:
        "Developed multiple enterprise-level mobile and web applications using React, React Native, and Java Spring Boot. Built RESTful APIs, implemented MySQL database schemas, and integrated features like authentication, push notifications, and role-based access control. Contributed to ERP, HR, and pharmacy management systems deployed on both Android and iOS platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 – 2021",
  },
  {
    title: "Assistant Director, Developer",
    location: "BRAC University Computer Club",
    description:
        "Developed club management software using JavaFX and created design content using Photoshop and After Effects.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 – 2019",
  },
  {
    title: "Game Developer",
    location: "NokshaIA, Dhaka",
    description:
        "Designed and developed 2D games, implemented core gameplay mechanics, and contributed to game logic and UI programming.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 – 2018",
  },
] as const;

export const projectsData = [
  {
    title: "NAT: Neural Adaptive Trainer",
    description:
        "An adaptive system that uses a neural network to personalize training by predicting performance and targeting learner weaknesses.",
    tags: ["Unity", "Neural Network", "ML", "C#"],
    imageUrl: natPortfolioImg,
    links: {
      github: "http://164.90.151.175:8080/NAT/",
    },
    category: "Research",
  },
  {
    title: "RAFT: Rule-Adaptive Feedback Trainer",
    description:
        "Implemented a rule-based system that adjusts scenario difficulty based on student performance in maritime navigation training.",
    tags: ["Unity", "Rule-Based System", "Python"],
    imageUrl: raftImg,
    links: {
      github: "https://github.com/Amitdutta121/RAFT-Adaptive-Trainer",
    },
    category: "Research",
  },
  {
    title: "Sharebike",
    description:
        "A white-label bike-sharing app developed using React Native, Firebase, Stripe, and CodePush. Integrated CI/CD with Fastlane and CircleCI.",
    tags: ["React Native", "Firebase", "Stripe", "CI/CD"],
    imageUrl: sharebikeImg,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.sweetitech.tradesworth",
      ios: "https://apps.apple.com/sg/app/twg-hr/id1443884835",
      github: "https://github.com/Amitdutta121/sharebike-app",
    },
    category: "Mobile",
  },
  {
    title: "ERP Management App",
    description:
        "A full-featured ERP system for managing HR, inventory, and sales. Built with React Native and Redux, available on Android and iOS.",
    tags: ["React Native", "Redux", "ERP", "Mobile"],
    imageUrl: erpImg,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.sweetitech.sweetagroL",
      ios: "https://apps.apple.com/us/app/sweet-erp/id1494277774",
    },
    category: "Mobile",
  },
  {
    title: "Upay Website",
    description:
        "Responsive website for Upay built using Next.js and Tailwind. Showcases services, charges, and features based on Figma designs.",
    tags: ["Next.js", "Tailwind", "React", "Web"],
    imageUrl: upayImg,
    links: {
      web: "https://www.upaybd.com/",
    },
    category: "Web",
  },
  {
    title: "Reinforcement Learning for Trading",
    description:
        "Developed a PPO-based reinforcement learning agent in a custom OpenAI Gym environment to simulate stock trading decisions.",
    tags: ["Python", "PPO", "Reinforcement Learning", "Gym"],
    imageUrl: sharebikeImg,
    links: {
      github: "https://github.com/Amitdutta121/Reinforce_learing_trading",
    },
    category: "Machine Learning",
  },
  {
    title: "Bangla Grapheme Prediction",
    description:
        "Built a handwriting recognition model using ResNet-50 and PyTorch for Bengali graphemes. Submitted to a Kaggle competition.",
    tags: ["PyTorch", "ResNet", "Computer Vision", "Kaggle"],
    imageUrl: sharebikeImg,
    links: {
      github: "https://www.kaggle.com/code/amitdutta121/bengali-seresnext-training-with-pytorch",
    },
    category: "Machine Learning",
  },
  {
    title: "Food Recommendation System",
    description:
        "Used KNN to build a simple food recommendation engine based on user preferences.",
    tags: ["Python", "KNN", "Machine Learning"],
    imageUrl: sharebikeImg,
    links: {
      github: "https://github.com/Amitdutta121/Food-recommender-system-ML",
    },
    category: "Machine Learning",
  },
] as const;

export const skillsData = [
  // MLOps & DevOps
  "MLflow",
  "DVC",
  "Docker",
  "Kubernetes",
  "Git",
  "FastAPI",
  "AWS",

  // Programming Languages
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",

  // Backend
  "Spring Boot",
  "Node.js",
  "Express",

  // Frontend
  "React",
  "React Native",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "HTML",
  "CSS",

  // Databases & Cloud
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase"
] as const;

