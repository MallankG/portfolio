"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Dynamic import with SSR disabled
const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
    { ssr: false }
);

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Get In Touch</h1>

                <div className="contact-two-column">
                    <div className="contact-text-column">
                        <p className="contact-invite">
                            I am currently open to internships, projects, and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="contact-container">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="What is this regarding?"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Your message..."
                                        rows={3}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    style={{ marginTop: "0.25rem" }}
                                    disabled={status === "submitting"}
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                                {status === "success" && (
                                    <p className="status-message success">Message sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="status-message error">Failed to send message. Please try again.</p>
                                )}
                            </form>

                            <div className="contact-bottom-section">
                                <div className="contact-info-small">
                                    <div className="info-item-small">
                                        <span className="info-label-small">Email</span>
                                        <span className="info-value-small">mallankgogri1@gmailcom</span>
                                    </div>
                                    <div className="info-item-small">
                                        <span className="info-label-small">Location</span>
                                        <span className="info-value-small">Mumbai, India</span>
                                    </div>
                                </div>

                                <div className="socials-container">
                                    <p className="connect-invite">Let's connect!</p>
                                    <div className="socials-row">
                                        <a href="https://github.com/mallankg" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub">
                                            <FaGithub />
                                        </a>
                                        <a href="https://linkedin.com/in/mallankgogri" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                                            <FaLinkedin />
                                        </a>
                                        <a href="https://twitter.com/mallankg" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="Twitter">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-lottie-column">
                        <DotLottieReact
                            src="https://lottie.host/be052cdf-53ff-426b-99fa-87d464ae29c1/44SuNuSYNG.lottie"
                            loop
                            autoplay
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
