"use client";

import dynamic from "next/dynamic";

// Dynamic import for IconCloud with SSR disabled
const IconCloud = dynamic(
    () => import("../ui/interactive-icon-cloud").then((mod) => mod.IconCloud),
    { ssr: false }
);

// Skills for the icon cloud
const skillSlugs = [
    "typescript",
    "javascript",
    "python",
    "java",
    "cplusplus",
    "react",
    "nextdotjs",
    "nodedotjs",
    "pytorch",
    "fastapi",
    "flask",
    "express",
    "numpy",
    "pandas",
    "scikitlearn",
    "mongodb",
    "postgresql",
    "supabase",
    "redis",
    "pinecone",
    "git",
    "github",
    "docker",
    "visualstudiocode",
    "googlecolab",
    "postman",
    "kaggle",
];

// Skills categories for text display
const skillCategories = [
    {
        name: "Languages",
        skills: ["JavaScript", "Python", "Java", "C++", "C"],
    },
    {
        name: "Frameworks",
        skills: ["PyTorch", "FastAPI", "Flask", "RestAPI", "Next.js", "Express.js", "React", "Node.js"],
    },
    {
        name: "Libraries",
        skills: ["NumPy", "Pandas", "scikit-learn", "PyTorch", "Matplotlib", "Seaborn", "Plotly"],
    },
    {
        name: "Databases",
        skills: ["Pinecone", "MongoDB", "PostgreSQL", "Supabase", "Redis"],
    },
    {
        name: "Tools",
        skills: ["Git", "GitHub", "Docker", "VS Code", "Cursor", "Google Colab", "Postman", "Kaggle"],
    },
];

export default function SkillsSection() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Skills</h1>
                <div className="skills-two-column">
                    <div className="skills-text-column">
                        {skillCategories.map((category) => (
                            <div key={category.name} className="skill-category-row">
                                <span className="skill-category-name">{category.name}:</span>
                                <span className="skill-category-items">
                                    {category.skills.join(", ")}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="skills-cloud-column">
                        <IconCloud iconSlugs={skillSlugs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

