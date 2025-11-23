"use client";

import React from "react";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center">
            <div className=" md:w-[70%]  text-text-muted py-6 px-6 md:px-12 rounded-t-2xl shadow-inner flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <motion.p whileHover={{ scale: 1.05 }} className="text-xs md:text-sm font-inter">
                    &copy; {new Date().getFullYear()} <span className="">Bokhtier</span>
                </motion.p>

                {/* Made with Next.js */}
                <motion.p whileHover={{ scale: 1.05, color: "#22c55e" }} className="text-xs whitespace-nowrap md:text-sm flex items-center gap-2 font-inter">
                    Made with <span className="text-primary font-bold">Next.js</span>
                    <span className="text-red-500 animate-pulse">❤️</span>&<span>Animated with </span>
                    <span className="text-primary font-bold">Framer-Motion</span>
                </motion.p>
                <BackToTop />
            </div>
        </motion.footer>
    );
};

export default Footer;
