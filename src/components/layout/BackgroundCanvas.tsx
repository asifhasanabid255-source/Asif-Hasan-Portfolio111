import React from 'react';
import { motion } from 'motion/react';

export function BackgroundCanvas() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        Professional Two-Color Background System:
        Color 1: Royal Navy Blue (Primary Accent & Studio Atmosphere)
        Color 2: Ice Slate (Foundation Canvas Tone)
      */}

      {/* 1. Base 2-Color Seamless Gradient Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F4F8FC] to-[#EFF6FF] dark:from-[#0A0D14] dark:via-[#0D121F] dark:to-[#0F172A] transition-colors duration-500" />

      {/* 2. Studio Precision Dot Matrix - Tinted with Color 1 (Royal Blue) */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(30, 58, 138, 0.12) 1.2px, transparent 1.2px),
            linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 128px 128px, 128px 128px'
        }}
      />

      {/* 3. Color 1: Primary Royal Navy Blue Ambient Aura (Upper Viewport) */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-blue-600/12 dark:bg-blue-600/14 blur-[130px]"
      />

      {/* 4. Color 2: Ice Blue / Light Steel Ambient Aura (Mid to Lower Viewport) */}
      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.1, 0.94, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-[35%] -right-[8%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-sky-400/12 dark:bg-blue-400/10 blur-[130px]"
      />

      {/* 5. Color 1 (Royal Blue) Deep Subtle Grounding at Bottom */}
      <motion.div
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.06, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute -bottom-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-blue-700/10 dark:bg-blue-600/10 blur-[140px]"
      />

      {/* Minimal Studio Precision Frame & Markers (Monochrome with Royal Blue Indicator) */}
      <div className="absolute inset-0 flex flex-col justify-between py-10 px-8 opacity-[0.35] hidden md:flex dark:hidden">
        {/* Top Timecode & Spec */}
        <div className="flex justify-between items-center text-[11px] font-mono tracking-widest text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-accent animate-pulse" />
            <span>STUDIO 4K • 60FPS</span>
            <span className="text-slate-300">|</span>
            <span>COLOR: REC.709</span>
          </div>
          <div className="flex items-center gap-2">
            <span>PRORES 422 HQ</span>
          </div>
        </div>

        {/* Center Grid Marks */}
        <div className="w-full flex justify-between items-center px-4">
          <span className="text-slate-400 font-mono text-xs select-none">+</span>
          <span className="text-slate-300 font-mono text-[10px] select-none tracking-widest uppercase">Dual-Tone Studio Canvas</span>
          <span className="text-slate-400 font-mono text-xs select-none">+</span>
        </div>

        {/* Bottom Status */}
        <div className="flex justify-between items-center text-[11px] font-mono tracking-widest text-slate-400">
          <span>AUDIO: 48kHz 24-BIT MASTER</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-accent" />
            <span>CALIBRATED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
