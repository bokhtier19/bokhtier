// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-16">
            <div className=" lg:max-w-5xl mx-auto w-full items-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-space font-bold text-center mb-12"
                >
                    About Me
                </motion.h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-md">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="leading-relaxed ">
                            Hello! I’m <span className="text-green font-semibold">Elius Bokhtier</span>, a frontend
                            engineer passionate about crafting clean, modern, and interactive web experiences. I enjoy
                            solving problems, turning ideas into reality, and learning new technologies along the way.
                        </p>
                        <p className="leading-relaxed  text-slate-500">
                            My journey started with building fun projects like{" "}
                            <span className="text-green">RhinoPad</span>, <span className="text-green">RhinoChat</span>,
                            and <span className="text-green">RhinoMovies</span>. Over time, I’ve explored Next.js,
                            React, Node.js, MongoDB, and real-time systems.
                        </p>
                        <p className="leading-relaxed ">
                            Outside of coding, I love experimenting with design, and I even built a quirky site about{" "}
                            <span className="text-primary">Street Fighter Dogs 🐶</span>. My goal is to keep building
                            products that people actually love to use.
                        </p>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group flex justify-center"
                    >
                        <div className="w-60 h-80 rounded-sm overflow-hidden shadow-lg border-2 border-green transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary">
                            <Image src="/profile.jpg" alt="Elius Bokhtier" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -inset-2 border-2 border-primary opacity-20 rounded-sm group-hover:opacity-40 transition"></div>
                    </motion.div>
                </div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-12 space-y-4"
                >
                    <h3 className="text-3xl font-bold text-green mb-4">Education</h3>
                    <ul className="list-disc list-inside space-y-2 text-text-muted">
                        <li>
                            <span className="font-semibold">
                                Bachelor of Technology in Electronics and Communication
                            </span>{" "}
                            – Aligarh Muslim University, 2022
                        </li>
                        <li>
                            <span className="font-semibold">Higher Secondary (+12) </span> – AMU, 2018
                        </li>
                        <li>
                            <span className="font-semibold">Secondary (+10) </span> – SEBA ASSAM, 2016
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
