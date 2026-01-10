"use client";

const mockExperience = [
    {
        id: 1,
        role: "Senior Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        description: "Leading frontend development team and architecture decisions.",
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "StartUp Inc",
        period: "2020 - 2022",
        description: "Built scalable web applications and APIs.",
    },
    {
        id: 3,
        role: "Junior Developer",
        company: "Agency XYZ",
        period: "2018 - 2020",
        description: "Developed responsive websites for various clients.",
    },
];

export default function ExperienceSection() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Experience</h1>
                <p className="section-description">
                    My professional journey so far.
                </p>
                <div className="timeline">
                    {mockExperience.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                                <span className="exp-period">{exp.period}</span>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
