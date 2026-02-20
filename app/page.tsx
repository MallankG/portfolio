'use client';

import React, { useRef, useCallback } from 'react';
import MacOSDock from '../components/ui/mac-os-dock';
import WelcomeAnimation from '../components/ui/welcome-animation';
import {
    HomeSection,
    ProjectsSection,
    SkillsSection,
    ExperienceSection,
    AchievementsSection,
    ContactSection
} from '../components/sections';

// Portfolio data mapping macOS apps to sections
const sampleApps = [
    {
        id: 'home',
        name: 'Home',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024'
    },
    {
        id: 'projects',
        name: 'Projects',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024'
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024'
    },
    {
        id: 'experience',
        name: 'Experience',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024'
    },
    {
        id: 'achievements',
        name: 'Achievements',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/reminders-2021-05-28.png?rf=1024'
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024'
    }
];

// Section order for rendering
const sectionOrder = ['home', 'projects', 'skills', 'experience', 'achievements', 'contact'];

// Map section IDs to their components
const sectionComponents: Record<string, React.FC> = {
    home: HomeSection,
    projects: ProjectsSection,
    skills: SkillsSection,
    experience: ExperienceSection,
    achievements: AchievementsSection,
    contact: ContactSection,
};

const Portfolio: React.FC = () => {
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Scroll to section when dock icon is clicked
    const handleAppClick = useCallback((appId: string) => {
        const sectionEl = sectionRefs.current[appId];
        if (sectionEl) {
            sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="notebook-page">
            {/* Welcome Animation - shows on initial load */}
            <WelcomeAnimation />

            {/* Notebook Background */}
            <div className="notebook-bg" aria-hidden="true" />

            {/* All Sections Content */}
            <div className="notebook-content">
                {sectionOrder.map((sectionId) => {
                    const SectionComponent = sectionComponents[sectionId];
                    return (
                        <div
                            key={sectionId}
                            id={sectionId}
                            ref={(el) => { sectionRefs.current[sectionId] = el; }}
                        >
                            <SectionComponent />
                        </div>
                    );
                })}
            </div>

            {/* The Dock Component */}
            <div style={{
                position: 'fixed',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
            }}>
                <MacOSDock
                    apps={sampleApps}
                    onAppClick={handleAppClick}
                    openApps={[]}
                />
            </div>
        </div>
    );
};

export default Portfolio;