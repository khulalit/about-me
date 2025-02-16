import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact";
import Education from "@/components/education";
import ScrollProgress from "@/components/floating-progress-bar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import AnimatedSection from "@/components/ui/animated-section";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <div className="pulka-pattern min-h-screen w-screen pl-4 md:pl-12 overflow-x-hidden ">
      <div className="fixed h-full w-0.5 border border-primaryDark left-4 md:left-12 bg-white"></div>
      <Header />
      <HeroSection />
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection>
        <WorkExperience />
      </AnimatedSection>
      <Education />
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <ContactMe />
      <Footer />
      <ScrollProgress />
    </div>
  );
}
