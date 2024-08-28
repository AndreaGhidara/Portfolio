import Button from '@/components/Button';
import CircleButton from './CircleButton';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { useRef } from "react";
import { useInView } from "framer-motion";

const socialPresence = [
    {
        id: 0,
        name: 'github',
        linkAccount: 'https://github.com/AndreaGhidara',
        icon: faGithub,
    },
    {
        id: 1,
        name: 'likedin',
        linkAccount: 'https://www.linkedin.com/in/andrea-ghidara/',
        icon: faLinkedinIn,
    },
]

export default function Hero() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='w-full min-h-screen flex justify-center items-center'>
            <motion.div
                className="flex flex-col-reverse sm:flex-row justify-center container_custom">
                <div
                    style={{
                        transform: isInView ? "none" : "translatex(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <img className='w-[280px] hover:rotate-12' src="src/assets/img/meAvatar.png" alt="" />
                </div>
                <div
                    style={{
                        transform: isInView ? "none" : "translatex(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                    }}
                    className='flex flex-col justify-center p-5'>
                    <h2 className='text-lg lg:text-3xl'>Hello, Io sono Andrea.</h2>
                    <h1 className='text-3xl lg:text-5xl'>Un <span className='text-blue-400'>Front-End Developer</span> con focus sul ecosistema <span className='text-blue-400'>React</span> e una passione per la tecnologia.</h1>
                    <div
                        style={{
                            transform: isInView ? "none" : "translatex(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
                        }}
                        className='py-3 flex gap-5'>
                        <Link to="#projects">
                            <Button text={'Projects'} />
                        </Link>
                        <div className='flex gap-3'>
                            {socialPresence.map((social, index) => (
                                <CircleButton key={index} icon={social.icon} link={social.linkAccount} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section >
    )
}
