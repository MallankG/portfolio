"use client";

const projects = [
    {
        name: "Puch.AI",
        tech: "React · TypeScript · Node.js · Express · MongoDB · Google OAuth · Twilio · Groq AI · Vercel",
        description: "Built an AI-driven email automation platform integrating Gmail OAuth and Groq AI to classify subscriptions and automate inbox actions such as archiving, labelling, and replies across user inboxes. Implemented email parsing, daily summaries, OTP-based authentication via Twilio, and rule-based automation, significantly improving inbox productivity and reducing repetitive manual effort.",
    },
    {
        name: "TravelEase",
        tech: "Next.js · TypeScript · Tailwind CSS · Flask · Shadcn/ui · Google Maps API · Amadeus API · Clerk",
        description: "Built an intelligent travel planner using a Gemini multi-agent model for personalized itinerary generation. Integrated Amadeus API and Google Maps API for real-time cost data and interactive trip visualization support.",
    },
];

const publications = [
    {
        title: "Transfer Learning for Lung Disease Classification using CNNs",
        detail: "Authored a research paper on a deep learning–based diagnostic system for chest X-ray classification. Fine-tuned 16 pretrained CNNs with an ensemble approach achieving 96.6% accuracy and 0.97 F1-score. Under review: Springer Nature Computer Science Journal.",
        tags: "Deep Learning, CNN, Medical AI",
    },
    {
        title: "FASAL: Ensemble Crop Recommendation System",
        detail: "Drafted a crop recommendation system using Random Forest, SVC, and Gradient Boosting with 98% accuracy. Integrated Google Earth Engine for NDVI estimation using Sentinel-2 imagery and applied LIME and LLaMA3-8B for XAI. Accepted at ICERECT-2025, to be published in IEEE Explore.",
        tags: "ML, Agriculture, XAI",
    },
];

export default function ProjectsSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Projects & Publications</h1>

            <div className="notepad-block">
                <h2 className="notepad-label">Projects</h2>
                {projects.map((p, i) => (
                    <div key={i} className="notepad-entry">
                        <h3 className="notepad-entry-title">{p.name}</h3>
                        <p className="notepad-entry-meta">{p.tech}</p>
                        <p className="notepad-text">{p.description}</p>
                    </div>
                ))}
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Publications</h2>
                {publications.map((p, i) => (
                    <div key={i} className="notepad-entry">
                        <h3 className="notepad-entry-title">{p.title}</h3>
                        <p className="notepad-text">{p.detail}</p>
                        <p className="notepad-entry-meta">Tags: {p.tags}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
