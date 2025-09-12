// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { HiHand } from "react-icons/hi";

export default function ContactPage() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24">
            <div className="p-4 max-e-[30%] text-center ">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-inter font-space font-bold text-green mb-8 relative inline-block"
                >
                    Let&apos;s Connect
                    {/* <span className="absolute left-0 bottom-0 w-full h-1 bg-primary opacity-30 rounded-lg"></span> */}
                </motion.h2>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-md md:text-xl font-inter text-slate-500 mb-12 p-8"
                >
                    Open to opportunities and conversations — don&apos;t hesitate to reach out, I&apos;m just a message
                    away.
                </motion.p>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className=" p-8 mb-12 transition hover:shadow-green/40"
                >
                    <p className="text-slate-500 font-inter mb-4">Drop me an email:</p>
                    <a
                        href="mailto:bokhtierelius19@gmail.com"
                        className="text-2xl md:text-3xl font-space text-green underline underline-offset-4 hover:text-primary"
                    >
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
                    className="inline-block px-8 py-4 bg-transparent border-2 border-primary text-primary font-space text-lg rounded-lg shadow-md transition hover:bg-primary hover:text-navy hover:shadow-primary/50"
                >
                    Say Hello <HiHand className="inline-block ml-2 text-xl" />
                </motion.a>
            </div>
        </section>
    );
}
