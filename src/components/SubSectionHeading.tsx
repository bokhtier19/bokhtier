"use client";

import {motion} from "framer-motion";
import {FaHandPointRight} from "react-icons/fa";

interface SubSectionHeadingProps {
    title: string;
}

export default function SubSectionHeading({title}: SubSectionHeadingProps) {
    return (
        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} className="flex items-center gap-4 mb-8 w-full">
            <h4 className="text-lg md:text-xl font-semibold tracking-wide text-white/90 items-center flex-shrink-0 flex">
                <FaHandPointRight className="inline-block mr-2 text-primary" />
                {title}
            </h4>

            <div className="flex-1 h-px bg-white/10" />
        </motion.div>
    );
}
