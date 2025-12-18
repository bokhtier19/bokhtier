import ProjectCard from "../../components/ProjectCard";
import SecondaryProjectCard from "../../components/SecondaryProjectCard";
import {projects, secondaryprojects} from "../../../lib/projects";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center">
            <div className="py-20 md:max-w-[80%] px-6 md:px-12 flex flex-col gap-12 items-center">
                <SectionHeading index="01" title="Some Things I’ve Built" />

                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>

            <div className="px-4 md:px-12 w-[80%] flex flex-col gap-12 items-center">
                <p>Other Projects</p>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
                        {secondaryprojects.map((project, index) => (
                            <SecondaryProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
