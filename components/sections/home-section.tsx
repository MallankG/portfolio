"use client";

export default function HomeSection() {
    return (
        <div className="notepad-section">
            <h1 className="notepad-heading">Mallank Gogri</h1>
            <p className="notepad-subheading">Fullstack Developer · AI/ML Enthusiast · Dreamer</p>

            <div className="notepad-divider" />

            <div className="notepad-block">
                <h2 className="notepad-label">About Me</h2>
                <p className="notepad-text">
                    Hey there! I&apos;m a full-stack developer with a passion for building elegant,
                    user-centric applications that solve real-world problems. My journey in tech
                    started with curiosity and has evolved into a deep love for crafting seamless
                    digital experiences. When I&apos;m not coding, you&apos;ll find me experimenting
                    with creative side projects, or keeping up with the latest in tech innovation.
                </p>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Quick Info</h2>
                <ul className="notepad-list">
                    <li><span className="notepad-key">📍 Location:</span> Mumbai, India</li>
                    <li><span className="notepad-key">🎓 Focus:</span> Full-Stack & AI</li>
                    <li><span className="notepad-key">💡 Status:</span> Open to Work</li>
                    <li><span className="notepad-key">🚀 Passion:</span> Building Cool Stuff</li>
                </ul>
            </div>

            <div className="notepad-block">
                <h2 className="notepad-label">Hobbies</h2>
                <p className="notepad-text">
                    Music · Gaming · Vibe Coding · Learning · Sports · Cooking
                </p>
            </div>
        </div>
    );
}
