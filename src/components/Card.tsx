import '@/css/card.scss'
// import Button from './Button'
// import CircleButton from './CircleButton'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Badge from './Badge'
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useInView } from "framer-motion";

interface CardProps {
    title: string,
    subTitle: string,
    description: string,
    technologies: string[],
    gitHubLink: string,
    webSiteLink: string,
}

export default function Card({ title, subTitle, description, technologies }: CardProps) {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translatey(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className='flex justify-center'>
            <div className='w-[100%] lg:w-[80%] flex flex-col lg:flex-row justify-center items-center card p-5'>
                <figure className='flex-1 flex justify-center'>
                    <img className='w-[350px] lg:w-[80%] h-[150px] lg:h-[240px] rounded-md object-cover' src="src/assets/img/work in progress.jpg" alt="" />
                </figure>
                <div className='flex-1 flex  flex-col gap-3 text-center lg:text-start'>
                    <div>
                        <h1 className='text-4xl pb-2 font-bold'>{title}</h1>
                        <h2 className='text-2xl text-[#60A5D7] font-semibold'>{subTitle}</h2>
                    </div>
                    <p className='text-normal text-gray-400'>
                        {description}
                    </p>
                    <div className='flex flex-wrap'>
                        {technologies.map((tech, index) => (
                            <React.Fragment key={index}>
                                <Badge tech={tech} />
                            </React.Fragment>
                        ))}
                    </div>
                    {/* <div className='flex justify-center lg:justify-start gap-5'>
                        <a href={webSiteLink}>
                            <Button text='Visualizza Progetto' />
                        </a>
                        <div>
                            <CircleButton icon={faGithub} link={gitHubLink} />
                        </div>
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}
