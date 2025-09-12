// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaFile } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    tech: string[];
    image1: string;
    github?: string;
    demo?: string;
    slug?: string;
    shortDescription?: string;
}

export default function ProjectCard({ title, tech, image1, github, demo, shortDescription, slug }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary  border-secondary border-2 rounded-lg shadow-md overflow-hidden hover:shadow-green/40 transition flex flex-col max-w-sm"
        >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden">
                <Image
                    src={image1}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between gap-2">
                <h3 className="text-lg font-semibold font-space text-primary">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{shortDescription}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tech.map((item, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-sm text-primary bg-navy font-medium">
                            {item}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-3 items-end justify-end">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-white hover:text-primary transition"
                        >
                            <FaGithub size={16} /> Code
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-white hover:text-green transition"
                        >
                            <FaExternalLinkAlt size={16} /> Demo
                        </a>
                    )}
                    {slug && (
                        <a
                            href={"./projects/" + slug}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-white hover:text-green transition"
                        >
                            <FaFile size={16} /> Explore
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
