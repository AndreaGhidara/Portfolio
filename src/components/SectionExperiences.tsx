import React from "react"
import Experience from "./Experience"
import { useRef } from "react";
import { useInView } from "framer-motion";

const Experiences = [
    {
        id: 0,
        name: 'E.Roi srl',
        role: 'Full Stack Developer',
        description: `
        Ho contribuito alla creazione e manutenzione di piattaforme di e-commerce utilizzando Vue.js 
        come framework principale, con Pinia per una gestione efficiente dei dati. Per le chiamate API, 
        ho utilizzato Axios e Fetch, garantendo comunicazioni affidabili e performanti con il back-end. 
        Le rotte sono state configurate principalmente tramite Vue Router e, in alcuni casi, ho integrato 
        Vue con Laravel tramite Inertia per ottimizzare il rendering delle pagine.
        Oltre a Vue.js, ho avuto l'opportunità di lavorare su progetti che richiedevano l'uso di React, 
        ampliando così le mie competenze su entrambi i framework. Parallelamente, ho acquisito esperienza nell'utilizzo di Express
        per creare un sistema di autenticazione integrato con Google OAuth 2.0, gestendo i token con JWT per l'accesso sicuro alle
        risorse protette tramite rotte private.
        Durante lo sviluppo, ho lavorato direttamente con database SQL per raccogliere dati e condurre analisi statistiche. 
        Ho anche utilizzato Backpack per semplificare la gestione dei dati, ottimizzando il workflow complessivo.
        `,
    }
]

export default function SectionExperiences() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="px-5">
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translatex(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                }}>
                <h1 className="text-3xl">Experiences</h1>
                <h2 className="text-xl text-blue-400">- Esperienze di lavoro</h2>
            </div>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {Experiences.map((exp, index) => (
                    <React.Fragment key={index}>
                        <Experience name={exp.name} role={exp.role} description={exp.description} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
