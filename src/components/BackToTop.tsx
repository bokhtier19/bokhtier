"use client";

import { useEffect, useState } from "react";
import { BsFillRocketFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="backToTop"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50, x: 10 }}
                    aria-label="Back to Top"
                    transition={{ duration: 0.2 }}
                    className="p-3 rounded-full bg-secondary text-primary hover:text-white shadow-lg hover:bg-secondary/60  hover:cursor-pointer transition-colors"
                >
                    <BsFillRocketFill size={20} rotate={-45} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
