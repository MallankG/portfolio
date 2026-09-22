"use client";

export default function HomeSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Mallank Gogri</h1>
            <p className="notepad-subheading">Software Engineer · AI/ML Builder · USC MS Computer Science</p>

            <div className="notepad-divider" />

            <div className="notepad-block">
                <h2 className="notepad-label">About Me</h2>
                <p className="notepad-text">
                    I&apos;m a software engineer focused on building reliable, intelligent systems
                    across AI/ML, full-stack applications, and developer tooling. I enjoy turning
                    research ideas into useful products, from real-time financial analytics to
                    computer vision and agentic workflows.
                </p>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Quick Info</h2>
                <ul className="notepad-list">
                    <li><span className="notepad-key">📍 Location:</span> Los Angeles, CA</li>
                    <li><span className="notepad-key">🎓 Education:</span> MS Computer Science, USC</li>
                    <li><span className="notepad-key">💡 Focus:</span> AI/ML, distributed systems, full-stack engineering</li>
                    <li><span className="notepad-key">🚀 Status:</span> Open to opportunities</li>
                </ul>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Hobbies</h2>
                <p className="notepad-text">
                    Research · Building products · Learning · Music · Gaming
                </p>
            </div>
        </div>
    );
}
