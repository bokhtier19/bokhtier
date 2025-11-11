"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import EBLogo from "../../public/EBlogo";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../../hooks/useActiveSection";

const navItems = ["Home", "About", "Projects", "Contact"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
};

const itemVariants: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, bounce: 0.3, duration: 0.9 },
    },
};

export default function ScrollNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = navItems.map((item) => item.toLowerCase());
    const active = useActiveSection(sectionIds);

    return (
        <>
            {/* Desktop Sidebar Nav */}
            <motion.div
                className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                viewport={{ once: true }}>
                {/* Logo */}
                <div className="border border-primary p-2 pl-4 rounded-full mb-8">
                    <Link href={"/"} className="flex items-center text-primary">
                        <EBLogo />
                    </Link>
                </div>

                {/* Nav links */}
                <div className="relative flex flex-col items-center gap-6">
                    {navItems.map((item, i) => {
                        const id = item.toLowerCase();
                        const isActive = active === id;
                        return (
                            <motion.div key={i} variants={itemVariants} className="relative">
                                {isActive && <motion.div layoutId="highlight" className="absolute inset-0 rounded-r-sm bg-primary" transition={{ type: "spring", stiffness: 400, damping: 25 }} />}
                                <Link
                                    aria-label={`Navigate to ${item}`}
                                    href={`#${id}`}
                                    className={`relative z-10 text-sm px-2 py-1 font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 ${
                                        isActive ? "text-white" : "text-text-muted hover:text-primary"
                                    }`}>
                                    {item}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <ThemeToggle />

                {/* Bottom bar */}
                <motion.div initial={{ height: 0 }} animate={{ height: 80 }} transition={{ duration: 0.6, delay: 0.5 }} className="w-px bg-text-muted hover:bg-primary transition-colors" />
            </motion.div>

            {/* Mobile Nav Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md bg-primary text-white shadow-md">
                    <FaBars size={20} />
                </button>
            </div>

            {/* Mobile Slide Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0  z-40"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-xs  bg-text shadow-lg z-50 p-6 flex flex-col gap-6">
                            {/* Close Button */}
                            <button aria-label="Toggle Mobile Menu" onClick={() => setMenuOpen(false)} className="self-end text-primary">
                                <FaTimes size={22} />
                            </button>

                            {/* Logo */}
                            <div className="mb-6">
                                <Link href="/" onClick={() => setMenuOpen(false)}>
                                    <EBLogo />
                                </Link>
                            </div>

                            {/* Nav Links */}
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, i) => (
                                    <Link
                                        key={i}
                                        aria-label={`Navigate to ${item}`}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-lg font-semibold text-text-muted hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                ))}
                                <div className="mt-auto text-white">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
