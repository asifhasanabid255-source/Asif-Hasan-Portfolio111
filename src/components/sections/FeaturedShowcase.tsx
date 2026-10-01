import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Play, Sparkles, User, ArrowDown } from 'lucide-react';
import { useSection } from '../../context/SectionContext';

export function FeaturedShowcase() {
  const { language } = useLanguage();
  const { setActiveSection } = useSection();

  return (
    <section 
      id="home" 
      className="pt-4 sm:pt-8 md:pt-10 pb-10 sm:pb-14 scroll-mt-20 lg:scroll-mt-24 bg-transparent overflow-hidden relative"
    >
      <span id="featured" className="block -mt-24 pt-24 invisible" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - First Greeting & Spotlight Title */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-2.5 inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-primary-accent uppercase">
                {language === 'bn' ? 'আসিফ হাসান • ভিডিও এডিটর ও ডিজাইনার' : 'ASIF HASAN • VIDEO EDITOR & DESIGNER'}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-text mb-2 font-display">
              {language === 'bn' ? 'নির্বাচিত সেরা কাজ • স্পটলাইট প্রজেক্ট' : 'Featured Spotlight Work • Premier Project'}
            </h1>
            <p className="text-xs sm:text-sm text-secondary-text max-w-2xl mx-auto leading-relaxed">
              {language === 'bn' 
                ? 'ওয়েবসাইটে প্রবেশ করতেই দেখুন আমার নির্মিত প্রধান অফিসিয়াল ভিডিও প্রজেক্ট ও আধুনিক এডিটিং স্টাইল' 
                : 'Welcome! Experience my primary featured commercial video project showcasing clean cuts, audio sync, and motion storytelling.'}
            </p>
          </motion.div>
        </div>

        {/* Top Featured Video Showcase: NASHRUS SIRAH REGISTRATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="bg-gradient-to-br from-white/95 via-blue-50/35 to-indigo-50/25 dark:from-[#111520] dark:via-[#151c2c] dark:to-[#111520] backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-100/90 dark:border-blue-900/50 shadow-[0_14px_40px_-8px_rgba(30,58,138,0.14)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left: Embedded Video Player (7 cols on lg for 16:9 widescreen video) */}
              <div className="lg:col-span-7 flex justify-center w-full">
                <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100/80 dark:border-blue-900/60 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/A3FxMVUsldA?rel=0&modestbranding=1"
                    title={language === 'bn' ? 'নশরুস সিরাহ রেজিস্ট্রেশন - অফিসিয়াল ভিডিও' : 'NASHRUS SIRAH REGISTRATION - Official Video'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Right: Info, Hook & Action (5 cols on lg) */}
              <div className="lg:col-span-5 flex flex-col items-start space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {language === 'bn' ? 'সর্বপ্রথম ভিডিও • অফিসিয়াল রিলিজ' : 'First Video • Official Release'}
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-text leading-tight">
                  {language === 'bn' 
                    ? 'নশরুস সিরাহ রেজিস্ট্রেশন' 
                    : 'NASHRUS SIRAH REGISTRATION'}
                </h2>

                <p className="text-sm font-semibold text-primary-accent">
                  {language === 'bn' 
                    ? 'অফিসিয়াল প্রমোশনাল ও রেজিস্ট্রেশন ভিডিও' 
                    : 'Official Promotional & Registration Video'}
                </p>

                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {language === 'bn'
                    ? 'নশরুস সিরাহ-এর রেজিস্ট্রেশন সংক্রান্ত বিস্তারিত তথ্য ও গাইডলাইন সুন্দরভাবে তুলে ধরতে তৈরি প্রফেশনাল ভিডিও। মসৃণ এডিটিং, আকর্ষক টাইপোগ্রাফি ও তথ্যবহুল ভিজ্যুয়াল প্রেজেন্টেশন।'
                    : 'Official registration promotional video for Nashrus Sirah, featuring clean video editing, dynamic typography, and clear visual information flow.'}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50/80 dark:bg-gray-800 text-[11px] font-semibold text-primary-accent border border-blue-100/60 dark:border-blue-900/40">
                    Adobe Premiere Pro
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50/80 dark:bg-gray-800 text-[11px] font-semibold text-primary-accent border border-blue-100/60 dark:border-blue-900/40">
                    Motion Graphics
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50/80 dark:bg-gray-800 text-[11px] font-semibold text-primary-accent border border-blue-100/60 dark:border-blue-900/40">
                    Typography & Sound
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://youtu.be/A3FxMVUsldA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md hover:shadow-red-600/30 transition-all"
                  >
                    <Play size={14} fill="currentColor" />
                    {language === 'bn' ? 'ইউটিউবে সরাসরি দেখুন' : 'Watch on YouTube'}
                  </a>

                  <button
                    onClick={() => setActiveSection('about')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-gray-900 hover:bg-blue-50/60 text-primary-text hover:text-primary-accent text-xs font-semibold border border-blue-100 dark:border-gray-800 shadow-xs transition-colors"
                  >
                    <User size={14} />
                    {language === 'bn' ? 'আমার পরিচয় জানুন' : 'About Me'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Subtle navigation cue to About Me & Projects */}
        <div className="flex justify-center pt-1">
          <button
            onClick={() => setActiveSection('about')}
            className="group inline-flex items-center gap-2 text-xs font-medium text-secondary-text hover:text-primary-accent transition-colors"
          >
            <span>{language === 'bn' ? 'নিচে স্ক্রোল করে আমার পরিচয় ও সকল কাজ দেখুন' : 'Scroll down to see About Me & All Works'}</span>
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
