"use client";

const skillCategories = [
    { name: "Languages", skills: "JavaScript, Python, Java, C++, C" },
    { name: "Frameworks", skills: "PyTorch, FastAPI, Flask, RestAPI, Next.js, Express.js, React, Node.js" },
    { name: "Libraries", skills: "NumPy, Pandas, scikit-learn, PyTorch, Matplotlib, Seaborn, Plotly" },
    { name: "Databases", skills: "Pinecone, MongoDB, PostgreSQL, Supabase, Redis" },
    { name: "Tools", skills: "Git, GitHub, Docker, VS Code, Cursor, Google Colab, Postman, Kaggle" },
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
