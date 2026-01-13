"use client";

import { CircularTestimonials } from "../ui/circular-testimonials";

const formattedProjects = [
    {
        quote: "A comprehensive full-stack e-commerce solution featuring real-time inventory tracking, AI-powered product recommendations, secure payment processing with Stripe, and a seamless checkout experience. Built with modern architecture patterns including microservices and event-driven design for scalability.",
        name: "Nexus Market",
        designation: "Next.js • Node.js • PostgreSQL",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        quote: "An immersive mobile-first design system focusing on accessibility and fluid animations, now used by over 500 developers worldwide. Features 50+ customizable components, dark mode support, and comprehensive documentation with interactive examples for rapid prototyping.",
        name: "Aurora UI",
        designation: "TypeScript • Tailwind • Framer Motion",
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        quote: "A distributed analytics engine capable of processing petabytes of data in real-time, purpose-built for high-throughput IoT streams. Implements custom partitioning algorithms and in-memory caching for sub-millisecond query responses across billions of data points.",
        name: "StreamFlow DB",
        designation: "Rust • Kafka • ClickHouse",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
        github: "https://github.com",
    },
    {
        quote: "A secure, decentralized identity management platform leveraging zero-knowledge proofs for privacy-preserving authentication. Enables users to verify credentials without revealing personal data, with integration support for major Web3 protocols and enterprise SSO systems.",
        name: "ZeroId",
        designation: "Solidity • React • Web3",
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        quote: "An AI-driven code assistant offering intelligent snippet generation, automated refactoring suggestions, and context-aware documentation. Trained on millions of repositories with support for 20+ programming languages and seamless IDE integration via VS Code extension.",
        name: "CodeMate AI",
        designation: "Python • OpenAI API • VS Code",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
];

// Publications formatted for Grid Layout
const gridPublications = [
    {
        id: 1,
        title: "Optimizing Transformer Attention Mechanisms",
        description: "Published in Journal of AI Research (2024). We propose a sparse attention technique that reduces computational cost by 40%.",
        tags: ["AI", "Research", "2024"],
    },
    {
        id: 2,
        title: "Consensus in Asynchronous Systems",
        description: "IEEE Transactions on Cloud Computing (2023). A new approach to leader election in high-latency edge environments.",
        tags: ["Distributed Systems", "Cloud"],
    },
];

export default function ProjectsSection() {
    return (
        <div className="section-container projects-page-container">
            <div className="section-content">
                <h1 className="section-title">Projects & Publications</h1>
                <div className="projects-two-column">
                    {/* Projects Section (Top Row) */}
                    <div className="projects-column">
                        <div className="projects-column-header">
                            <h2 className="projects-column-title">Projects</h2>
                            <span className="projects-column-subtitle">— Highlights of my engineering and design work.</span>
                        </div>

                        <div className="projects-carousel-container">
                            <CircularTestimonials
                                testimonials={formattedProjects}
                                autoplay={true}
                                colors={{
                                    name: "#ffffff",
                                    designation: "#60a5fa",
                                    testimony: "#e5e7eb",
                                    arrowBackground: "rgba(59, 130, 246, 0.2)",
                                    arrowForeground: "#ffffff",
                                    arrowHoverBackground: "#3b82f6",
                                }}
                                fontSizes={{
                                    name: "1.75rem",
                                    designation: "0.9rem",
                                    quote: "1rem",
                                }}
                            />
                        </div>
                    </div>

                    {/* Publications Section (Bottom Row) */}
                    <div className="publications-column">
                        <div className="publications-column-header">
                            <h2 className="publications-column-title">Publications</h2>
                            <span className="publications-column-subtitle">— Selected research papers and technical articles.</span>
                        </div>

                        <div className="publications-list">
                            {gridPublications.map((pub) => (
                                <div key={pub.id} className="publication-card">
                                    <div className="publication-card-content">
                                        <h3 className="publication-title">{pub.title}</h3>
                                        <p className="publication-description">{pub.description}</p>
                                    </div>
                                    <div className="publication-tags">
                                        {pub.tags.map((t) => (
                                            <span key={t} className="publication-tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
