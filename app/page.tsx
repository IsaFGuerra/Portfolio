import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AiDemoSection } from "@/components/AiDemoSection";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <AiDemoSection />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
