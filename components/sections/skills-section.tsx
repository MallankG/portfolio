"use client";

const skillCategories = [
    { name: "Languages", skills: "Python, JavaScript, TypeScript, Java, C++, C, SQL" },
    { name: "AI/ML", skills: "PyTorch, LangChain, Hugging Face, scikit-learn, RAG, Generative AI" },
    { name: "Frameworks", skills: "FastAPI, Next.js, React, Node.js, Express.js" },
    { name: "Databases", skills: "PostgreSQL, MongoDB, Supabase, Redis, Pinecone" },
    { name: "Cloud/DevOps & Tools", skills: "AWS, Docker, GitHub Actions, Git, GitHub, VS Code, Cursor, Postman, Kaggle, Codex" },
];

export default function SkillsSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Skills</h1>

            <div className="notepad-block">
                {skillCategories.map((cat) => (
                    <div key={cat.name} className="notepad-skill-row">
                        <span className="notepad-key">{cat.name}:</span>
                        <span className="notepad-text">{cat.skills}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
