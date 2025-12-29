"use client";

import Experience from "@/components/Experience";
import {motion} from "framer-motion";
import Image from "next/image";
import {FaReact, FaNodeJs, FaGithub} from "react-icons/fa";
import {GiGraduateCap} from "react-icons/gi";
import {SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiJavascript} from "react-icons/si";
import SectionHeading from "./../../components/SectionHeading";
import SubSectionHeading from "@/components/SubSectionHeading";

export default function AboutPage() {
    return (
        <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 gap-16">
            <div className=" lg:max-w-5xl mx-auto max-w-[80%] flex flex-col gap-4 items-center">
                <Experience />

                {/* Tech Stack & Tools Section */}
                <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.3}} viewport={{once: true}} className="mt-16 w-full">
                    <SubSectionHeading title="Tech Stack & Tools" />
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
                        {[
                            {icon: <SiHtml5 />, name: "HTML"},
                            {icon: <SiCss3 />, name: "CSS"},
                            {icon: <SiJavascript />, name: "JavaScript"},
                            {icon: <FaReact />, name: "React"},
                            {icon: <SiNextdotjs />, name: "Next.js"},
                            {icon: <FaNodeJs />, name: "Node.js"},
                            {icon: <SiMongodb />, name: "MongoDB"},
                            {icon: <SiTailwindcss />, name: "Tailwind CSS"},
                            {icon: <SiTypescript />, name: "TypeScript"},
                            {icon: <FaGithub />, name: "GitHub"}
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.95}}
                                className="text-4xl text-primary hover:text-green transition-colors duration-300 cursor-pointer"
                                title={tech.name}>
                                {tech.icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.2}} viewport={{once: true}} className="mt-12 mb-12 space-y-4 w-full ">
                    <SubSectionHeading title="Education" />
                    <ul className="list-inside space-y-4  text-text-muted ml-10">
                        <li className="flex gap-4 items-center">
                            <GiGraduateCap size={16} className="text-primary" />
                            <span className="font-semibold">Bachelor of Technology (ECE)</span> – Aligarh Muslim University, 2022
                        </li>
                        <li className="flex gap-4 items-center">
                            <GiGraduateCap size={16} className="text-primary" />
                            <span className="font-semibold">Higher Secondary (+12) </span> – AMU, 2018
                        </li>
                        <li className="flex gap-4 items-center">
                            <GiGraduateCap size={16} className="text-primary" />
                            <span className="font-semibold">Secondary (+10) </span> – SEBA ASSAM, 2016
                        </li>
                    </ul>
                </motion.div>

                {/* Heading */}

                <SectionHeading index="03" title="About Me" />

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-md">
                    {/* Left Column - Text */}
                    <motion.div initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="space-y-6">
                        <p className="leading-relaxed ">
                            Hello! I’m <span className="text-green font-semibold">Elius Bokhtier</span>, a Web Developer passionate about crafting clean, modern, and interactive web experiences. I
                            enjoy solving problems, turning ideas into reality, and learning new technologies along the way.
                        </p>

                        <p className="leading-relaxed ">
                            Outside of coding, I love experimenting with design, traveling, playing video games, riding, and tinkering with electronics. My goal is to keep building products that
                            people genuinely love to use.
                        </p>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="relative group flex justify-center">
                        <div className="w-60 h-80 rounded-sm overflow-hidden shadow-lg border-2 border-green transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary">
                            <img src="/profile.png" alt="Elius Bokhtier" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -inset-2 border-2 border-primary opacity-20 rounded-sm group-hover:opacity-40 transition"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
