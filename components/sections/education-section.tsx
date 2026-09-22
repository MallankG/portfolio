"use client";

const education = [
    {
        role: "Master of Science in Computer Science",
        company: "University of Southern California, Los Angeles, CA",
        period: "Aug 2026 – May 2028",
        detail: "Coursework: Analysis of Algorithms (CSCI-570), Database Systems (CSCI-585)",
    },
    {
        role: "B.Tech in Information Technology, Honors in DevOps",
        company: "Dwarkadas J. Sanghvi College of Engineering, Mumbai, India",
        period: "Nov 2022 – May 2026",
        detail: "CGPA: 9.05/10",
    },
];

export default function EducationSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Education</h1>

            {education.map((entry) => (
                <div key={entry.role} className="notepad-entry">
                    <div className="notepad-entry-header">
                        <h3 className="notepad-entry-title">{entry.role}</h3>
                        <span className="notepad-entry-meta">{entry.period}</span>
                    </div>
                    <p className="notepad-entry-meta" style={{ marginBottom: '0.5rem' }}>
                        @ {entry.company}
                    </p>
                    <p className="notepad-text">{entry.detail}</p>
                </div>
            ))}
        </div>
    );
}
