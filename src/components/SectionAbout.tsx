import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import CircleButton from './CircleButton'
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

export default function SectionAbout() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section>
            <div className='p-5'>
                <div
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translatey(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className="cardMini">
                    <div className='flex justify-end gap-3'>
                        {socialPresence.map((social, index) => (
                            <CircleButton key={index} icon={social.icon} link={social.linkAccount} />
                        ))}
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>About</h1>
                        <h2 className='text-2xl text-blue-400'>Qualche info in più su di me</h2>
                        <p className='text-xl pt-5'>
                            Ciao,
                            sono Andrea, un Front-End Developer con una grande passione per la tecnologia.
                            Ho acquisito una buona conoscenza di <span className='dark:text-[#EFD81D] font-semibold'>JavaScript</span>,
                            anche se ora preferisco utilizzare <span className='dark:text-blue-400 font-semibold'> TypeScript </span>  per i miei progetti. <br />
                            Lavoro principalmente con <span className='dark:text-blue-400 font-semibold'> React.js </span> e <span className='dark:text-green-400 font-semibold'>Vue.js</span>,
                            e negli ultimi tempi mi sono avvicinato sempre di più all'ecosistema di <span className='dark:text-blue-400 font-semibold'> React </span>,
                            scoprendone il grande potenziale, specialmente con strumenti come <span className='dark:text-blue-500 font-semibold'> Next.js  </span>
                            e <span className='dark:text-blue-300 font-semibold'> React Native </span> .
                            Mi piace curare ogni dettaglio del mio lavoro e, per ottenere risultati rapidi e di qualità,
                            prediligo l'uso di <span className='dark:text-blue-300 font-semibold'> Tailwind CSS </span> ,
                            poiché anche l'occhio vuole la sua parte. <br />
                            Da qualche tempo sto anche approfondendo lo stack
                            <span className='font-semibold'> MERN </span>
                            (<span className='dark:text-green-300 font-semibold'> MongoDB </span>,
                            <span className='dark:text-slate-300 font-semibold'> Express </span>,
                            <span className='dark:text-blue-400 font-semibold'> React </span> ,
                            <span className='dark:text-green-500 font-semibold'> Node.js </span> )
                            per ampliare le mie competenze e migliorare le mie capacità nello sviluppo di applicazioni web.
                            {/* Sono Andrea, un appassionato <span className='font-bold'>Front-end </span>
                            Developer con una forte dedizione per la
                            creazione di interfacce utente intuitive e
                            coinvolgenti. Ho sviluppato competenze
                            approfondite in <span className='dark:text-[#EFD81D] font-semibold'>JavaScript</span> , specializzandomi in
                            <span className='dark:text-blue-400 font-semibold'> React.js </span> e <span className='dark:text-green-400 font-semibold'>Vue.js</span>. Apprezzo particolarmente
                            l'ecosistema di <span className='dark:text-blue-400 font-semibold'> React </span> per la sua flessibilità e
                            potenza,ho avuto l'opportunità di lavorare su
                            diversi progetti con entrambe le tecnologie,
                            apprezzandoli entrambi.
                            Sono sempre alla ricerca di nuove sfide per
                            migliorare le mie competenze e creare soluzioni
                            innovative e user-friendly, con un interesse
                            particolare nel continuare a crescere nel mondo
                            di <span className='dark:text-blue-400 font-semibold'> React </span> */}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
