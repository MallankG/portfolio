"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  description?: string;
}

// Individual timeline item with entrance animation
const TimelineItem = ({
  item,
  index
}: {
  item: TimelineEntry;
  index: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="flex justify-start pt-16 md:pt-32 md:gap-10"
    >
      {/* Left side - Sticky year/title */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Timeline dot with glow */}
        <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <motion.div
            className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(251,191,36,0.4)",
                "0 0 0 8px rgba(251,191,36,0)",
                "0 0 0 0 rgba(251,191,36,0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        {/* Year/Title - Desktop */}
        <h3 className="hidden md:block text-xl md:pl-24 md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
          {item.title}
        </h3>
      </div>

      {/* Right side - Content card */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Year/Title - Mobile */}
        <h3 className="md:hidden block text-3xl mb-6 text-left font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          {item.title}
        </h3>

        {/* Content wrapper with increased glassmorphism blur */}
        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ duration: 0.2 }}
          className="relative p-6 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-3xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            {item.content}
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
            <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-amber-400/50 to-transparent" />
            <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-amber-400/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Timeline = ({
  data,
  title = "My Journey",
  description = "A timeline of my professional experience and milestones."
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const springHeight = useSpring(0, { stiffness: 100, damping: 30 });

  // Calculate initial height
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  // Manual scroll tracking that works with any scroll container
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const refRect = ref.current.getBoundingClientRect();

      // Calculate how much of the timeline is visible/scrolled
      const viewportHeight = window.innerHeight;
      const timelineTop = refRect.top;
      const timelineHeight = refRect.height;

      // Start animation when timeline enters viewport
      const startTrigger = viewportHeight * 0.3;
      // End when bottom of timeline reaches this point in viewport
      const endTrigger = viewportHeight * 0.7;

      // Calculate progress
      let progress = 0;

      if (timelineTop < startTrigger) {
        // How far past the start trigger we've scrolled
        const scrolledPast = startTrigger - timelineTop;
        // Total distance to scroll (timeline height minus the viewport portion)
        const totalScrollableDistance = timelineHeight - endTrigger + startTrigger;

        progress = scrolledPast / totalScrollableDistance;
        progress = Math.min(1, Math.max(0, progress));
      }

      // Cap the line at ~94% of height to stop at the last dot (not past it)
      const maxLineHeight = height * 0.94;
      const newLineHeight = progress * maxLineHeight;
      setLineHeight(newLineHeight);
      springHeight.set(newLineHeight);
    };

    // Find the scrollable parent
    const findScrollParent = (element: HTMLElement | null): HTMLElement | Window => {
      if (!element) return window;

      const style = getComputedStyle(element);
      if (style.overflow === 'auto' || style.overflow === 'scroll' ||
        style.overflowY === 'auto' || style.overflowY === 'scroll') {
        return element;
      }

      return findScrollParent(element.parentElement);
    };

    const scrollParent = findScrollParent(containerRef.current);

    // Initial calculation
    handleScroll();

    // Listen to scroll events on both window and scroll parent
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (scrollParent !== window) {
      scrollParent.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Also listen to the scroll container's parent
    const sectionParent = containerRef.current?.closest('[style*="overflow"]');
    if (sectionParent) {
      sectionParent.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollParent !== window) {
        scrollParent.removeEventListener('scroll', handleScroll);
      }
      if (sectionParent) {
        sectionParent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [height, springHeight]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
          {description}
        </p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px w-32 bg-gradient-to-r from-amber-400 via-orange-500 to-transparent origin-left"
        />
      </motion.div>

      {/* Timeline items */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}

        {/* Background line track */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-[2.15rem] left-[2.15rem] top-0 w-[3px] bg-gradient-to-b from-white/5 via-white/20 to-white/5 rounded-full"
        />

        {/* Animated progress line */}
        <motion.div
          style={{ height: springHeight }}
          className="absolute md:left-[2.15rem] left-[2.15rem] top-0 w-[3px] bg-gradient-to-b from-amber-400 via-orange-500 to-yellow-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8),0_0_30px_rgba(251,191,36,0.4)]"
        />
      </div>
    </div>
  );
};
