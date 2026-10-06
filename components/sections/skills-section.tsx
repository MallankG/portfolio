"use client";

import { Code2, BrainCircuit, Layers, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
    {
        name: "Languages",
        icon: Code2,
        color: "#38bdf8",
        tagLabel: "LANGUAGES",
        skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "C", "SQL"],
    },
    {
        name: "AI / Machine Learning",
        icon: BrainCircuit,
        color: "#34d399",
        tagLabel: "FRAMEWORKS",
        skills: ["PyTorch", "LangChain", "Hugging Face", "scikit-learn", "RAG Pipelines", "Transformers", "Computer Vision", "Generative AI"],
    },
    {
        name: "Frameworks & Runtimes",
        icon: Layers,
        color: "#a78bfa",
        tagLabel: "STACK",
        skills: ["FastAPI", "Next.js", "React", "React Native / Expo", "Node.js", "Express.js", "Flask"],
    },
    {
        name: "Databases & Vector Stores",
        icon: Database,
        color: "#f472b6",
        tagLabel: "DATA",
        skills: ["PostgreSQL", "Redis", "MongoDB", "Supabase", "Pinecone", "pgvector"],
    },
    {
        name: "Cloud, DevOps & Tooling",
        icon: Wrench,
        color: "#fbbf24",
        tagLabel: "INFRA",
        skills: ["AWS", "Docker", "GitHub Actions", "Git", "Postman", "Linux", "Cursor", "Google Colab", "Kaggle"],
    },
    {
        name: "Soft Skills & Leadership",
        icon: Users,
        color: "#22d3ee",
        tagLabel: "INTERPERSONAL",
        skills: [
            "Technical Leadership",
            "Cross-Functional Collaboration",
            "Public Speaking & Debate",
            "Research Communication",
            "Mentorship",
            "Event & Team Management",
            "Analytical Problem Solving",
            "Agile Execution",
        ],
    },
];

export default function SkillsSection() {
    return (
        <section className="section-container" aria-label="Skills">
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Technical & Interpersonal Capabilities</span>
                </div>
                <h2 className="section-title">Skills Matrix</h2>
                <p className="section-description">
                    Core programming languages, machine learning frameworks, distributed databases, production toolchains, and leadership competencies.
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
                                <span className="card-tag">{cat.skills.length} {cat.tagLabel}</span>
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
