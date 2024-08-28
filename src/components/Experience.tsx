import { useRef } from "react";
import { useInView } from "framer-motion";

interface ExperienceProps {
    name: string,
    role: string,
    description: string
}

export default function Experience({ name, role, description }: ExperienceProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translatey(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
            <h1 className="text-blue-400 text-2xl">{name}</h1>
            <h2 className="text-xl font-bold">{role}</h2>
            <p>
                {description}
            </p>
        </div>
    )
}
