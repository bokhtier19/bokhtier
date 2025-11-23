"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../../hooks/useActiveSection";

const navItems = ["Home", "Projects", "About", "Contact"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.3, duration: 0.7 },
    },
};

export default function ScrollNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const sectionIds = navItems.map((s) => s.toLowerCase());
    const active = useActiveSection(sectionIds);

    // Scroll  Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY + 5) {
                setShow(false);
            } else if (currentY < lastScrollY - 5) {
                setShow(true);
            }

            setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* NAV WRAPPER (animated) */}
            <motion.div animate={{ y: show ? 0 : -100 }} transition={{ duration: 0.3, ease: "easeOut" }} className="sticky top-0 z-50">
                {/* DESKTOP NAV */}
                <motion.div className="hidden md:flex py-4 mx-auto shadow-2xl bg-bg items-center justify-between gap-6" initial="hidden" animate="visible" variants={containerVariants}>
                    {/* Logo */}
                    <div className="flex items-center ml-20">
                        <Link href="/" className="text-primary">
                            <img src="/logo.png" alt="Logo" width={40} />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <div className="relative flex items-center gap-6">
                            {navItems.map((item, i) => {
                                const id = item.toLowerCase();
                                const isActive = active === id;

                                return (
                                    <motion.div key={i} variants={itemVariants} className="relative">
                                        {isActive && <motion.div layoutId="highlight" className="absolute inset-0 rounded-sm" transition={{ type: "spring", stiffness: 400, damping: 25 }} />}

                                        <Link
                                            href={`#${id}`}
                                            className={`relative z-10 text-sm px-2 py-1 font-bold tracking-wider transition-colors
                        ${isActive ? "text-primary underline underline-offset-2" : "text-text-muted hover:text-white"}
                      `}>
                                            {item}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <ThemeToggle />

                        {/* Bottom bar */}
                        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="h-px w-24 bg-text-secondary" />
                    </div>
                </motion.div>
            </motion.div>

            {/* MOBILE NAV BUTTON */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md bg-primary text-white shadow-md">
                    <FaBars size={20} />
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Sliding Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-secondary shadow-lg z-50 p-6 flex flex-col gap-6">
                            <button className="self-end text-primary" onClick={() => setMenuOpen(false)}>
                                <FaTimes size={22} />
                            </button>

                            <Link href="/" onClick={() => setMenuOpen(false)}>
                                <img src="/logo.png" alt="" width={40} />
                            </Link>

                            <div className="flex flex-col gap-4">
                                {navItems.map((item, i) => (
                                    <Link key={i} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-text-muted hover:text-primary transition">
                                        {item}
                                    </Link>
                                ))}

                                <div className="mt-auto">
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
