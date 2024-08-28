import FormContactMe from "./FormContactMe";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function SectionContactMe() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className='w-full sm:px-20 lg:container_custom'>
            <div className="flex">
                <div className='hidden lg:flex justify-center items-center flex-1'>
                    <img
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translatex(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                        }}
                        className='w-[280px]' src="src/assets/img/meAvatar.png" alt="" />
                </div>
                <div className='flex-1'>
                    <FormContactMe />
                </div>
            </div>
        </section>
    )
}
