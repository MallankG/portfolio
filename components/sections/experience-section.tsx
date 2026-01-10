"use client";

import { Timeline } from "../ui/timeline";
import { Briefcase, GraduationCap, Rocket, Code } from "lucide-react";

const experienceData = [
    {
        title: "2022",
        content: (
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                        <Rocket className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                            Senior Developer
                        </h4>
                        <p className="text-amber-400 text-sm font-medium">
                            Tech Corp • Full-time
                        </p>
                    </div>
                </div>

                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Leading frontend development team and making key architecture decisions.
                    Spearheading the adoption of modern technologies and best practices
                    across the organization.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Key Responsibilities</p>
                    <ul className="space-y-2">
                        {[
                            "Leading a team of 5 frontend developers",
                            "Architecting scalable React applications",
                            "Code reviews and mentoring junior devs",
                            "Driving technical decisions and roadmap"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                <span className="text-amber-400 mt-0.5">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "Next.js", "TypeScript", "GraphQL", "Team Lead"].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/10 hover:border-amber-400/50 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "2020",
        content: (
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                        <Code className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                            Full Stack Developer
                        </h4>
                        <p className="text-blue-400 text-sm font-medium">
                            StartUp Inc • Full-time
                        </p>
                    </div>
                </div>

                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Built scalable web applications and RESTful APIs. Collaborated with
                    cross-functional teams to deliver high-quality products on tight deadlines.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <p className="text-emerald-400 text-2xl font-bold">40%</p>
                        <p className="text-white/60 text-xs">Faster page loads</p>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <p className="text-purple-400 text-2xl font-bold">3</p>
                        <p className="text-white/60 text-xs">Developers mentored</p>
                    </div>
                </div>

                <div className="space-y-2">
                    {[
                        "Implemented CI/CD pipeline with GitHub Actions",
                        "Migrated legacy codebase to TypeScript",
                        "Built real-time features with WebSockets"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                            <span className="text-emerald-400">✓</span>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {["Node.js", "PostgreSQL", "AWS", "Docker", "Redis"].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/10 hover:border-blue-400/50 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "2018",
        content: (
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-500/20 border border-pink-500/30">
                        <Briefcase className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                            Junior Developer
                        </h4>
                        <p className="text-pink-400 text-sm font-medium">
                            Agency XYZ • Full-time
                        </p>
                    </div>
                </div>

                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Developed responsive websites for various clients across different industries.
                    Gained hands-on experience with modern web technologies and agile methodologies.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Notable Projects</p>
                    <div className="space-y-3">
                        {[
                            { name: "E-commerce Platform", tech: "React, Stripe" },
                            { name: "Real Estate Portal", tech: "Next.js, Maps API" },
                            { name: "SaaS Dashboard", tech: "Vue.js, D3.js" }
                        ].map((project, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="text-white/80 text-sm">{project.name}</span>
                                <span className="text-white/40 text-xs">{project.tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {["JavaScript", "React", "CSS/SASS", "Figma", "WordPress"].map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/10 hover:border-pink-400/50 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "2014",
        content: (
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                            Computer Science
                        </h4>
                        <p className="text-cyan-400 text-sm font-medium">
                            University of Technology • B.S. Degree
                        </p>
                    </div>
                </div>

                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Graduated with honors. Focused on software engineering, algorithms,
                    and web development. Active member of the coding club.
                </p>

                <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-cyan-400 text-xl font-bold">3.8</p>
                        <p className="text-white/50 text-xs">GPA</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-cyan-400 text-xl font-bold">5+</p>
                        <p className="text-white/50 text-xs">Hackathons</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-cyan-400 text-xl font-bold">2</p>
                        <p className="text-white/50 text-xs">Research Papers</p>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <p className="text-white/80 text-sm italic">
                        "Dean's List for Academic Excellence — 2017, 2018"
                    </p>
                </div>
            </div>
        ),
    },
];

export default function ExperienceSection() {
    return (
        <div className="section-container !block !min-h-0">
            <Timeline
                data={experienceData}
                title="Experience"
                description="A journey through my professional career, from eager student to senior developer."
            />
        </div>
    );
}
