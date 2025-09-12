"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex justify-center items-center px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-start text-start gap-4 items-start p-2 md:p-12 max-w-4/5"
            >
                {/* Greeting */}
                <p className="text-primary">Hi, I’m</p>

                {/* Main Heading (LCP target) */}
                <p className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-sm font-inter">
                    Elius Bokhtier.
                </p>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-4xl font-bold leading-tight font-inter text-text-muted">
                    An Enthusiastic Full-Stack Developer.
                </h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-4 text-sm md:text-base  max-w-xl leading-relaxed text-text-muted"
                >
                    I’m a frontend engineer with a strong interest in full-stack development, focused on building
                    reliable, scalable, and user-centric applications. Currently, I am looking for exciting
                    opportunities where I can learn, grow, and build cool things.
                </motion.p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Resume"
                        className="px-6 py-3 rounded-xl font-semibold shadow-md text-primary border border-primary items-center justify-center hover:opacity-90 transition flex gap-2"
                    >
                        Resume
                        <IoMdDownload size={20} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
