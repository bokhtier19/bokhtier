// src/components/ProjectCard.tsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {FaGithub, FaExternalLinkAlt, FaFile} from "react-icons/fa";
import {GrStatusWarning} from "react-icons/gr";

interface ProjectCardProps {
    title: string;
    shortDescription: string;
    tech: string[];
    image1: string;
    image2?: string;
    github?: string;
    status?: string;
    demo?: string;
    index?: number;
    slug?: string;
}

export default function ProjectCard({title, shortDescription, slug, tech, image1, image2 = image1, github, demo, index = 0, status}: ProjectCardProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className={`relative  border border-primary w-full   justify-center rounded-sm hover:cursor-pointer  flex flex-col overflow-hidden  hover:outline-4 hover:outline-primary  transition p-4 gap-6 ${
                isEven ? "" : "md:flex-row-reverse"
            }`}>
            <div className="w-full">
                <Link href={"/projects/" + slug} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Image */}

                        <div className="relative group flex-1 justify-center flex items-center gap-4">
                            <div className="absolute overflow-hidden rounded-xl flex justify-center items-center transition-all duration-500 group-hover:z-20">
                                <img src={image1} width={500} alt={title} className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="relative overflow-hidden rounded-xl z-30 group-hover:z-10 transition-all duration-500">
                                <img src={image2} width={500} alt={title} className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-1 flex-col justify-center gap-2">
                            <h3 className="text-xl font-semibold font-space text-primary">{title}</h3>

                            <div className="bg-secondary text-white text-sm p-4 my-4 rounded-sm z-20 w-full">
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
                        </div>
                    </div>
                </Link>

                {/* Links */}
                <div className="flex gap-4 pt-2 px-4 justify-end">
                    {github && (
                        <Link href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-primary transition">
                            <FaGithub size={16} /> Code
                        </Link>
                    )}
                    {demo && (
                        <Link href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-primary transition">
                            <FaExternalLinkAlt size={16} /> Live Demo
                        </Link>
                    )}
                    {slug && (
                        <Link href={"/projects/" + slug} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-primary transition">
                            <FaFile size={16} /> Details
                        </Link>
                    )}
                    {status && (
                        <span className="flex items-center gap-1 text-sm">
                            <GrStatusWarning size={16} className="text-yellow-500" />
                            {status}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
