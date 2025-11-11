import React from "react";
import Hero from "../components/Hero";
import AboutPage from "./about/page";
import Projects from "./projects/page";
import ContactPage from "./contact/page";

const Page = () => {
    return (
        <div className="">
            <Hero />
            <AboutPage />
            <Projects />
            <ContactPage />
        </div>
    );
};

export default Page;
