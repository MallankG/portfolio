"use client";

import React, { ReactNode } from "react";

interface BentoItemProps {
    title?: string;
    description?: string;
    icon?: ReactNode;
    className?: string;
    colSpan?: 1 | 2;
    rowSpan?: 1 | 2;
    children?: ReactNode;
}

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div className={`bento-grid ${className}`}>
            {children}
        </div>
    );
}

export function BentoItem({
    title,
    description,
    icon,
    className = "",
    colSpan = 1,
    rowSpan = 1,
    children,
}: BentoItemProps) {
    const colSpanClass = colSpan === 2 ? "bento-col-span-2" : "";
    const rowSpanClass = rowSpan === 2 ? "bento-row-span-2" : "";

    return (
        <div className={`bento-item ${colSpanClass} ${rowSpanClass} ${className}`}>
            <div className="bento-item-glow" />
            <div className="bento-item-content">
                {icon && <div className="bento-icon">{icon}</div>}
                {title && <h3 className="bento-title">{title}</h3>}
                {description && <p className="bento-description">{description}</p>}
                {children}
            </div>
        </div>
    );
}

export default BentoGrid;
