"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
    {
        company: "Freelance",
        role: "Full-Stack Developer",
        duration: "Feb 2025 – Present",
        points: [
            "Designing and delivering end-to-end web solutions for small businesses and individuals.",
            "Built admin dashboards, product systems, and real-time features using Socket.IO.",
            "Collaborated directly with clients to define scope, architecture, and technical solutions.",
            "Deployed applications using Vercel and Render with focus on scalability and reliability."
        ]
    },
    {
        company: "Arronic Technologies",
        role: "Frontend Engineer / Full-Stack Developer",
        duration: "Jun 2023 – Dec 2024",
        points: [
            "Built scalable, production-ready web applications using React, Next.js, and TypeScript.",
            "Worked closely with designers and backend engineers to translate business requirements into reliable UI.",
            "Implemented reusable components, authentication flows, and REST API integrations.",
            "Focused on performance optimization, clean architecture, and maintainable codebases."
        ]
    }
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = experiences[activeIndex];

    return (
        <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="w-full">
            {/* Section Heading */}
            <SectionHeading index="02" title="Experience" />

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Tabs */}
                <div className="flex md:flex-col border-l border-primary/30">
                    {experiences.map((exp, index) => (
                        <button
                            key={exp.company}
                            onClick={() => setActiveIndex(index)}
                            className={`px-6 py-3 text-left text-sm font-mono transition-all hover:cursor-pointer
                ${activeIndex === index ? "bg-primary/10 text-green border-l-2 border-green" : "text-text-muted hover:bg-primary/5 hover:text-green"}`}>
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Right Content */}
                <motion.div key={activeIndex} initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.4}} className="flex-1 space-y-4">
                    <h4 className="text-xl font-semibold">
                        {active.role} <span className="text-green">@ {active.company}</span>
                    </h4>

                    <p className="text-sm font-mono text-text-muted">{active.duration}</p>

                    <ul className="space-y-3 mt-4 text-sm text-text-muted">
                        {active.points.map((point, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="text-green mt-1">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}
