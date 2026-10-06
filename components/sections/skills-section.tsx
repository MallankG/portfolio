"use client";

import { Code2, BrainCircuit, Layers, Database, Wrench } from "lucide-react";

const skillCategories = [
    {
        name: "Languages",
        icon: Code2,
        color: "#38bdf8",
        skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "C", "SQL"],
    },
    {
        name: "AI / Machine Learning",
        icon: BrainCircuit,
        color: "#34d399",
        skills: ["PyTorch", "LangChain", "Hugging Face", "scikit-learn", "RAG Pipelines", "Transformers", "Computer Vision", "Generative AI"],
    },
    {
        name: "Frameworks & Runtimes",
        icon: Layers,
        color: "#a78bfa",
        skills: ["FastAPI", "Next.js", "React", "React Native / Expo", "Node.js", "Express.js", "Flask"],
    },
    {
        name: "Databases & Vector Stores",
        icon: Database,
        color: "#f472b6",
        skills: ["PostgreSQL", "Redis", "MongoDB", "Supabase", "Pinecone", "pgvector"],
    },
    {
        name: "Cloud, DevOps & Tooling",
        icon: Wrench,
        color: "#fbbf24",
        skills: ["AWS", "Docker", "GitHub Actions", "Git", "Postman", "Linux", "Cursor", "Google Colab", "Kaggle"],
    },
];

export default function SkillsSection() {
    return (
        <section className="section-container" aria-label="Skills">
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Technical Capabilities</span>
                </div>
                <h2 className="section-title">Skills Matrix</h2>
                <p className="section-description">
                    Core languages, machine learning frameworks, distributed databases, and production-tested toolchains.
                </p>
            </div>

            <div className="skills-matrix">
                {skillCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <div key={cat.name} className="skill-category-card bento-card">
                            <div className="card-topbar" style={{ marginBottom: '0.75rem' }}>
                                <div className="window-dots">
                                    <span className="window-dot dot-red" />
                                    <span className="window-dot dot-yellow" />
                                    <span className="window-dot dot-green" />
                                </div>
                                <span className="card-tag">{cat.skills.length} TECHNOLOGIES</span>
                            </div>

                            <h3 className="skill-category-title" style={{ color: cat.color }}>
                                <Icon size={16} />
                                <span>{cat.name}</span>
                            </h3>

                            <div className="skill-badges-flow">
                                {cat.skills.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="section-divider" />
        </section>
    );
}
