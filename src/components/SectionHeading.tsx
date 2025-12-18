"use client";

import {motion} from "framer-motion";

interface SectionHeadingProps {
    index: string;
    title: string;
}

export default function SectionHeading({index, title}: SectionHeadingProps) {
    return (
        <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="flex items-center gap-4 mb-12 w-full">
            <span className="text-primary font-mono text-lg">{index}.</span>

            <h3 className="text-3xl font-bold whitespace-nowrap">{title}</h3>

            <div className="flex-1 h-px bg-white/20" />
        </motion.div>
    );
}
