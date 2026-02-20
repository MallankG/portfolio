"use client";

const achievements = [
    "🏆 Runner-Up at Techathon Hackathon — Secured 2nd place among 50+ teams at MCC College (2025)",
    "🎯 6th Place at TechFiesta Hackathon — Ranked 6th out of 400+ teams at Pune Institute of Computer Technology (2025)",
    "🥉 3rd Place at Plannered Business Hackathon — Won during E-Summit '23, DJ Sanghvi College of Engineering (2023)",
    "📚 ML x Generative AI '25 Program — Completed program by Oxford Machine Learning School & AI for Global Goals",
];

const responsibilities = [
    {
        role: "Research Lead",
        org: "DJ InIT.ai",
        detail: "Spearheading NLP-focused research and guiding applied AI studies and publications",
        period: "Current",
    },
    {
        role: "Marketing Head",
        org: "Google Developer Groups DJSCE",
        detail: "Secured 1 lakh+ in sponsorships and organized hackathons and Cloud Study Jams",
        period: "2024–2025",
    },
    {
        role: "Vice President",
        org: "DJSCE MUN Society",
        detail: "Organized two conferences with 150+ delegates and chaired sessions across Mumbai",
        period: "2023–2024",
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
                <p className="notepad-text">
                    Member of Cohere Labs Open Science Community — Contributing to research in large language models and applied AI.
                </p>
            </div>
        </div>
    );
}
