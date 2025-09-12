"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, link: "https://github.com/bokhtier19" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/elius19" },
    { icon: <FaTwitter />, link: "https://twitter.com/bokhtier19" },
    { icon: <FaInstagram />, link: "https://instagram.com/bokhtier19" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
};

export default function Socials() {
    return (
        <motion.div
            className="md:fixed bottom-10 right-8 flex flex-col items-center gap-6 text-2xl text-text-muted"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {socials.map((social, i) => (
                <motion.a
                    key={i}
                    aria-label={`Link to ${social.link.replace("https://", "").replace("www.", "").split(".")[0]}`}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={item}
                    className="hover:text-primary transition-colors"
                >
                    {social.icon}
                </motion.a>
            ))}

            {/* Vertical line */}
            <motion.div
                className="w-[2px] h-20 bg-text-muted mt-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: socials.length * 0.2 }}
            />
        </motion.div>
    );
}
