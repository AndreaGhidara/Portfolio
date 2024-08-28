import Navbar from "@/components/Navbar";

export default function CV() {
  return (
    <section className="h-screen dark:bg-[--primary_dark] ">
      <header>
        <Navbar />
      </header>
      <div className="w-full h-full">
        <iframe src="src/assets/document/Andrea-Ghidara_CV-2024.pdf" width="100%" height="100%"></iframe>
      </div>
    </section>
  )
}
