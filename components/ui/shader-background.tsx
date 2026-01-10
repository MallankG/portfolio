"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useMemo } from "react"

interface ShaderBackgroundProps {
    colors?: string[]
    speed?: number
}

export default function ShaderBackground({
    colors = ["#000000", "#1a1a1a", "#333333", "#ffffff"],
    speed = 1.0
}: ShaderBackgroundProps) {
    // Memoize the key to prevent unnecessary re-renders
    // We want the shader to persist, only colors change
    const gradientKey = useMemo(() => "persistent-shader", [])

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
            <MeshGradient
                key={gradientKey}
                className="w-full h-full absolute inset-0"
                colors={colors}
                speed={speed}
            />
            {/* Subtle lighting overlay effects with color-based tinting */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000">
                <div
                    className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full blur-3xl animate-pulse opacity-20 transition-colors duration-1000"
                    style={{
                        backgroundColor: colors[1],
                        animationDuration: `${3 / speed}s`
                    }}
                />
                <div
                    className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full blur-2xl animate-pulse opacity-10 transition-colors duration-1000"
                    style={{
                        backgroundColor: colors[2],
                        animationDuration: `${2 / speed}s`,
                        animationDelay: "1s"
                    }}
                />
                <div
                    className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full blur-xl animate-pulse opacity-15 transition-colors duration-1000"
                    style={{
                        backgroundColor: colors[3],
                        animationDuration: `${4 / speed}s`,
                        animationDelay: "0.5s"
                    }}
                />
            </div>
        </div>
    )
}
