"use client";

const experiences = [
    {
        year: "2025",
        role: "Software Engineer Intern",
        company: "Quickyearning Pvt. Ltd.",
        period: "Jul 2025 – Sept 2025",
        summary: "Built AI analytics and multi-agent stock prediction systems for real-time financial insights across NSE and BSE market data.",
        bullets: [
            "Built scalable AI analytics pipelines using Python, Pandas, and FastAPI, achieving 150ms P80 latency",
            "Developed a multi-agent stock prediction system using LangChain, Hugging Face, LSTM, and FinBERT",
            "Migrated modular React architecture to Next.js with SSR and replaced Redux with Zustand",
        ],
        skills: "Python, Pandas, FastAPI, LangChain, Hugging Face, LSTM, FinBERT, Next.js, Zustand, WebSocket",
    },
];

export default function ExperienceSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Professional Experience</h1>
            <p className="notepad-text" style={{ marginBottom: '0.5rem' }}>
                A record of the systems and engineering work shaping my practice in AI and software.
            </p>

            {experiences.map((exp, i) => (
                <div key={i} className="notepad-entry">
                    <div className="notepad-entry-header">
                        <h3 className="notepad-entry-title">{exp.role}</h3>
                        <span className="notepad-entry-meta">{exp.period}</span>
                    </div>
                    <p className="notepad-entry-meta" style={{ marginBottom: '0.5rem' }}>
                        @ {exp.company}
                    </p>
                    <p className="notepad-text">{exp.summary}</p>
                    {exp.bullets.length > 0 && (
                        <ul className="notepad-list">
                            {exp.bullets.map((b, j) => (
                                <li key={j}>{b}</li>
                            ))}
                        </ul>
                    )}
                    {exp.skills && (
                        <p className="notepad-entry-meta" style={{ marginTop: '0.5rem' }}>
                            Skills: {exp.skills}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
