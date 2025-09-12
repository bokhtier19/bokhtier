// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-space font-bold text-green mb-12 relative inline-block"
                >
                    About Me
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-green opacity-30 rounded-lg"></span>
                </motion.h2>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center text-sm">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="leading-relaxed font-inter">
                            Hello! I’m <span className="text-green font-semibold">Elius Bokhtier</span>, a frontend
                            engineer passionate about crafting clean, modern, and interactive web experiences. I enjoy
                            solving problems, turning ideas into reality, and learning new technologies along the way.
                        </p>
                        <p className="leading-relaxed font-inter text-slate-500">
                            My journey started with building fun projects like{" "}
                            <span className="text-green">RhinoPad</span>, <span className="text-green">RhinoChat</span>,
                            and <span className="text-green">RhinoMovies</span>. Over time, I’ve explored Next.js,
                            React, Node.js, MongoDB, and real-time systems.
                        </p>
                        <p className="leading-relaxed font-inter">
                            Outside of coding, I love experimenting with design, and I even built a quirky site about{" "}
                            <span className="text-green">Street Fighter Dogs 🐶</span>. My goal is to keep building
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
                        <div className="w-72 h-72 rounded-xl overflow-hidden shadow-lg border-2 border-green transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-green">
                            <Image src="/profile.jpg" alt="Elius Bokhtier" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -inset-2 border-2 border-green opacity-20 rounded-xl group-hover:opacity-40 transition"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
