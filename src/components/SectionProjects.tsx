import React from "react";
import Card from "./Card";
import { useRef } from "react";
import { useInView } from "framer-motion";

const projects = [
    {
        id: 0,
        title: 'Work in progress',
        subTitle: '',
        description: '',
        technologies: [],
        gitHubLink: '',
        webSiteLink: '',
        banner: ""
    },
]

export default function SectionProjects() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section>
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translatex(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                }}
                className="px-5">
                <h1 className="text-3xl">Projects</h1>
                <h2 className="text-xl text-blue-400">- Progetti di maggior rilievo</h2>
            </div>
            <div className="pt-20 flex flex-col gap-10">
                {projects.map((prj, index) => (
                    <React.Fragment key={index}>
                        <Card title={prj.title} subTitle={prj.subTitle} description={prj.description} technologies={prj.technologies} gitHubLink={prj.gitHubLink} webSiteLink={prj.webSiteLink} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
