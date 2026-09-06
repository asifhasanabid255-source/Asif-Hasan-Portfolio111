import React from 'react';
import { useLanguage } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { SkillsAndTools } from './components/sections/SkillsAndTools';
import { Portfolio } from './components/sections/Portfolio';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { CV } from './components/sections/CV';
import { Contact } from './components/sections/Contact';

export default function App() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 relative">
      <BackgroundCanvas />
      <Navbar />
      
      <main>
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 03: About Me */}
        <AboutMe />
        
        {/* Section 04: Skills & Tools */}
        <SkillsAndTools />

        {/* Section 05: Portfolio / Selected Works */}
        <Portfolio />

        {/* Section 06: Services */}
        <Services />

        {/* Section 07: Experience & Training */}
        <Experience />
        
        {/* Section 08: Education & Certificates */}
        <Education />

        {/* Section 09: CV / Resume */}
        <CV />

        {/* Section 10: Contact */}
        <Contact />
        
      </main>
    </div>
  );
}
