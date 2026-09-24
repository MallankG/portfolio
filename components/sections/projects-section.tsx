"use client";

import { ExternalLink, FileText, Github } from "lucide-react";

const projects = [
    {
        name: "Zirccle",
        tech: "Python · FastAPI · PostgreSQL · Redis · React Native · Expo · TypeScript · PyTorch · scikit-learn · Docker · AWS",
        status: "Featured build",
        bullets: [
            "Architected a FastAPI/PostgreSQL backend supporting 123 API operations across 101 paths and 36 database models/tables.",
            "Built Redis-backed worker queues to offload ML inference and analytics, load-testing the hosted API at 1,000 concurrent request slots with 176.6 req/sec and 5.16s P95 latency across 1,040 requests.",
            "Engineered a React Native/Expo networking layer with SWR/ETag caching, request coalescing, exponential backoff, optimistic updates, and CI request budgets of 2–4 calls per mobile journey.",
            "Developed PyTorch computer vision pipelines for garment classification and wardrobe intelligence using style and weather signals for personalized recommendations.",
        ],
        github: "https://github.com/MallankG",
    },
    {
        name: "Puch.AI",
        tech: "React · TypeScript · Node.js · Express · MongoDB · Google OAuth · Twilio · Groq AI · Vercel",
        status: "Live product",
        bullets: [
            "Built an AI-driven email automation platform integrating Gmail OAuth and Groq AI to classify subscriptions and automate archiving, labelling, and personalized replies.",
            "Engineered four workflows for email parsing, daily summaries, OTP verification, and rule-based actions, integrating 5+ APIs with Node.js, Express, and MongoDB.",
        ],
        github: "https://github.com/MallankG/puch-inbox-frontend",
        link: "https://puch-inbox.vercel.app/"
    },
    {
        name: "TravelEase",
        tech: "Next.js · TypeScript · Tailwind CSS · Flask · Shadcn/ui · Google Maps API · Amadeus API · Clerk",
        status: "Academic project",
        bullets: [
            "Built an intelligent travel planner using a Gemini multi-agent model to generate personalized itineraries from trip preferences.",
            "Integrated Amadeus API and Google Maps API for real-time cost data, destination discovery, and interactive trip visualization.",
            "Implemented the application with Next.js, TypeScript, Flask, Tailwind CSS, Shadcn/ui, and Clerk authentication.",
        ],
    },
    {
        name: "Studyhub",
        tech: "Next.js · Supabase · Gemini · pgvector · Shadcn/ui · Tailwind CSS",
        status: "Education platform",
        bullets: [
            "Built a full-stack study platform for college students with study materials, personalized plans, cross-semester doubt clearing, and a question-paper archive.",
            "Implemented multimodal RAG note summarization with Gemini and pgvector, alongside Supabase authentication and real-time data handling.",
        ],
        github: "https://github.com/MallankG",
    },
    {
        name: "Privacy-Preserving Human Action Recognition",
        tech: "Python · 2s-AGCN · Temporal Transformers · Graph Autoencoders · CLIP · NTU RGB+D",
        status: "Research project",
        bullets: [
            "Designed a skeleton-based human action recognition framework using 3D joint coordinates instead of RGB imagery to support privacy-preserving inference.",
            "Combined Two-Stream Adaptive Graph Convolutional Networks, a joint-completion module for missing or low-confidence joints, and a Temporal Transformer for long-range dependencies.",
            "Explored CLIP-guided video-language graph convolution for zero-shot recognition on NTU RGB+D and Northwestern-UCLA datasets.",
        ],
        github: "https://github.com/MallankG",
    },
];

const publications = [
    {
        title: "Knowledge Graph Augmented Multilingual Benchmark for Factual LLM Evaluation",
        status: "Accepted · MAI-2026",
        detail: "Developing a multilingual benchmark for evaluating LLM factuality with knowledge graphs across Indic languages, domains, and real-world knowledge settings. Accepted for presentation at the 6th International Conference on Machine Vision & Augmented Intelligence (MAI-2026), with publication planned in Springer LNEE proceedings.",
        tags: "LLM Evaluation, Knowledge Graphs, Multilingual AI",
    },
    {
        title: "FASAL: Ensemble Crop Recommendation System using Google Earth Engine and XAI Interpretability",
        status: "Published · IEEE",
        detail: "Presents an ensemble-based crop recommendation framework leveraging Google Earth Engine and explainable AI to enable data-driven crop selection, improve model transparency, and support interpretable agricultural decisions.",
        tags: "ML, Agriculture, XAI",
        github: "https://github.com/MallankG/crop-recommendation-system",
        link: "https://crop-recommendation-system-research.vercel.app/",
        paper: "https://ieeexplore.ieee.org/document/11377206"
    },
    {
        title: "Transfer Learning with Pretrained Convolutional Neural Networks for Lung Disease Classification",
        status: "Research manuscript",
        detail: "Developed a chest X-ray diagnostic classification system using transfer learning across pretrained CNN architectures including VGG, ResNet, EfficientNet, and InceptionV3, with systematic experimentation across classifier heads, optimizers, loss functions, input sizes, and hyperparameters.",
        tags: "Computer Vision, Transfer Learning, Medical AI",
        github: "https://github.com/MallankG/Lung-Disease-Classification",
    },
];

export default function ProjectsSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Projects & Publications</h1>

            <div className="notepad-block">
                <h2 className="notepad-label">Projects</h2>
                {projects.map((p) => (
                    <div key={p.name} className="project-card">
                        <div className="entry-topline">
                            <h3 className="notepad-entry-title">{p.name}</h3>
                            <span className="entry-status">{p.status}</span>
                        </div>
                        <p className="notepad-entry-meta">{p.tech}</p>
                        <ul className="notepad-list">
                            {p.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                        <div className="resource-links">
                            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="resource-link"><Github size={15} /> GitHub</a>}
                            {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="resource-link"><ExternalLink size={15} /> Live project</a>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Publications</h2>
                {publications.map((p) => (
                    <div key={p.title} className="project-card">
                        <div className="entry-topline">
                            <h3 className="notepad-entry-title">{p.title}</h3>
                            <span className="entry-status">{p.status}</span>
                        </div>
                        <p className="notepad-text">{p.detail}</p>
                        <p className="notepad-entry-meta">Tags: {p.tags}</p>
                        <div className="resource-links">
                            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="resource-link"><Github size={15} /> GitHub</a>}
                            {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="resource-link"><ExternalLink size={15} /> Project</a>}
                            {p.paper && <a href={p.paper} target="_blank" rel="noopener noreferrer" className="resource-link"><FileText size={15} /> Paper</a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
