"use client";

import { BentoGrid, BentoItem } from "../ui/bento-grid";
import { CyclingGreeting } from "../ui/cycling-greeting";

export default function HomeSection() {
    return (
        <div className="home-bento-container">
            {/* Header with cycling greeting animation */}
            <div className="bento-header">
                <CyclingGreeting />
            </div>

            {/* Bento Grid Layout */}
            <BentoGrid>
                <BentoItem
                    title="About Me"
                    description="Developer passionate about creating beautiful experiences"
                    colSpan={2}
                    icon="👋"
                />
                <BentoItem
                    title="Projects"
                    description="Explore my work"
                    icon="🚀"
                />
                <BentoItem
                    title="Skills"
                    description="Technologies I use"
                    icon="⚡"
                />
                <BentoItem
                    title="Experience"
                    description="My professional journey"
                    icon="💼"
                    colSpan={2}
                    rowSpan={2}
                />
                <BentoItem
                    title="Contact"
                    description="Let's connect"
                    icon="✉️"
                />
                <BentoItem
                    title="Resume"
                    description="Download my CV"
                    icon="📄"
                />
            </BentoGrid>
        </div>
    );
}
