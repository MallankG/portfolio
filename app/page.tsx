'use client';

import React, { useState, useMemo } from 'react';
import MacOSDock from '../components/ui/mac-os-dock';
import ShaderBackground from '../components/ui/shader-background';
import {
    HomeSection,
    ProjectsSection,
    SkillsSection,
    ExperienceSection,
    ResumeSection,
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
        id: 'resume',
        name: 'Resume',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024'
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024'
    }
];

// Color schemes for each section
const sectionColors: Record<string, { colors: string[], speed: number }> = {
    home: {
        colors: ["#000000", "#1e1b4b", "#4338ca", "#818cf8"], // Indigo/Purple
        speed: 0.8
    },
    projects: {
        colors: ["#000000", "#4a044e", "#db2777", "#fb923c"], // Pink/Orange
        speed: 1.0
    },
    skills: {
        colors: ["#000000", "#064e3b", "#10b981", "#22d3ee"], // Emerald/Cyan
        speed: 1.2
    },
    experience: {
        colors: ["#000000", "#451a03", "#f59e0b", "#fde047"], // Amber/Yellow
        speed: 0.9
    },
    resume: {
        colors: ["#000000", "#1e3a5f", "#3b82f6", "#93c5fd"], // Blue
        speed: 0.7
    },
    contact: {
        colors: ["#000000", "#4c0519", "#e11d48", "#fda4af"], // Red/Rose
        speed: 1.1
    }
};

// Map section IDs to their components
const sectionComponents: Record<string, React.FC> = {
    home: HomeSection,
    projects: ProjectsSection,
    skills: SkillsSection,
    experience: ExperienceSection,
    resume: ResumeSection,
    contact: ContactSection,
};

const DockDemo: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [openApps, setOpenApps] = useState<string[]>(['home']);

    const handleAppClick = (appId: string) => {
        console.log('App clicked:', appId);
        setActiveSection(appId);
        setOpenApps([appId]);
    };

    const ActiveSectionComponent = sectionComponents[activeSection] || HomeSection;

    // Get current section's color scheme
    const currentColors = useMemo(() => {
        return sectionColors[activeSection] || sectionColors.home;
    }, [activeSection]);

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
        }}>
            {/* Persistent Shader Background - colors transition smoothly */}
            <ShaderBackground
                colors={currentColors.colors}
                speed={currentColors.speed}
            />

            {/* Active Section Content */}
            <div style={{
                flex: 1,
                overflow: 'auto',
                paddingBottom: '100px',
            }}>
                <ActiveSectionComponent />
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
                    openApps={openApps}
                />
            </div>
        </div>
    );
};

export default DockDemo;