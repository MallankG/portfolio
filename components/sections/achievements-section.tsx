"use client";

const achievements = [
    { text: "Competitive Programming: CodeChef 1-star (1313)" },
    { text: "Google Cloud Skill Badges: Gemini for Cloud Architects, Prompt Design in Agent Platform, Responsible AI, Introduction to Responsible AI, Introduction to LLMs, and Introduction to Generative AI", link: "https://www.credly.com/users/mallank-gogri", linkLabel: "Credly profile" },
    { text: "Completed the ML x Generative AI '25 Program by Oxford Machine Learning School and AI for Global Goals", link: "https://drive.google.com/file/d/1E3GPOxMkZRmA3EcWDe1css3rKhuMq1rx/view?usp=sharing", linkLabel: "Certificate" },
    { text: "Runner-up among 50+ teams at Techathon Hackathon, MCC College (2025)" },
    { text: "6th place out of 400+ teams at TechFiesta Hackathon, Pune Institute of Computer Technology (2025)" },
    { text: "Member of Cohere Labs Open Science Community, contributing to research in large language models and applied AI" },
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
];

export default function AchievementsSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Achievements & Extracurriculars</h1>

            <div className="notepad-block">
                <h2 className="notepad-label">Achievements</h2>
                <ul className="notepad-list">
                    {achievements.map((achievement) => (
                        <li key={achievement.text}>
                            {achievement.text}
                            {achievement.link && <>{" "}<a href={achievement.link} target="_blank" rel="noopener noreferrer" className="inline-link">{achievement.linkLabel}</a></>}
                        </li>
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
