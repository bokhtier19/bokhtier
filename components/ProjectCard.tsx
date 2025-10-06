// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaFile } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    shortDescription: string;
    tech: string[];
    image1: string;
    image2?: string;
    github?: string;
    demo?: string;
    index?: number;
    slug?: string;
}

export default function ProjectCard({ title, shortDescription, slug, tech, image1, image2 = image1, github, demo, index = 0 }: ProjectCardProps) {
    const isEven = index % 2 === 0;

    return (
        <Link href={"/projects/" + slug} target="_blank" rel="noopener noreferrer">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative border lg:border-none rounded-sm hover:cursor-pointer hover:border flex flex-col lg:flex-row overflow-hidden hover:shadow-primary transition p-4 gap-6 ${
                    isEven ? "" : "md:flex-row-reverse"
                }`}>
                {/* Image */}

                <div className="relative group flex-1">
                    <div className="absolute overflow-hidden rounded-xl transition-all duration-500 group-hover:z-20">
                        <img src={image1} width={500} alt={title} className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    <div className="relative overflow-hidden rounded-xl z-30 group-hover:z-10 transition-all duration-500">
                        <img src={image2} width={500} alt={title} className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-1 flex-col justify-center gap-4">
                    <h3 className="text-xl font-semibold font-space text-primary">{title}</h3>

                    <div className="bg-secondary text-white text-sm p-4 my-4 rounded-sm z-50 w-full">
                        <p className="text-sm leading-relaxed">{shortDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded-sm text-primary bg-secondary font-medium">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-primary transition">
                                <FaGithub size={16} /> Code
                            </a>
                        )}
                        {demo && (
                            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-primary transition">
                                <FaExternalLinkAlt size={16} /> Live Demo
                            </a>
                        )}
                        {slug && (
                            <a href={"/projects/" + slug} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-primary transition">
                                <FaFile size={16} /> Details
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
