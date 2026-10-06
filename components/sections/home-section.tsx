"use client";

import { Download, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function HomeSection() {
    return (
        <section className="section-container" aria-label="Introduction">
            {/* Live Availability Status Pill */}
            <div className="hero-status-pill">
                <span className="status-pulse" aria-hidden="true" />
                <span>Available for Summer/Fall 2026 roles · USC MS CS</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="hero-name">Mallank Gogri</h1>
            <p className="hero-subtitle">
                Software Engineer · AI/ML Systems Builder · USC Graduate Student
            </p>
            <p className="hero-summary">
                I engineer high-performance distributed backends, computer vision pipelines,
                and research-backed AI systems. Currently pursuing an MS in Computer Science
                at the University of Southern California, with experience architecting low-latency
                APIs, multi-agent LLM architectures, and real-time biometric inference.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
                <a
                    href="/MainResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    <Download size={16} />
                    <span>View Resume</span>
                </a>
                <a
                    href="https://github.com/MallankG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                >
                    <Github size={16} />
                    <span>GitHub</span>
                    <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
                </a>
                <a
                    href="https://linkedin.com/in/mallankgogri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
                </a>
                <a
                    href="mailto:mgogri@usc.edu"
                    className="btn-secondary"
                >
                    <Mail size={16} />
                    <span>Contact</span>
                </a>
            </div>

            {/* Telemetry HUD Metric Grid */}
            <div className="telemetry-grid" aria-label="Key engineering metrics">
                <div className="telemetry-card">
                    <div className="telemetry-header">
                        <span>Architecture</span>
                        <span className="accent">Scale</span>
                    </div>
                    <div className="telemetry-metric">
                        123<span className="accent">+</span>
                    </div>
                    <div className="telemetry-desc">
                        API operations & 36 models across 1,000 load-tested slots
                    </div>
                </div>

                <div className="telemetry-card">
                    <div className="telemetry-header">
                        <span>Performance</span>
                        <span className="accent">Latency</span>
                    </div>
                    <div className="telemetry-metric">
                        150<span className="accent">ms</span>
                    </div>
                    <div className="telemetry-desc">
                        P80 latency on streaming financial analytics pipelines
                    </div>
                </div>

                <div className="telemetry-card">
                    <div className="telemetry-header">
                        <span>Scholarship</span>
                        <span className="accent">Peer-Reviewed</span>
                    </div>
                    <div className="telemetry-metric">
                        2<span className="accent">×</span>
                    </div>
                    <div className="telemetry-desc">
                        Accepted / published research papers in IEEE & Springer LNEE
                    </div>
                </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="info-spec-grid" style={{ marginTop: '1.25rem' }}>
                <div className="info-spec-item">
                    <span className="info-spec-key">Current Program</span>
                    <span className="info-spec-val">MS Computer Science · Univ. of Southern California</span>
                </div>
                <div className="info-spec-item">
                    <span className="info-spec-key">Core Competencies</span>
                    <span className="info-spec-val">Distributed Backends, PyTorch, Multi-Agent LLMs</span>
                </div>
                <div className="info-spec-item">
                    <span className="info-spec-key">Location Base</span>
                    <span className="info-spec-val">Los Angeles, CA · Open to Relocation</span>
                </div>
                <div className="info-spec-item">
                    <span className="info-spec-key">Passions</span>
                    <span className="info-spec-val">Research, High-Throughput Systems, Hackathons, Gaming</span>
                </div>
            </div>

            <div className="section-divider" style={{ marginTop: '2.5rem' }} />
        </section>
    );
}
