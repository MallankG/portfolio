"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Get In Touch</h1>
            <p className="notepad-subheading">
                Open to internships, projects, and new opportunities — let&apos;s connect.
            </p>

            <div className="contact-info-single">
                <div className="contact-info-item">
                    <span className="contact-info-label">Email</span>
                    <span className="contact-info-value">
                        <a href="mailto:mallankgogri1@gmail.com" className="notepad-link-email">
                            mallankgogri1@gmail.com
                        </a>
                    </span>
                </div>
                <div className="contact-info-item">
                    <span className="contact-info-label">Location</span>
                    <span className="contact-info-value">Mumbai, India</span>
                </div>
                <div className="contact-info-item">
                    <span className="contact-info-label">Availability</span>
                    <span className="contact-info-value">Open to opportunities</span>
                </div>
                <div className="contact-info-item">
                    <span className="contact-info-label">Connect</span>
                    <div className="contact-links">
                        <a href="https://github.com/mallankg" target="_blank" rel="noopener noreferrer" className="notepad-link" title="GitHub" style={{ display: "flex", alignItems: "center", padding: "0.25rem" }}>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/mallankgogri" target="_blank" rel="noopener noreferrer" className="notepad-link" title="LinkedIn" style={{ display: "flex", alignItems: "center", padding: "0.25rem" }}>
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com/mallankg" target="_blank" rel="noopener noreferrer" className="notepad-link" title="Twitter" style={{ display: "flex", alignItems: "center", padding: "0.25rem" }}>
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
