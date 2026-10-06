"use client";

import { Download, Github, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="section-container" aria-label="Contact" style={{ paddingBottom: '3rem' }}>
            <div className="section-header">
                <div className="section-eyebrow">
                    <span className="section-eyebrow-dot" />
                    <span>Communication Channels</span>
                </div>
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-description">
                    Open to summer and fall 2026 software engineering, AI/ML, and systems internships and full-time opportunities.
                </p>
            </div>

            <div className="contact-hub-card">
                <div className="card-topbar">
                    <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                    </div>
                    <span className="card-tag">STATUS: TRANSMITTING</span>
                </div>

                <div style={{ maxWidth: '600px' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem' }}>
                        Let&apos;s build intelligent systems together.
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                        Whether discussing distributed architecture, AI pipelines, research collaborations, or recruitment,
                        feel free to reach out directly.
                    </p>
                </div>

                <div className="contact-channels-grid">
                    <div className="contact-channel-item">
                        <span className="contact-channel-label">
                            <Mail size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            Primary Email
                        </span>
                        <a href="mailto:mgogri@usc.edu" className="contact-channel-val">
                            mgogri@usc.edu
                        </a>
                    </div>

                    <div className="contact-channel-item">
                        <span className="contact-channel-label">
                            <Phone size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            Direct Phone
                        </span>
                        <a href="tel:+12132722623" className="contact-channel-val">
                            +1 (213) 272-2623
                        </a>
                    </div>

                    <div className="contact-channel-item">
                        <span className="contact-channel-label">
                            <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            Location Base
                        </span>
                        <span className="contact-channel-val" style={{ color: '#cbd5e1' }}>
                            Los Angeles, CA · USC
                        </span>
                    </div>

                    <div className="contact-channel-item">
                        <span className="contact-channel-label">
                            <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            Current Availability
                        </span>
                        <span className="contact-channel-val" style={{ color: '#34d399' }}>
                            Summer / Fall 2026
                        </span>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div className="contact-socials-row">
                        <a
                            href="https://github.com/mallankg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            title="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/mallankgogri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            title="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="/MainResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            title="Download Resume"
                        >
                            <Download size={18} />
                        </a>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-geist-mono), monospace' }}>
                        Mallank Gogri © {new Date().getFullYear()} · Built with Next.js & TypeScript
                    </div>
                </div>
            </div>
        </section>
    );
}
