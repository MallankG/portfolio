"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
    {
        degree: "Master of Science in Computer Science",
        institution: "University of Southern California",
        location: "Los Angeles, CA",
        period: "Aug 2026 – May 2028",
        badge: "Viterbi School of Engineering",
        badgeColor: "rgba(239, 68, 68, 0.15)",
        badgeText: "#fca5a5",
        badgeBorder: "rgba(239, 68, 68, 0.3)",
        highlights: "Coursework: Analysis of Algorithms (CSCI-570), Database Systems (CSCI-585)",
        icon: GraduationCap,
    },
    {
        degree: "B.Tech in Information Technology, Honors in DevOps",
        institution: "Dwarkadas J. Sanghvi College of Engineering",
        location: "Mumbai, India",
        period: "Nov 2022 – May 2026",
        badge: "CGPA: 9.05 / 10.0 · Department Honors",
        badgeColor: "rgba(16, 185, 129, 0.12)",
        badgeText: "#6ee7b7",
        badgeBorder: "rgba(16, 185, 129, 0.25)",
        highlights: "Focus: Data Structures, Operating Systems, DevOps pipelines, Cloud Architecture, ML",
        icon: Award,
    },
];

export default function EducationSection() {
    return (
        <section className="section-container" aria-label="Education">
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Academic Credentials</span>
                </div>
                <h2 className="section-title">Education</h2>
                <p className="section-description">
                    Graduate and undergraduate computer science foundations emphasizing computational algorithms,
                    distributed database architectures, and engineering rigor.
                </p>
            </div>

            <div className="education-grid">
                {educationData.map((edu, idx) => {
                    const Icon = edu.icon;
                    return (
                        <div key={idx} className="education-card bento-card">
                            <div className="card-topbar">
                                <div className="window-dots">
                                    <span className="window-dot dot-red" />
                                    <span className="window-dot dot-yellow" />
                                    <span className="window-dot dot-green" />
                                </div>
                                <span className="card-tag">{edu.period}</span>
                            </div>

                            <span
                                className="education-badge"
                                style={{
                                    backgroundColor: edu.badgeColor,
                                    color: edu.badgeText,
                                    borderColor: edu.badgeBorder,
                                }}
                            >
                                {edu.badge}
                            </span>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                                <Icon size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                                <h3 className="education-degree" style={{ margin: 0 }}>{edu.degree}</h3>
                            </div>
                            <p className="education-school">
                                {edu.institution} · <span style={{ color: '#94a3b8' }}>{edu.location}</span>
                            </p>

                            <div className="education-detail">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1', marginBottom: '0.25rem', fontWeight: 600 }}>
                                    <BookOpen size={14} style={{ color: '#10b981' }} />
                                    <span>Highlights</span>
                                </div>
                                <span>{edu.highlights}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="section-divider" />
        </section>
    );
}
