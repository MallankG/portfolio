"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CyclingGreetingProps {
    className?: string;
}

type AnimationPhase = 'typing' | 'pause' | 'deleting';

const texts = [
    "Hello, my name is Mallank Gogri",
    "Fullstack Developer · AI/ML Enthusiast"
];

export function CyclingGreeting({ className }: CyclingGreetingProps) {
    const [phase, setPhase] = useState<AnimationPhase>('typing');
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const currentText = texts[textIndex];

    // Typing animation
    useEffect(() => {
        if (phase !== 'typing') return;

        if (charIndex < currentText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 80); // Typing speed
            return () => clearTimeout(timer);
        } else {
            // Typing complete, pause then start deleting
            const pauseTimer = setTimeout(() => {
                setPhase('deleting');
            }, 2000); // Pause after typing
            return () => clearTimeout(pauseTimer);
        }
    }, [phase, charIndex, currentText]);

    // Deleting/backspace animation
    useEffect(() => {
        if (phase !== 'deleting') return;

        if (charIndex > 0) {
            const timer = setTimeout(() => {
                setCharIndex(charIndex - 1);
                setDisplayedText(currentText.substring(0, charIndex - 1));
            }, 40); // Deleting speed (faster than typing)
            return () => clearTimeout(timer);
        } else {
            // Deletion complete, move to next text and start typing
            const nextIndex = (textIndex + 1) % texts.length;
            setTextIndex(nextIndex);
            setPhase('typing');
            setCharIndex(0);
            setDisplayedText("");
        }
    }, [phase, charIndex, currentText, textIndex]);

    return (
        <div className={cn("relative min-h-[4rem]", className)}>
            <h1 className="bento-greeting">
                {displayedText}
                <span className="bento-cursor">|</span>
            </h1>
        </div>
    );
}
