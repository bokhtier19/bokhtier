"use client";

import React from "react";
import {motion} from "framer-motion";
import {IoMdDownload} from "react-icons/io";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex justify-center items-center px-6 md:px-12">
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="flex flex-col  justify-start text-start gap-4 items-start p-2 md:p-12 w-[90%] md:max-w-[80%]">
                {/* Greeting */}
                <p className="text-primary text-lg">Hi, I’m</p>

                {/* Main Heading */}
                <p className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-sm flex-nowrap font-inter">Elius Bokhtier.</p>

                {/* Tagline with tech stack */}
                <h2 className="text-2xl md:text-4xl font-bold leading-tight font-inter text-text-muted">
                    I build fast, scalable apps with <span className="text-primary">React</span>, <span className="text-primary">Next.js</span> & <span className="text-primary">Node.js</span>.
                </h2>

                {/* Short description */}
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} className="mt-4 text-sm md:text-base max-w-xl leading-relaxed text-gray-600">
                    I am a Full-Stack Engineer with 2 years of experience building modern web applications. I focus on performance, clean design, and scalable architecture.
                </motion.p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <button className="px-6 py-3 rounded-xl hover:text-primary text-white hover:cursor-pointer font-semibold shadow-md bg-primary hover:bg-white border-primary border">
                        <Link href="#projects">View Projects</Link>
                    </button>
                    <button className="px-6 py-3 rounded-xl font-semibold shadow-md text-primary border border-primary hover:bg-primary hover:text-white transition flex items-center gap-2 hover:cursor-pointer">
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume" className="flex gap-2">
                            Resume
                            <IoMdDownload size={20} />
                        </Link>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
