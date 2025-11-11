"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects, secondaryprojects } from "../../../../lib/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {
    const params = useParams();
    const { slug } = params;

    // Find project in either array
    const project = projects.find((p) => p.slug === slug) || secondaryprojects.find((p) => p.slug === slug);

    if (!project) return <p className="text-center py-12 text-text-muted">Project not found</p>;

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto py-16 px-6 flex flex-col gap-12">
            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 relative inline-block">
                {project.title}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-text-muted opacity-20 rounded-lg"></span>
            </h1>

            {/* Project Slug and Demo Link */}
            <div className="flex justify-between">
                <p className="text-sm text-text-muted mb-4">
                    project: <span className="font-mono">{project.slug}</span>
                </p>
                {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-text-muted transition-colors duration-200 flex items-center gap-2">
                        <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i> Live Demo
                    </Link>
                )}
            </div>

            {/* Project Image */}
            {project.image1 && (
                <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                    <Image src={project.image1} alt={project.title} className="w-full h-auto object-cover" />
                </div>
            )}

            {/* Overview Section */}
            <div className="p-6 rounded-xl shadow-lg flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="text-sm md:text-base">{project.description || project.shortDescription}</p>
            </div>

            {/* Tech Stack Section */}
            {project.tech && project.tech.length > 0 && (
                <div className="p-6 rounded-xl shadow-lg flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded bg-primary font-inter">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {project.futureFeatures && project.futureFeatures.length > 0 && (
                <div className="p-6 rounded-xl shadow-lg flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold">Upcoming Features</h2>
                    <div className="flex flex-col gap-2">
                        {project.futureFeatures.map((feature, i) => (
                            <span key={i} className="text-sm px-2 flex flex-col py-1 rounded  font-inter">
                                - {feature}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Links Section */}
            <div className="p-6 rounded-xl shadow-lg flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Links</h2>
                <div className="flex gap-4 mt-2 justify-between">
                    <div className="flex gap-4">
                        {project.github && (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-green-light transition-colors duration-200 flex items-center gap-2">
                                <i className="fa-brands fa-github text-xl"></i> GitHub
                            </Link>
                        )}
                        {project.demo && (
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-text-muted transition-colors duration-200 flex items-center gap-2">
                                <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i> Live Demo
                            </Link>
                        )}
                    </div>
                    <div>
                        <Link href="/#projects" rel="noopener noreferrer" className="hover:text-text-muted transition-colors duration-200 flex items-center gap-2 text-end">
                            <i className="fa-solid fa-arrow-left text-xl"></i> Back to Projects
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectPage;
