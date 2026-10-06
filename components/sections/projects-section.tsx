"use client";

import { ExternalLink, FileText, Github, Sparkles, BookMarked } from "lucide-react";

const featuredProject = {
    name: "Zirccle",
    badge: "Featured System Build",
    tech: "FastAPI · PostgreSQL · Redis · PyTorch · React Native / Expo · Docker · AWS",
    summary: "High-scale AI wardrobe intelligence and styling platform architected for low latency and high concurrency.",
    telemetry: [
        { label: "API Operations", val: "123 ops" },
        { label: "Routing Paths", val: "101 endpoints" },
        { label: "Database Entities", val: "36 models" },
        { label: "Stress Throughput", val: "176.6 req/s" },
    ],
    bullets: [
        "Architected a FastAPI/PostgreSQL backend supporting 123 API operations across 101 paths and 36 database relational models/tables.",
        "Built Redis-backed worker queues to offload ML inference and heavy analytics, load-testing the hosted API at 1,000 concurrent request slots with 176.6 req/sec and 5.16s P95 latency across 1,040 requests.",
        "Engineered a React Native/Expo networking layer with SWR/ETag caching, request coalescing, exponential backoff, optimistic mutations, and CI request budgets of 2–4 calls per user journey.",
        "Developed PyTorch computer vision pipelines for garment classification and wardrobe intelligence incorporating visual style and real-time weather signals.",
    ],
    github: "https://github.com/MallankG",
};

const secondaryProjects = [
    {
        name: "Puch.AI",
        status: "Live Product",
        statusColor: "#34d399",
        tech: "React · TypeScript · Express · MongoDB · Groq AI · OAuth · Vercel",
        bullets: [
            "AI-driven email automation platform integrating Gmail OAuth and Groq AI for intelligent subscription classifying and automated replies.",
            "Engineered four robust workflows for email parsing, daily summaries, OTP verification, and rule-based inbox actions.",
        ],
        github: "https://github.com/MallankG/puch-inbox-frontend",
        link: "https://puch-inbox.vercel.app/",
    },
    {
        name: "TravelEase",
        status: "Academic Project",
        statusColor: "#38bdf8",
        tech: "Next.js · TypeScript · Tailwind CSS · Flask · Gemini AI · Amadeus API",
        bullets: [
            "Built an intelligent travel planner using a Gemini multi-agent model generating personalized itineraries from trip preferences.",
            "Integrated Amadeus API and Google Maps API for real-time cost telemetry, destination discovery, and interactive trip visualization.",
        ],
    },
    {
        name: "Studyhub",
        status: "Education Platform",
        statusColor: "#a78bfa",
        tech: "Next.js · Supabase · Gemini · pgvector · Tailwind CSS",
        bullets: [
            "Built a full-stack student hub with personalized study plans, cross-semester doubt clearing, and question-paper archives.",
            "Implemented multimodal RAG note summarization with Gemini and pgvector alongside Supabase real-time auth and storage.",
        ],
        github: "https://github.com/MallankG",
    },
    {
        name: "Privacy-Preserving HAR",
        status: "Research Project",
        statusColor: "#fbbf24",
        tech: "Python · 2s-AGCN · Temporal Transformers · CLIP · NTU RGB+D",
        bullets: [
            "Designed a skeleton-based human action recognition framework using 3D joint coordinates rather than raw video to protect user privacy.",
            "Synthesized 2s-AGCN with joint-completion modules and Temporal Transformers for long-range spatial-temporal dependencies.",
        ],
        github: "https://github.com/MallankG",
    },
];

const publications = [
    {
        title: "Knowledge Graph Augmented Multilingual Benchmark for Factual LLM Evaluation",
        status: "Accepted · MAI-2026",
        badgeColor: "rgba(16, 185, 129, 0.12)",
        badgeText: "#34d399",
        detail: "Developing a multilingual benchmark for evaluating LLM factuality using knowledge graphs across Indic languages and domains. Accepted for presentation at the 6th International Conference on Machine Vision & Augmented Intelligence (MAI-2026), to appear in Springer LNEE proceedings.",
        tags: ["LLM Evaluation", "Knowledge Graphs", "Multilingual AI", "Springer LNEE"],
    },
    {
        title: "FASAL: Ensemble Crop Recommendation System using Google Earth Engine and XAI Interpretability",
        status: "Published · IEEE",
        badgeColor: "rgba(6, 182, 212, 0.12)",
        badgeText: "#22d3ee",
        detail: "Presents an ensemble crop recommendation framework leveraging Google Earth Engine satellite imagery and Explainable AI (SHAP/LIME) to provide transparent, data-driven agricultural decisions.",
        tags: ["Machine Learning", "Remote Sensing", "Explainable AI", "IEEE Xplore"],
        github: "https://github.com/MallankG/crop-recommendation-system",
        link: "https://crop-recommendation-system-research.vercel.app/",
        paper: "https://ieeexplore.ieee.org/document/11377206",
    },
    {
        title: "Transfer Learning with Pretrained Convolutional Neural Networks for Lung Disease Classification",
        status: "Research Manuscript",
        badgeColor: "rgba(168, 85, 247, 0.12)",
        badgeText: "#c084fc",
        detail: "Chest X-ray diagnostic classification system using transfer learning across pretrained CNN architectures (VGG, ResNet, EfficientNet, InceptionV3), systematically evaluating loss functions, optimizers, and feature extractors.",
        tags: ["Computer Vision", "Deep Learning", "Medical AI", "Transfer Learning"],
        github: "https://github.com/MallankG/Lung-Disease-Classification",
    },
];

export default function ProjectsSection() {
    return (
        <section className="section-container" aria-label="Projects and Publications">
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Systems & Research</span>
                </div>
                <h2 className="section-title">Projects & Publications</h2>
                <p className="section-description">
                    Production systems, distributed backends, computer vision pipelines, and peer-reviewed research papers.
                </p>
            </div>

            {/* Featured Project Spotlight: Zirccle */}
            <div className="bento-card featured-project">
                <div className="card-topbar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div className="window-dots">
                            <span className="window-dot dot-red" />
                            <span className="window-dot dot-yellow" />
                            <span className="window-dot dot-green" />
                        </div>
                        <span className="featured-badge">
                            <Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} />
                            {featuredProject.badge}
                        </span>
                    </div>
                    {featuredProject.github && (
                        <a
                            href={featuredProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                        >
                            <Github size={13} />
                            <span>Repository</span>
                        </a>
                    )}
                </div>

                <h3 className="project-title" style={{ fontSize: '1.65rem' }}>{featuredProject.name}</h3>
                <p className="project-meta-tech">{featuredProject.tech}</p>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1rem' }}>
                    {featuredProject.summary}
                </p>

                {/* Telemetry Numbers Strip */}
                <div className="telemetry-banner">
                    {featuredProject.telemetry.map((t, idx) => (
                        <div key={idx} className="telemetry-pill">
                            <span>{t.val}</span>
                            <span style={{ color: '#64748b', fontWeight: 400 }}>· {t.label}</span>
                            {idx < featuredProject.telemetry.length - 1 && <span style={{ color: 'rgba(255,255,255,0.1)' }}>|</span>}
                        </div>
                    ))}
                </div>

                <ul className="bullet-list">
                    {featuredProject.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                    ))}
                </ul>
            </div>

            {/* Secondary Projects Grid */}
            <div className="projects-grid">
                {secondaryProjects.map((p) => (
                    <div key={p.name} className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div className="card-topbar">
                                <div className="window-dots">
                                    <span className="window-dot dot-red" />
                                    <span className="window-dot dot-yellow" />
                                    <span className="window-dot dot-green" />
                                </div>
                                <span className="card-tag" style={{ color: p.statusColor, border: `1px solid ${p.statusColor}33`, padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                                    {p.status}
                                </span>
                            </div>

                            <h3 className="project-title">{p.name}</h3>
                            <p className="project-meta-tech" style={{ color: '#94a3b8', fontSize: '0.75rem', margin: '0.35rem 0 0.85rem' }}>
                                {p.tech}
                            </p>

                            <ul className="bullet-list">
                                {p.bullets.map((bullet, idx) => (
                                    <li key={idx} style={{ fontSize: '0.86rem' }}>{bullet}</li>
                                ))}
                            </ul>
                        </div>

                        {(p.github || p.link) && (
                            <div className="project-actions" style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                                {p.github && (
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.76rem' }}
                                    >
                                        <Github size={13} />
                                        <span>Code</span>
                                    </a>
                                )}
                                {p.link && (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.76rem', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}
                                    >
                                        <ExternalLink size={13} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Peer-Reviewed Publications Sub-section */}
            <div style={{ marginTop: '3rem' }}>
                <div className="section-header" style={{ marginBottom: '1.25rem' }}>
                    <div className="section-eyebrow" style={{ color: '#06b6d4' }}>
                        <BookMarked size={14} />
                        <span>Research & Manuscripts</span>
                    </div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                        Peer-Reviewed Publications & Preprints
                    </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {publications.map((pub, idx) => (
                        <div key={idx} className="publication-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                                <span
                                    className="publication-badge"
                                    style={{
                                        backgroundColor: pub.badgeColor,
                                        color: pub.badgeText,
                                    }}
                                >
                                    {pub.status}
                                </span>

                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {pub.paper && (
                                        <a
                                            href={pub.paper}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                            style={{ padding: '0.3rem 0.65rem', fontSize: '0.74rem', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)' }}
                                        >
                                            <FileText size={12} />
                                            <span>IEEE Paper</span>
                                        </a>
                                    )}
                                    {pub.github && (
                                        <a
                                            href={pub.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                            style={{ padding: '0.3rem 0.65rem', fontSize: '0.74rem' }}
                                        >
                                            <Github size={12} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                            style={{ padding: '0.3rem 0.65rem', fontSize: '0.74rem' }}
                                        >
                                            <ExternalLink size={12} />
                                            <span>Live</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h4 className="publication-title">{pub.title}</h4>
                            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 0.85rem' }}>
                                {pub.detail}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                {pub.tags.map((tag) => (
                                    <span key={tag} className="tech-tag" style={{ color: '#94a3b8' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-divider" style={{ marginTop: '2.5rem' }} />
        </section>
    );
}
