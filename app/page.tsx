'use client';

import React, { useState } from 'react';
import MacOSDock from '../components/ui/mac-os-dock';

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
    id: 'contact',
    name: 'Contact',
    icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024'
  },
  {
    id: 'resume',
    name: 'Resume',
    icon: 'https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024'
  },
  {
    id: 'socials',
    name: 'Socials',
    icon: 'https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024'
  }
];

const DockDemo: React.FC = () => {
  const [openApps, setOpenApps] = useState<string[]>(['home', 'socials']);

  const handleAppClick = (appId: string) => {
    console.log('App clicked:', appId);

    // Toggle app in openApps array
    setOpenApps(prev =>
      prev.includes(appId)
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingBottom: '2rem'
    }}>
      {/* The Dock Component */}
      <MacOSDock
        apps={sampleApps}
        onAppClick={handleAppClick}
        openApps={openApps}
      />
    </div>
  );
};

export default DockDemo;
