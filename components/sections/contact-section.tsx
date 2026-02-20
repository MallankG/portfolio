"use client";

import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Get In Touch</h1>
            <p className="notepad-subheading">
                Open to internships, projects, and new opportunities — let&apos;s connect.
            </p>

            <div className="contact-grid">
                {/* Left: Form */}
                <form className="contact-form-col" onSubmit={handleSubmit}>
                    <div className="notepad-form-row">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="notepad-form-row">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="notepad-form-row">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="What's this about?" required value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="notepad-form-row">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message here..." rows={3} required value={formData.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="notepad-btn" disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "success" && <p className="notepad-status-ok">✓ Sent! I&apos;ll get back to you soon.</p>}
                    {status === "error" && <p className="notepad-status-err">✗ Something went wrong. Try again.</p>}
                </form>

                {/* Right: Info */}
                <div className="contact-info-col">
                    <div className="contact-info-item">
                        <span className="contact-info-label">Email</span>
                        <span className="contact-info-value">mallankgogri1@gmail.com</span>
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
                            <a href="https://github.com/mallankg" target="_blank" rel="noopener noreferrer" className="notepad-link">GitHub</a>
                            <a href="https://linkedin.com/in/mallankgogri" target="_blank" rel="noopener noreferrer" className="notepad-link">LinkedIn</a>
                            <a href="https://twitter.com/mallankg" target="_blank" rel="noopener noreferrer" className="notepad-link">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
