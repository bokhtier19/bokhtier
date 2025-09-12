"use client";

import { motion } from "framer-motion";

const EBLogo = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            width="40"
            height="40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-primary items-center justify-center flex"
        >
            <motion.g fill="currentcolor" stroke="20" strokeWidth="40">
                {/* Flipped E */}
                <motion.path
                    d="M192 96C174.3 96 160 110.3 160 128L160 512C160 529.7 174.3 544 192 544L448 544C465.7 544 480 529.7 480 512C480 494.3 465.7 480 448 480L224 480L224 352L384 352C401.7 352 416 337.7 416 320C416 302.3 401.7 288 384 288L224 288L224 160L448 160C465.7 160 480 145.7 480 128C480 110.3 465.7 96 448 96L192 96z"
                    transform="scale(-1,1) translate(-380,0)"
                />

                {/* B */}
                <motion.path d="M192 96C174.3 96 160 110.3 160 128L160 512C160 529.7 174.3 544 192 544L352 544C422.7 544 480 486.7 480 416C480 369.5 455.2 328.7 418 306.3C436.7 284 448 255.3 448 224C448 153.3 390.7 96 320 96L192 96zM320 288L224 288L224 160L320 160C355.3 160 384 188.7 384 224C384 259.3 355.3 288 320 288zM224 352L352 352C387.3 352 416 380.7 416 416C416 451.3 387.3 480 352 480L224 480L224 352z" />
            </motion.g>
        </motion.svg>
    );
};

export default EBLogo;
