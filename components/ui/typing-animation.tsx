"use client";

import { useEffect, useState, useRef, useCallback } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
    onComplete?: () => void;
    startDelay?: number;
}

export function TypingAnimation({
    text,
    duration = 200,
    className,
    onComplete,
    startDelay = 0,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [i, setI] = useState<number>(0);
    const [started, setStarted] = useState<boolean>(startDelay === 0);
    const hasCompleted = useRef<boolean>(false);

    // Handle start delay
    useEffect(() => {
        if (startDelay > 0) {
            const delayTimer = setTimeout(() => {
                setStarted(true);
            }, startDelay);
            return () => clearTimeout(delayTimer);
        }
    }, [startDelay]);

    // Reset state when text changes
    useEffect(() => {
        setDisplayedText("");
        setI(0);
        hasCompleted.current = false;
        if (startDelay === 0) {
            setStarted(true);
        } else {
            setStarted(false);
        }
    }, [text, startDelay]);

    useEffect(() => {
        if (!started) return;

        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
                if (!hasCompleted.current && onComplete) {
                    hasCompleted.current = true;
                    onComplete();
                }
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [duration, i, text, started, onComplete]);

    return (
        <h1
            className={cn(
                "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
                className,
            )}
        >
            {displayedText}
        </h1>
    );
}
