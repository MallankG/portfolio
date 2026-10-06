"use client";

import { Trophy, Award, Users, ArrowUpRight, ShieldCheck } from "lucide-react";

const achievements = [
    {
        title: "Google Cloud Skill Badges",
        detail: "Gemini for Cloud Architects, Prompt Design in Agent Platform, Responsible AI, Introduction to LLMs, and Generative AI.",
        link: "https://www.credly.com/users/mallank-gogri",
        linkLabel: "Verify on Credly",
        icon: ShieldCheck,
        color: "#38bdf8",
    },
    {
        title: "Oxford ML School & AI for Global Goals",
        detail: "Completed the rigorous ML x Generative AI '25 Program by Oxford Machine Learning School.",
        link: "https://drive.google.com/file/d/1E3GPOxMkZRmA3EcWDe1css3rKhuMq1rx/view?usp=sharing",
        linkLabel: "View Certificate",
        icon: Award,
        color: "#a78bfa",
    },
    {
        title: "Techathon Hackathon Runner-up",
        detail: "Awarded Runner-up among 50+ competing engineering teams at Techathon Hackathon, MCC College (2025).",
        icon: Trophy,
        color: "#f59e0b",
    },
    {
        title: "TechFiesta Hackathon Finalist (6th Place)",
        detail: "Placed 6th out of 400+ national engineering teams at TechFiesta Hackathon, Pune Institute of Computer Technology (2025).",
        icon: Trophy,
        color: "#f59e0b",
    },
    {
        title: "Competitive Programming",
        detail: "CodeChef 1-Star Competitive Programmer (Rating 1313).",
        icon: Award,
        color: "#34d399",
    },
    {
        title: "Cohere Labs Open Science Community",
        detail: "Active researcher collaborating on open benchmarks, foundation models, and factual evaluation pipelines.",
        icon: Users,
        color: "#22d3ee",
    },
];

const responsibilities = [
    {
        role: "LE Tech & IT Support",
        org: "University of Southern California (USC)",
        period: "2026 – Present",
        detail: "Managing learning environments, audiovisual systems, and technical IT operations across university classrooms and campus facilities.",
    },
    {
        role: "Research Lead",
        org: "DJ InIT.ai",
        period: "2025 – 2026",
        detail: "Led a 4-member research team in technical experimentation, model benchmarking, and peer-reviewed conference publications.",
    },
    {
        role: "Vice President",
        org: "DJS MUNSOC",
        period: "2024 – 2025",
        detail: "Directed executive committee operations, organized large-scale Model United Nations conferences, and mentored delegates in diplomacy and public speaking.",
    },
    {
        role: "Marketing Head",
        org: "Google Developer Groups DJSCE",
        period: "2024 – 2025",
        detail: "Led a 15-member team, secured INR 1 lakh+ in enterprise sponsorships, and organized a university hackathon with 1,000+ registrations.",
    },
];

export default function AchievementsSection() {
    return (
        <section className="section-container" aria-label="Achievements">
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Honors & Recognition</span>
                </div>
                <h2 className="section-title">Achievements & Leadership</h2>
                <p className="section-description">
                    Competitive programming benchmarks, hackathon distinctions, industry credentialing, and departmental leadership.
                </p>
            </div>

            {/* Achievements Bento Grid */}
            <div className="achievements-grid">
                {achievements.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="achievement-card">
                            <Icon size={20} style={{ color: item.color, flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 0.25rem' }}>
                                    {item.title}
                                </h3>
                                <p className="achievement-text">
                                    {item.detail}
                                </p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            fontSize: '0.76rem',
                                            fontWeight: 600,
                                            color: '#38bdf8',
                                            marginTop: '0.5rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <span>{item.linkLabel}</span>
                                        <ArrowUpRight size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Positions of Responsibility Sub-section */}
            <div style={{ marginTop: '2.5rem' }}>
                <div className="section-header" style={{ marginBottom: '1.25rem' }}>
                    <div className="section-eyebrow" style={{ color: '#a78bfa' }}>
                        <Users size={14} />
                        <span>Leadership & Community</span>
                    </div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                        Positions of Responsibility
                    </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
                    {responsibilities.map((r, idx) => (
                        <div key={idx} className="bento-card">
                            <div className="card-topbar">
                                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>{r.org}</span>
                                <span className="card-tag">{r.period}</span>
                            </div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399', margin: '0 0 0.5rem' }}>
                                {r.role}
                            </h4>
                            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                                {r.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-divider" style={{ marginTop: '2.5rem' }} />
        </section>
    );
}
