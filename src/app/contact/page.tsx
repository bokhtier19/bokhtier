// src/app/contact/page.tsx
"use client";

import {motion} from "framer-motion";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import ContactForm from "../../components/ContactForm";
import CopyEmailButton from "@/components/CopyMailButton";
import SectionHeading from "./../../components/SectionHeading";

const socials = [
    {icon: <FaGithub />, link: "https://github.com/bokhtier19"},
    {icon: <FaLinkedin />, link: "https://linkedin.com/in/elius19"},
    {icon: <FaTwitter />, link: "https://twitter.com/bokhtier19"},
    {icon: <FaInstagram />, link: "https://instagram.com/bokhtier19"},
    {icon: <SiGmail />, link: "mailto:bokhtierelius19@gmail.com"}
];

export default function ContactPage() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24">
            <div className="p-4  text-center max-w-[80%] flex flex-col w-full justify-center items-center">
                {/* Heading */}

                <SectionHeading index="04" title="Let's Connect" />

                {/* Intro */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="flex flex-col  text-center text-xs md:text-base font-inter gap-4 text-slate-500 mb-12 md:p-8">
                    <p>I’m still learning, improving, and trying to find my way in this exciting world of development. Every bit of guidance or opportunity means the world to me.</p>
                    <p>So if you’re reading this and feel like saying Hi or offering a small chance to prove myself, please do — I’d be so grateful.</p>
                </motion.div>

                {/* CTA Form*/}
                <ContactForm />

                <p className="text-slate-500 font-inter my-6 mb-4">OR</p>

                {/* Contact Card */}
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.7}}
                    viewport={{once: true}}
                    className="p-8 mb-12 px-4 transition hover:shadow-green/40">
                    <p className="text-slate-500 font-inter mb-4">Drop me an email:</p>
                    <p className="text-md px-2 md:text-xl font-space underline underline-offset-4 flex gap-2 items-center">
                        bokhtierelius19@gmail.com
                        <CopyEmailButton />
                    </p>
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
            </div>
        </section>
    );
}
