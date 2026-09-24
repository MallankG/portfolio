"use client";

import { Download, Linkedin } from "lucide-react";

export default function HomeSection() {
    return (
        <div className="notepad-section hero-section">
            <p className="eyebrow">Software Engineer · AI/ML Builder · USC MS Computer Science</p>
            <h1 className="notepad-heading hero-title">Mallank Gogri</h1>
            <p className="notepad-subheading hero-subtitle hero-summary">Building reliable AI/ML systems, full-stack products, and research-driven developer tools.</p>

            <div className="notepad-divider" />

            <div className="notepad-block">
                <h2 className="notepad-label">About Me</h2>
                <p className="notepad-text">
                    I&apos;m a software engineer focused on building reliable, intelligent systems
                    across AI/ML, full-stack applications, and developer tooling. I enjoy turning
                    research ideas into useful products, from real-time financial analytics to
                    computer vision and agentic workflows.
                </p>
            </div>

            <div className="stat-grid" aria-label="Portfolio highlights">
                <div className="stat-card"><span className="stat-number">1</span><span className="stat-label">Software engineering internship</span></div>
                <div className="stat-card"><span className="stat-number">3</span><span className="stat-label">Full-stack and AI projects</span></div>
                <div className="stat-card"><span className="stat-number">2</span><span className="stat-label">Research papers</span></div>
            </div>

            <div className="cta-row">
                <a href="/MainResume.pdf" target="_blank" rel="noopener noreferrer" className="primary-link"><Download size={16} /> View resume</a>
                <a href="https://linkedin.com/in/mallankgogri" target="_blank" rel="noopener noreferrer" className="secondary-link"><Linkedin size={16} /> LinkedIn</a>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Quick Info</h2>
                <ul className="notepad-list">
                    <li><span className="notepad-key">📍 Location:</span> Los Angeles, CA</li>
                    <li><span className="notepad-key">🎓 Education:</span> MS Computer Science, USC</li>
                    <li><span className="notepad-key">💡 Focus:</span> AI/ML, distributed systems, full-stack engineering</li>
                    <li><span className="notepad-key">🚀 Status:</span> Open to opportunities</li>
                </ul>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Hobbies</h2>
                <p className="notepad-text">
                    Research · Building products · Learning · Music · Gaming
                </p>
            </div>
        </div>
    );
}
