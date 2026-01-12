"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { BentoGrid, BentoItem } from "../ui/bento-grid";
import { CyclingGreeting } from "../ui/cycling-greeting";

// Dynamic import with SSR disabled to prevent document not defined error
const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
    { ssr: false }
);

const hobbies = [
    {
        name: "Music",
        lottie: "https://lottie.host/1504003d-5347-47c4-a52e-8db2456a9b2d/ibWoFlRoFp.lottie"
    },
    {
        name: "Gaming",
        lottie: "https://lottie.host/19f3c270-b27c-4afe-bfe9-87aeeebe991c/qJQzWgaGLh.lottie"
    },
    {
        name: "Vibe Coding",
        lottie: "https://lottie.host/d8108cd1-8405-4485-8a47-04184ad7646c/H3AhL0iXQM.lottie"
    },
    {
        name: "Learning",
        lottie: "https://lottie.host/d8c6f8f1-9d7b-4099-8bb2-8ca890e06a65/v0ciqSyutL.lottie"
    },
    {
        name: "Sports",
        lottie: "https://lottie.host/15086f15-ed63-4f9e-86cc-d15960fca7a6/swJ3A9AORY.lottie"
    },
    {
        name: "Cooking",
        lottie: "https://lottie.host/5e8b52eb-e249-4be0-b79d-024f4ad88fc3/NdBNDimO8U.lottie"
    },
];

function HobbiesCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % hobbies.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hobbies-carousel">
            <div className="hobby-cards-container">
                {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className={`hobby-card ${index === activeIndex ? "active" : ""}`}
                    >
                        <div className="hobby-card-animation">
                            {mounted && (
                                <DotLottieReact
                                    src={hobby.lottie}
                                    loop
                                    autoplay
                                    style={{ width: "200px", height: "200px" }}
                                />
                            )}
                        </div>
                        <span className="hobby-card-name">{hobby.name}</span>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {hobbies.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default function HomeSection() {
    return (
        <div className="home-bento-container">
            {/* Header with cycling greeting animation */}
            <div className="bento-header">
                <CyclingGreeting />
            </div>

            {/* Bento Grid Layout */}
            <BentoGrid>
                {/* Profile Image - Vertical box */}
                <BentoItem
                    rowSpan={2}
                    className="bento-image-box"
                >
                    <div className="bento-profile-image">
                        <img
                            src="/profile.jpg"
                            alt="Mallank Gogri"
                            className="profile-img"
                        />
                    </div>
                </BentoItem>

                <BentoItem
                    title="About Me"
                    colSpan={2}
                    className="bento-about"
                >
                    <div className="about-content">
                        <p className="about-intro">
                            Hey there! I'm a full-stack developer with a passion for building elegant,
                            user-centric applications that solve real-world problems. My journey in tech
                            started with curiosity and has evolved into a deep love for crafting seamless
                            digital experiences.When I'm not coding, you'll find me experimenting
                            with creative side projects, or keeping up with the latest in tech innovation.
                        </p>
                        <div className="about-highlights-horizontal">
                            <div className="highlight-badge">
                                <span className="badge-icon">📍</span>
                                <span className="badge-label">Location</span>
                                <span className="badge-value">India</span>
                            </div>
                            <div className="highlight-badge">
                                <span className="badge-icon">🎓</span>
                                <span className="badge-label">Focus</span>
                                <span className="badge-value">Full-Stack & AI</span>
                            </div>
                            <div className="highlight-badge">
                                <span className="badge-icon">💡</span>
                                <span className="badge-label">Status</span>
                                <span className="badge-value">Open to Work</span>
                            </div>
                            <div className="highlight-badge">
                                <span className="badge-icon">🚀</span>
                                <span className="badge-label">Passion</span>
                                <span className="badge-value">Building Cool Stuff</span>
                            </div>
                        </div>
                    </div>
                </BentoItem>

                <BentoItem
                    title="Hobbies"
                    className="bento-hobbies"
                >
                    <HobbiesCarousel />
                </BentoItem>

                <BentoItem
                    title="Skills"
                    description="Technologies I use"
                    icon="⚡"
                    className="bento-skills"
                />

                <BentoItem
                    title="Experience"
                    description="My professional journey"
                    icon="💼"
                    className="bento-experience"
                />

                <BentoItem
                    title="Contact"
                    description="Let's connect"
                    icon="✉️"
                    className="bento-contact"
                />
            </BentoGrid>
        </div>
    );
}
