import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionProvider, useSection } from './context/SectionContext';
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

function MainContent() {
  const { activeSection } = useSection();

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero key="home" />;
      case 'about':
        return <AboutMe key="about" />;
      case 'skills':
        return <SkillsAndTools key="skills" />;
      case 'portfolio':
        return <Portfolio key="portfolio" />;
      case 'services':
        return <Services key="services" />;
      case 'experience':
        return <Experience key="experience" />;
      case 'education':
      case 'certificates':
        return <Education key="education" />;
      case 'cv':
        return <CV key="cv" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Hero key="home" />;
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-start w-full relative z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="w-full"
        >
          {renderActiveSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default function App() {
  return (
    <SectionProvider>
      <div className="min-h-screen pt-16 lg:pt-20 relative flex flex-col justify-between overflow-x-hidden">
        <BackgroundCanvas />
        <Navbar />
        <MainContent />
      </div>
    </SectionProvider>
  );
}
