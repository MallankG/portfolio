"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src: string;
    github?: string;
    demo?: string;
}

interface Colors {
    name?: string;
    designation?: string;
    testimony?: string;
    arrowBackground?: string;
    arrowForeground?: string;
    arrowHoverBackground?: string;
}

interface FontSizes {
    name?: string;
    designation?: string;
    quote?: string;
}

interface CircularTestimonialsProps {
    testimonials: Testimonial[];
    autoplay?: boolean;
    colors?: Colors;
    fontSizes?: FontSizes;
}

export const CircularTestimonials = ({
    testimonials,
    autoplay = true,
    colors = {},
    fontSizes = {},
}: CircularTestimonialsProps) => {
    // Color & font config
    const colorName = colors.name ?? "#000";
    const colorDesignation = colors.designation ?? "#6b7280";
    const colorTestimony = colors.testimony ?? "#4b5563";
    const colorArrowBg = colors.arrowBackground ?? "#141414";
    const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
    const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
    const fontSizeName = fontSizes.name ?? "1.5rem";
    const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
    const fontSizeQuote = fontSizes.quote ?? "1.125rem";

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverPrev, setHoverPrev] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);

    const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
    const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

    // Autoplay
    useEffect(() => {
        if (autoplay) {
            autoplayIntervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonialsLength);
            }, 5000);
        }
        return () => {
            if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
        };
    }, [autoplay, testimonialsLength]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        // eslint-disable-next-line
    }, [activeIndex, testimonialsLength]);

    // Navigation handlers
    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }, [testimonialsLength]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }, [testimonialsLength]);

    // Get image position for 3D carousel
    const getImagePosition = (index: number) => {
        const isActive = index === activeIndex;
        const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
        const isRight = (activeIndex + 1) % testimonialsLength === index;

        if (isActive) {
            return {
                zIndex: 3,
                opacity: 1,
                transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
            };
        }
        if (isLeft) {
            return {
                zIndex: 2,
                opacity: 0.7,
                transform: "translateX(-30%) translateY(-15%) scale(0.8) rotateY(12deg)",
            };
        }
        if (isRight) {
            return {
                zIndex: 2,
                opacity: 0.7,
                transform: "translateX(30%) translateY(-15%) scale(0.8) rotateY(-12deg)",
            };
        }
        return {
            zIndex: 1,
            opacity: 0,
            transform: "translateX(0) translateY(0) scale(0.6) rotateY(0deg)",
        };
    };

    // Text animation variants
    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="project-carousel">
            <div className="carousel-layout">
                {/* 3D Image Carousel */}
                <div className="carousel-images">
                    {testimonials.map((testimonial, index) => {
                        const position = getImagePosition(index);
                        return (
                            <img
                                key={testimonial.src}
                                src={testimonial.src}
                                alt={testimonial.name}
                                className="carousel-image"
                                style={{
                                    zIndex: position.zIndex,
                                    opacity: position.opacity,
                                    transform: position.transform,
                                }}
                            />
                        );
                    })}
                </div>

                {/* Content Section */}
                <div className="content-section">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="content-inner"
                        >
                            <h3 className="project-name" style={{ color: colorName, fontSize: fontSizeName }}>
                                {activeTestimonial.name}
                            </h3>
                            <p className="project-tech" style={{ color: colorDesignation, fontSize: fontSizeDesignation }}>
                                {activeTestimonial.designation}
                            </p>
                            <p className="project-description" style={{ color: colorTestimony, fontSize: fontSizeQuote }}>
                                {activeTestimonial.quote.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ filter: "blur(8px)", opacity: 0 }}
                                        animate={{ filter: "blur(0px)", opacity: 1 }}
                                        transition={{ duration: 0.2, delay: 0.02 * i }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </p>

                            {(activeTestimonial.github || activeTestimonial.demo) && (
                                <div className="project-links">
                                    {activeTestimonial.github && (
                                        <a
                                            href={activeTestimonial.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link github-link"
                                        >
                                            <FaGithub size={18} />
                                            <span>View Code</span>
                                        </a>
                                    )}
                                    {activeTestimonial.demo && (
                                        <a
                                            href={activeTestimonial.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link demo-link"
                                        >
                                            <FaExternalLinkAlt size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="nav-buttons">
                        <button
                            className="nav-btn"
                            onClick={handlePrev}
                            style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
                            onMouseEnter={() => setHoverPrev(true)}
                            onMouseLeave={() => setHoverPrev(false)}
                            aria-label="Previous project"
                        >
                            <FaArrowLeft size={20} color={colorArrowFg} />
                        </button>
                        <button
                            className="nav-btn"
                            onClick={handleNext}
                            style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
                            onMouseEnter={() => setHoverNext(true)}
                            onMouseLeave={() => setHoverNext(false)}
                            aria-label="Next project"
                        >
                            <FaArrowRight size={20} color={colorArrowFg} />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .project-carousel {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1.5rem 2rem;
                    box-sizing: border-box;
                    overflow: hidden;
                }
                .carousel-layout {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 3rem;
                    width: 100%;
                    height: 100%;
                }
                .carousel-images {
                    flex: 0 0 45%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    perspective: 1000px;
                    min-height: 250px;
                }
                .carousel-image {
                    position: absolute;
                    width: 70%;
                    height: 85%;
                    object-fit: cover;
                    border-radius: 16px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style: preserve-3d;
                }
                .content-section {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    min-width: 0;
                }
                .content-inner {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .project-name {
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    font-family: var(--font-outfit), system-ui, sans-serif;
                }
                .project-tech {
                    margin: 0 0 1.25rem 0;
                    font-family: var(--font-outfit), system-ui, sans-serif;
                    font-weight: 500;
                }
                .project-description {
                    line-height: 1.7;
                    font-family: var(--font-outfit), system-ui, sans-serif;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .nav-buttons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                .nav-btn {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .nav-btn:hover {
                    transform: scale(1.1);
                }
                
                .project-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.25rem;
                }
                .project-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.6rem 1.2rem;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-family: var(--font-outfit), system-ui, sans-serif;
                }
                .github-link {
                    background: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .github-link:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.4);
                    transform: translateY(-2px);
                }
                .demo-link {
                    background: rgba(59, 130, 246, 0.2);
                    color: #60a5fa;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                }
                .demo-link:hover {
                    background: rgba(59, 130, 246, 0.3);
                    border-color: rgba(59, 130, 246, 0.5);
                    transform: translateY(-2px);
                }

                @media (max-width: 900px) {
                    .carousel-layout {
                        flex-direction: column;
                        gap: 2rem;
                    }
                    .carousel-images {
                        flex: 0 0 auto;
                        width: 100%;
                        min-height: 200px;
                    }
                    .carousel-image {
                        width: 60%;
                        height: 80%;
                    }
                }
            `}</style>
        </div>
    );
};

export default CircularTestimonials;
