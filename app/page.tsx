'use client';

import React, { useRef, useCallback } from 'react';
import { GraduationCap } from 'lucide-react';
import MacOSDock from '../components/ui/mac-os-dock';
import WelcomeAnimation from '../components/ui/welcome-animation';
import StarsBackground from '../components/ui/stars-background';
// Static imports so the dock icons get the Pages basePath prefix
import finderIcon from '../public/dock/finder.png';
import terminalIcon from '../public/dock/terminal.png';
import calendarIcon from '../public/dock/calendar.png';
import photosIcon from '../public/dock/photos.png';
import remindersIcon from '../public/dock/reminders.png';
import mailIcon from '../public/dock/mail.png';
import {
    HomeSection,
    EducationSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    AchievementsSection,
    ContactSection
} from '../components/sections';

// Portfolio data mapping macOS apps to sections
const sampleApps = [
    {
        id: 'home',
        name: 'Home',
        icon: finderIcon.src
    },
    {
        id: 'education',
        name: 'Education',
        iconComponent: GraduationCap,
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: terminalIcon.src
    },
    {
        id: 'experience',
        name: 'Experience',
        icon: calendarIcon.src
    },
    {
        id: 'projects',
        name: 'Projects',
        icon: photosIcon.src
    },
    {
        id: 'achievements',
        name: 'Achievements',
        icon: remindersIcon.src
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: mailIcon.src
    }
];

// Section order for rendering
const sectionOrder = ['home', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];

// Map section IDs to their components
const sectionComponents: Record<string, React.FC> = {
    home: HomeSection,
    education: EducationSection,
    skills: SkillsSection,
    experience: ExperienceSection,
    projects: ProjectsSection,
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
        <div className="portfolio-page">
            {/* Welcome Animation - shows on initial load */}
            <WelcomeAnimation />

            {/* Interactive Space Starfield & Brandkit Atmospheric Canvas */}
            <StarsBackground />

            {/* All Sections Content */}
            <div className="portfolio-content">
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

            {/* The macOS Dock Component */}
            <div className="dock-shell">
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