// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { HiHand } from "react-icons/hi";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, link: "https://github.com/bokhtier19" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/elius19" },
    { icon: <FaTwitter />, link: "https://twitter.com/bokhtier19" },
    { icon: <FaInstagram />, link: "https://instagram.com/bokhtier19" },
    { icon: <SiGmail />, link: "mailto:bokhtierelius19@gmail.com" },
];

export default function ContactPage() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24">
            <div className="p-4 max-e-[30%] text-center ">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-inter font-space font-bold text-green mb-8 relative inline-block">
                    Let&apos;s Connect
                    {/* <span className="absolute left-0 bottom-0 w-full h-1 bg-primary opacity-30 rounded-lg"></span> */}
                </motion.h2>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col text-md md:text-xl font-inter gap-4 text-slate-500 mb-12 md:p-8">
                    <p>I’m still learning, improving, and trying to find my way in this exciting world of development. Every bit of guidance or opportunity means the world to me.</p>
                    <p>So if you’re reading this and feel like saying hi or offering a small chance to prove myself, please do — I’d be so grateful.</p>
                </motion.div>

                {/* Socials Links */}

                <motion.div className="flex justify-center  items-center gap-6 text-4xl text-text-muted" initial="hidden" animate="show">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            aria-label={`Link to ${social.link.replace("https://", "").replace("www.", "").split(".")[0]}`}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:scale-110 transition-all hover:-translate-y-0.5">
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="p-8 mb-12 px-4 transition hover:shadow-green/40">
                    <p className="text-slate-500 font-inter mb-4">Drop me an email:</p>
                    <a href="mailto:bokhtierelius19@gmail.com" className="text-md px-2 md:text-3xl font-space text-green underline underline-offset-4 hover:text-primary">
                        bokhtierelius19@gmail.com
                    </a>
                </motion.div>

                {/* CTA Button */}
                <motion.a
                    href="mailto:bokhtierelius19@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-block px-8 py-4 bg-transparent border-2 border-primary text-primary font-space text-lg rounded-lg shadow-md transition hover:bg-primary hover:text-navy hover:shadow-primary/50">
                    Say Hello <HiHand className="inline-block ml-2 text-xl" />
                </motion.a>
            </div>
        </section>
    );
}
