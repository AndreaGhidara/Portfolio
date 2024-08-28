import '@/css/navbar.scss';
import SwitchTheme from './SwitchTheme';
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Navbar() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="p-2 border-b-2 shadow-2xl text-white bg-[--primary_dark] opacity-95 flex justify-center">
            <div ref={ref} className="w-full flex justify-between items-center px-5 container_custom">
                <h1
                    style={{
                        transform: isInView ? "none" : "translatex(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
                >@Andrew-Dev</h1>
                <div className='flex items-center'>
                    <nav className="hidden lg:block">
                        <div>
                            <Link
                                style={{
                                    transform: isInView ? "none" : "translatey(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                                }}
                                to="/">Home</Link>
                            <Link
                                style={{
                                    transform: isInView ? "none" : "translatey(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                                }}
                                to="/#projects">Projects</Link>
                            <Link
                                style={{
                                    transform: isInView ? "none" : "translatey(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                                }}
                                to="/#experiences">Experiences</Link>
                            <Link
                                style={{
                                    transform: isInView ? "none" : "translatey(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                                to="/#about">About</Link>
                            <Link
                                style={{
                                    transform: isInView ? "none" : "translatey(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                                }}
                                to="/#contactMe">Contact</Link>
                            <Link
                                style={{
                                    transform: isInView ? "none" : "translatey(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                                }}
                                to="/cv">CV</Link>
                            <div id="indicator"></div>
                        </div>
                    </nav>
                    <div>
                        <SwitchTheme />
                    </div>
                </div>
            </div>
        </div>
    );
}
