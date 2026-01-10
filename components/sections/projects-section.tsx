"use client";

const mockProjects = [
    { id: 1, title: "Project Alpha", description: "A modern web application", tech: ["React", "Node.js"] },
    { id: 2, title: "Project Beta", description: "Mobile-first design system", tech: ["TypeScript", "CSS"] },
    { id: 3, title: "Project Gamma", description: "AI-powered analytics", tech: ["Python", "TensorFlow"] },
];

export default function ProjectsSection() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Projects</h1>
                <p className="section-description">
                    A collection of my recent work and experiments.
                </p>
                <div className="projects-grid">
                    {mockProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
