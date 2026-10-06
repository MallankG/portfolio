"use client";

import { Briefcase, Terminal } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Quickyearning Pvt. Ltd.",
        period: "Jul 2025 – Sept 2025",
        location: "Mumbai, India",
        summary: "Architected scalable AI streaming pipelines and multi-agent financial predictive models for NSE/BSE equity market data.",
        bullets: [
            "Engineered high-throughput AI analytics pipelines using Python, Pandas, and FastAPI, achieving 150ms P80 latency across concurrent financial data feeds.",
            "Developed an autonomous multi-agent stock prediction system synthesizing signals with LangChain, Hugging Face, LSTM networks, and FinBERT sentiment extraction.",
            "Migrated modular React client architecture to Next.js SSR and overhauled state management from Redux to Zustand, reducing bundle overhead and improving load times.",
        ],
        skills: ["Python", "FastAPI", "LangChain", "Hugging Face", "FinBERT", "LSTM", "Next.js", "Zustand", "WebSocket"],
    },
    {
        role: "Software Engineer Intern",
        company: "Theta Sound",
        period: "Feb 2025 – Jul 2025",
        location: "Remote",
        summary: "Built real-time biometric stress detection and therapeutic audio delivery systems using edge ML and event-driven cloud services.",
        bullets: [
            "Constructed on-device stress detection models analyzing earbud biometric data (including photoplethysmography heart-rate telemetry) with lightweight ML and DSP filtering.",
            "Architected a spatiotemporal pattern learning algorithm in Python modeling user behavioral states across contextual temporal and spatial dimensions.",
            "Designed a low-latency event-driven pipeline orchestrating Firebase Cloud Functions with the Web Audio API for real-time acoustic sound modulation.",
        ],
        skills: ["Python", "TensorFlow Lite", "Signal Processing", "Firebase Cloud Functions", "Web Audio API", "Edge ML"],
    },
];

export default function ExperienceSection() {
    return (
        <section className="section-container" aria-label="Experience">
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Engineering Roadmap</span>
                </div>
                <h2 className="section-title">Professional Experience</h2>
                <p className="section-description">
                    Industry software engineering practice developing production AI pipelines, low-latency backends, and biometric edge systems.
                </p>
            </div>

            <div className="timeline-wrapper">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="timeline-entry">
                        <div className="timeline-node" aria-hidden="true" />

                        <div className="bento-card">
                            <div className="card-topbar">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Briefcase size={14} style={{ color: '#10b981' }} />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>{exp.company}</span>
                                </div>
                                <span className="card-tag">{exp.period}</span>
                            </div>

                            <div className="timeline-header">
                                <h3 className="timeline-role">{exp.role}</h3>
                                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{exp.location}</span>
                            </div>

                            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 0.85rem' }}>
                                {exp.summary}
                            </p>

                            <ul className="bullet-list">
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j}>{bullet}</li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.72rem', fontFamily: 'var(--font-geist-mono), monospace', marginBottom: '0.4rem' }}>
                                    <Terminal size={12} />
                                    <span>TECH STACK</span>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                    {exp.skills.map((s) => (
                                        <span key={s} className="tech-tag">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-divider" />
        </section>
    );
}
