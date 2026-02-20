"use client";

const experiences = [
    {
        year: "2025",
        role: "AI Engineer Intern",
        company: "Quickyearning Pvt. Ltd.",
        period: "Jul 2025 – Sept 2025",
        summary: "Built scalable data pipelines and enhanced frontend performance for AI-driven analytics.",
        bullets: [
            "Built scalable data pipelines using Python, Pandas, and FastAPI reducing latency to 150ms",
            "Migrated modular React architecture to Next.js with SSR, enhancing performance",
            "Orchestrated state management overhaul from Redux to Zustand",
            "Integrated advanced charting with live Web-Socket API",
        ],
        skills: "Python, FastAPI, Next.js, Zustand, WebSocket",
    },
    {
        year: "2025",
        role: "Software Engineer Intern",
        company: "Theta Sound",
        period: "Feb 2025 – Jul 2025",
        summary: "Worked on real-time stress detection and therapeutic sound systems using ML and Cloud technologies.",
        bullets: [
            "Conducted real-time stress detection using earbud biometrics",
            "Architected spatiotemporal learning algorithm for task automation",
            "Designed system utilizing cloud functions and Web Audio API",
            "Implemented low-latency therapeutic sound delivery",
        ],
        skills: "ML Models, Cloud Functions, Web Audio API, Python, System Design",
    },
    {
        year: "2022",
        role: "B.Tech in Information Technology",
        company: "Dwarkadas J. Sanghvi College of Engineering",
        period: "2022 – 2026",
        summary: "Pursuing Bachelor of Technology in Information Technology with Distinction. CGPA: 9.07. 5+ Hackathons. 2 Research Papers.",
        bullets: [],
        skills: "",
    },
];

export default function ExperienceSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Experience</h1>
            <p className="notepad-text" style={{ marginBottom: '0.5rem' }}>
                A journey through my professional career, from eager student to senior developer.
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
