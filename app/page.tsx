"use client";

import { useState, useEffect } from "react";
import NavbarV2 from "./components/layout/navbarv2";
import AboutSection from "./components/layout/about";
import ThemeToggle from "./components/elements/ThemeToggle/themetoggle";
import ProfileLayout from "./components/layout/profile";
import StarBackground from "./components/elements/StarBackground";
import Preloader from "./components/layout/Preloader";
import SkillsSection from "./components/layout/skills";
import ProjectsSection from "./components/layout/projects";
import ExperienceSection from "./components/layout/experience";
import EducationSection from "./components/layout/education";
import ContactSection from "./components/layout/contact"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mensimulasikan waktu loading untuk demonstrasi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Atur waktu sesuai kebutuhan (dalam milidetik)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <StarBackground />
          <main className="relative text-foreground animate-fadeIn">
            <div className="fixed bottom-0 right-0 mr-4 mb-4 z-50">
              <ThemeToggle />
            </div>
            <NavbarV2 />
            {/* Section 1: Profile/Hero */}
            <section
              id="home"
              className="flex min-h-screen items-center justify-center px-24"
            >
              <ProfileLayout />
            </section>
            {/* section 2: About Me */}
            <section
              id="about"
              className="flex min-h-screen items-center justify-center px-24"
            >
              <AboutSection />
            </section>
            {/* section 3: Skills */}
            <section
              id="skills"
              className="flex min-h-screen items-center justify-center px-24"
            >
              <SkillsSection />
            </section>
            {/* section 4: Projects */}
            <section
              id="projects"
              className="flex min-h-screen items-center justify-center px-4 md:px-24"
            >
              <ProjectsSection />
            </section>
            {/* section 5: Experience */}
            <section
              id="experience"
              className="flex min-h-screen items-center justify-center px-4 md:px-24"
            >
              <ExperienceSection />
            </section>
            {/* section 6: Education & Certifications */}
            <section
            id="education"
            className="flex min-h-screen items-center justify-center px-4 md:px-24"
            > 
            <EducationSection/>
            </section>
            {/* section 7: Contact */}
            <section
            id="contact"
            className="flex min-h-screen items-center justify-center px-4 md:px-24"
            >
              <ContactSection/>
            </section>
          </main>
        </>
      )}
    </>
  );
}
