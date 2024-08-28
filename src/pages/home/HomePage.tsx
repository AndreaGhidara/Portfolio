import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionExperiences from "@/components/SectionExperiences";
import SectionProjects from "@/components/SectionProjects";
import SectionAbout from './../../components/SectionAbout';
import SectionContactMe from "@/components/SectionContactMe";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = 65;
        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <div className="dark:bg-[--bg_dark] bg-blue-100 text-black dark:text-white">
      <header className=" sticky top-0 z-50">
        <Navbar />
      </header>
      <main className=" overflow-x-hidden">
        <div className="min-h-screen">
          <Hero />
        </div>
        <section id="projects" className="pb-40 flex justify-center">
          <div className="container_custom ">
            <SectionProjects />
          </div>
        </section>
        <section id="experiences" className="pb-40 flex justify-center">
          <div className="container_custom ">
            <SectionExperiences />
          </div>
        </section>
        <section id="about" className="pb-40 lg:pb-72 flex justify-center">
          <div className="container_custom ">
            <SectionAbout />
          </div>
        </section>
        <section id="contactMe" className="pb-40 lg:pb-72 flex justify-center">
          <div className="container_custom ">
            <SectionContactMe />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
{/* <div className=" min-h-screen flex justify-center">
          <div className="container_custom grid grid-cols-1 lg:grid-cols-3 gap-10 p-5">
            <CardMini />
            <CardMini />
            <CardMini />
            <CardMini />
          </div>
        </div> */}