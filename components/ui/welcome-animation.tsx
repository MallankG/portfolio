'use client';

import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeAnimationProps {
    onComplete?: () => void;
    duration?: number;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({
    onComplete,
    duration = 4000,
}) => {
    // Start with overlay visible to prevent flash of content
    const [shouldHide, setShouldHide] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [hasCheckedSession, setHasCheckedSession] = useState(false);

    useEffect(() => {
        // Check if user has already seen the animation this session
        const hasSeenAnimation = sessionStorage.getItem('hasSeenWelcome');

        if (hasSeenAnimation) {
            setShouldHide(true);
            onComplete?.();
            setHasCheckedSession(true);
            return;
        }

        setHasCheckedSession(true);

        // Set timer to start exit animation
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, duration);

        // Set timer to hide completely after exit animation
        const hideTimer = setTimeout(() => {
            setShouldHide(true);
            sessionStorage.setItem('hasSeenWelcome', 'true');
            onComplete?.();
        }, duration + 800);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(hideTimer);
        };
    }, [duration, onComplete]);

    const handleSkip = () => {
        setIsExiting(true);
        setTimeout(() => {
            setShouldHide(true);
            sessionStorage.setItem('hasSeenWelcome', 'true');
            onComplete?.();
        }, 400);
    };

    // Hide if already seen (after check) or after animation completes
    if (shouldHide && hasCheckedSession) return null;

    return (
        <AnimatePresence mode="wait">
            {!isExiting && (
                <motion.div
                    key="welcome-overlay"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    onClick={handleSkip}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        // Blurred background
                        backdropFilter: 'blur(50px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(50px) saturate(200%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {/* Lottie Welcome Animation - Large size with white filter */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{
                            width: 'min(80vw, 600px)',
                            height: 'min(80vw, 600px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // Filter to make animation white
                            filter: 'brightness(0) invert(1)',
                        }}
                    >
                        <DotLottieReact
                            src="https://lottie.host/4fcb5ee7-a9b5-46f4-b1c1-39aa36ffd1dc/Resw6gNAyx.lottie"
                            loop
                            autoplay
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </motion.div>

                    {/* Click anywhere to skip */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        style={{
                            position: 'absolute',
                            bottom: '3rem',
                            fontSize: '0.85rem',
                            color: 'rgba(255, 255, 255, 0.5)',
                            letterSpacing: '0.05em',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                        }}
                    >
                        Click anywhere to skip
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeAnimation;
