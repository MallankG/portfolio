"use client";

const mockSkills = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "CSS/SASS"] },
    { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "Redis"] },
    { category: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
];

export default function SkillsSection() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Skills</h1>
                <p className="section-description">
                    Technologies and tools I work with.
                </p>
                <div className="skills-grid">
                    {mockSkills.map((category) => (
                        <div key={category.category} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill) => (
                                    <div key={skill} className="skill-item">
                                        <span className="skill-name">{skill}</span>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: `${Math.random() * 30 + 70}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
