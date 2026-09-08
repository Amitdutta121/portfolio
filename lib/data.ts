import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sharebikeImg from "@/public/sharebike.png";
import upayImg from "@/public/upay.png";
import erpImg from "@/public/erp.png";
import natPortfolioImg from "@/public/NAT_portfolio.png";
import raftImg from "@/public/raft_radar_portfolio.png";
import uatDashboardImg from "@/public/uat_dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Research",
    hash: "#research",
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
    title: "Universal Adaptive Trainer",
    slug: "universal-adaptive-trainer",
    description:
        "PhD research platform that turns a textbook into an adaptive Python course: RAG question generation against a topic taxonomy, deterministic sandboxed evaluation plus an LLM-as-judge layer aligned to professor feedback with GEPA, and Bayesian Knowledge Tracing that picks each student's next question from their weak topics.",
    tags: ["FastAPI", "Next.js", "RAG", "LLM-as-Judge", "BKT", "Python"],
    imageUrl: uatDashboardImg,
    links: {
      github: "https://github.com/Amitdutta121/Universal_adaptive_trainer",
    },
    category: "Research",
  },
  {
    title: "NAT & NAT-LLM: Adaptive Training + AI Feedback",
    slug: "nat-nat-llm",
    description:
        "NAT is a domain-agnostic, multi-parameter adaptive training algorithm that selects each learner's next activity from performance, weaknesses, and cognitive load; NAT-LLM generates after-action feedback from expert-written examples. Applied in a Unity-based naval simulator: NAT statistically outperformed non-adaptive training, and NAT-LLM reached 98% agreement with expert evaluations.",
    tags: ["Unity", "Adaptive Learning", "LLM Feedback", "C#", "Python"],
    imageUrl: natPortfolioImg,
    links: {
      github: "https://github.com/Amitdutta121/Neuro-Adaptive-Trainer",
    },
    category: "Research",
  },
  {
    title: "RAFT: Rule-Adaptive Feedback Trainer",
    slug: "raft",
    description:
        "Implemented a rule-based system that adjusts scenario difficulty based on student performance in maritime navigation training.",
    tags: ["Unity", "Rule-Based System", "Python"],
    imageUrl: raftImg,
    links: {
      github: "https://github.com/Amitdutta121/RAFT-Adaptive-Trainer",
      paper: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=V9jpKdUAAAAJ&citation_for_view=V9jpKdUAAAAJ:d1gkVwhDpl0C",
    },
    category: "Research",
  },
  {
    title: "MyThinker",
    slug: "mythinker",
    description:
        "A stateful AI thinking-partner agent that refines a plan as you chat: one conversational agent with narrowly scoped tools where tool selection is the router, and deterministic precondition gates (proposal → authorization → commitment) instead of a graph of agents. Persistent memory in SQLite, streaming API, Next.js workspace.",
    tags: ["LangGraph", "FastAPI", "Next.js", "Agents", "SQLite"],
    imageUrl: undefined,
    links: {
      github: "https://github.com/Amitdutta121/MyThinker",
    },
    category: "AI Systems",
  },
  {
    title: "Flowr",
    slug: "flowr",
    description:
        "A local, on-device AI dictation app for Windows: hold a hotkey, speak, release, and the transcription is inserted into the focused app. Local Whisper / Parakeet / Moonshine speech recognition with Silero VAD endpointing, local-LLM cleanup via Ollama with per-app style context, custom vocabulary and voice snippets, and a fine-tuned speech-correction model — no account, cloud, or telemetry.",
    tags: ["Rust", "Tauri 2", "React", "ONNX", "Whisper", "Ollama"],
    imageUrl: undefined,
    links: {
      github: "https://github.com/Amitdutta121/Flowr",
    },
    category: "AI Systems",
  },
  {
    title: "Sharebike",
    slug: "sharebike",
    description:
        "End-to-end white-label bike-sharing platform serving 10,000+ users. Mobile app in React Native with Firebase Authentication, Stripe payments, and CircleCI/CodePush deployment pipelines; backend fleet-management services in Spring Boot microservices with Google Cloud Pub/Sub event-driven ingestion for real-time device data across regions.",
    tags: ["React Native", "Spring Boot", "Firebase", "Stripe", "Google Cloud Pub/Sub", "CI/CD"],
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
    slug: "erp-management-app",
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
    slug: "upay-website",
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
    title: "Multimodal Knowledge Distillation for VQA",
    slug: "multimodal-kd-vqa",
    description:
        "Distilled a ViLT VQA model into a ~half-size student (6 layers, hidden size 384) under four losses — logit, hidden-state, attention, and hybrid — trained and evaluated through one shared harness on VQA v1.",
    tags: ["PyTorch", "ViLT", "Knowledge Distillation", "VQA", "Hugging Face"],
    imageUrl: undefined,
    links: {},
    category: "Machine Learning",
  },
  {
    title: "Traffic Anomaly Detection System",
    slug: "traffic-anomaly-detection",
    description:
        "End-to-end MLOps pipeline for anomaly detection on traffic sensor data, using MLflow and DVC for experiment tracking and reproducibility, model serving containerized with FastAPI and Docker, and Prometheus/Grafana monitoring for real-time metrics and observability.",
    tags: ["MLOps", "MLflow", "DVC", "FastAPI", "Docker", "Prometheus", "Grafana"],
    imageUrl: undefined,
    links: {},
    category: "Machine Learning",
  },
  {
    title: "ROBB: Recurrent PPO for Blockchain Block Formation",
    slug: "robb",
    description:
        "Designed and evaluated a recurrent reinforcement learning approach that dynamically forms blocks in a Bitcoin blockchain network, balancing waiting time against block utilization. Published in IEEE Access.",
    tags: ["Reinforcement Learning", "Recurrent PPO", "Blockchain", "Python"],
    imageUrl: undefined,
    links: {
      github: "https://github.com/Amitdutta121/blockchain-reinforcement-learning",
      paper: "/robb-recurrent-ppo-blockchain.pdf",
    },
    category: "Machine Learning",
  },
  {
    title: "Reinforcement Learning for Trading",
    slug: "rl-trading",
    description:
        "BSc thesis: a PPO + RNN-LSTM trading agent in a custom OpenAI Gym environment, tuned via a 50-set technical-indicator search, that outperformed manual trading on the same indicators.",
    tags: ["Python", "PPO", "RNN-LSTM", "Reinforcement Learning", "Gym", "Optuna"],
    imageUrl: undefined,
    links: {
      paper: "/rl-trading-thesis.pdf",
    },
    category: "Machine Learning",
  },
  {
    title: "Bangla Grapheme Prediction",
    slug: "bangla-grapheme-prediction",
    description:
        "Trained a multi-head SEResNeXt50 classifier in PyTorch to jointly predict grapheme root, vowel, and consonant diacritics for Bengali handwriting. Submitted to a Kaggle competition.",
    tags: ["PyTorch", "SEResNeXt", "Computer Vision", "Kaggle"],
    imageUrl: undefined,
    links: {
      github: "https://www.kaggle.com/code/amitdutta121/bengali-seresnext-training-with-pytorch",
    },
    category: "Machine Learning",
  },
  {
    title: "Food Recommendation System",
    slug: "food-recommendation-system",
    description:
        "Used KNN to build a simple food recommendation engine based on user preferences.",
    tags: ["Python", "KNN", "Machine Learning"],
    imageUrl: undefined,
    links: {
      github: "https://github.com/Amitdutta121/Food-recommender-system-ML",
    },
    category: "Machine Learning",
  },
] as const;


