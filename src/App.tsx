import React from 'react';
import { SectionProvider } from './context/SectionContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { Portfolio } from './components/sections/Portfolio';
import { AboutMe } from './components/sections/AboutMe';
import { SkillsAndTools } from './components/sections/SkillsAndTools';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { CV } from './components/sections/CV';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <SectionProvider>
      <div className="min-h-screen pt-16 lg:pt-20 relative flex flex-col justify-between overflow-x-hidden selection:bg-primary-accent selection:text-white">
        <BackgroundCanvas />
        <Navbar />

        <main className="w-full relative z-10 flex flex-col">
          <Portfolio />
          <AboutMe />
          <SkillsAndTools />
          <Services />
          <Experience />
          <Education />
          <CV />
          <Contact />
        </main>

        <Footer />
      </div>
    </SectionProvider>
  );
}
