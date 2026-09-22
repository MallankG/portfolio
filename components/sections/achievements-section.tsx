"use client";

const achievements = [
    "🏆 Google Cloud Skill Badges — Gemini for Cloud Architects, Prompt Design in Agent Platform, Responsible AI, and Introduction to LLMs",
    "📚 ML x Generative AI '25 Program — Completed program by Oxford Machine Learning School & AI for Global Goals",
    "🏆 Runner-Up at Techathon Hackathon — Among 50+ teams at MCC College (2025)",
    "🎯 6th Place at TechFiesta Hackathon — Out of 400+ teams at Pune Institute of Computer Technology (2025)",
];

const responsibilities = [
    {
        role: "Research Lead",
        org: "DJ InIT.ai",
        detail: "Led a 4-member research team in technical experimentation and publications",
        period: "2025–2026",
    },
    {
        role: "Marketing Head",
        org: "Google Developer Groups DJSCE",
        detail: "Led a 15-member team, secured INR 1 lakh+ in sponsorships, and helped organize a hackathon with 1,000+ registrations",
        period: "2024–2025",
    },
    {
    },
];

export default function AchievementsSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Achievements & Extracurriculars</h1>

            <div className="notepad-block">
                <h2 className="notepad-label">Achievements</h2>
                <ul className="notepad-list">
                    {achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                    ))}
                </ul>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Positions of Responsibility</h2>
                {responsibilities.map((r, i) => (
                    <div key={i} className="notepad-entry">
                        <div className="notepad-entry-header">
                            <h3 className="notepad-entry-title">{r.role} @ {r.org}</h3>
                            <span className="notepad-entry-meta">{r.period}</span>
                        </div>
                        <p className="notepad-text">{r.detail}</p>
                    </div>
                ))}
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Community</h2>
                <p className="notepad-text">Member of Cohere Labs Open Science Community, contributing to research in large language models and applied AI.</p>
            </div>
        </div>
    );
}
