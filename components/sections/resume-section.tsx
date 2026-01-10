"use client";

export default function ResumeSection() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Resume</h1>
                <p className="section-description">
                    Download my resume or view it online.
                </p>
                <div className="resume-container">
                    <div className="resume-preview">
                        <div className="resume-header">
                            <h2>John Doe</h2>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="resume-section">
                            <h4>Summary</h4>
                            <p>Passionate developer with 5+ years of experience in building modern web applications.</p>
                        </div>
                        <div className="resume-section">
                            <h4>Education</h4>
                            <p>B.S. in Computer Science - University of Technology (2018)</p>
                        </div>
                    </div>
                    <div className="resume-actions">
                        <button className="resume-btn primary">Download PDF</button>
                        <button className="resume-btn secondary">View Full Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
