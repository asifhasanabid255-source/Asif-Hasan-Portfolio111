import React from 'react';
import { motion } from 'motion/react';

export function BackgroundCanvas() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base subtle warm-cool gradient canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F4F6F9] to-[#F1F4F8]" />

      {/* Modern Studio Dot Matrix Canvas Grid */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(30, 58, 138, 0.12) 1.2px, transparent 1.2px),
            linear-gradient(to right, rgba(226, 228, 233, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 228, 233, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 128px 128px, 128px 128px'
        }}
      />

      {/* Floating Ambient Aura Glow 1: Royal Blue / Indigo (Top Left - Hero area) */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-blue-600/10 via-indigo-500/8 to-cyan-400/5 blur-[120px]"
      />

      {/* Floating Ambient Aura Glow 2: Creative Amber / Coral Spark (Right Side - Portfolio & Motion) */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[28%] -right-[12%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-amber-500/8 via-rose-500/6 to-orange-400/4 blur-[130px]"
      />

      {/* Floating Ambient Aura Glow 3: Cyan / Sky Electric Glow (Middle - Skills & Works) */}
      <motion.div
        animate={{
          x: [0, 35, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-[58%] -left-[15%] w-[48vw] h-[48vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/9 via-sky-600/7 to-indigo-500/5 blur-[120px]"
      />

      {/* Floating Ambient Aura Glow 4: Deep Violet / Indigo Glow (Bottom - Contact) */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 35, -20, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tl from-indigo-600/9 via-purple-500/7 to-blue-500/5 blur-[140px]"
      />

      {/* Subtle Studio / Film Editor Watermarks & Grid Marks */}
      <div className="absolute inset-0 flex flex-col justify-between py-12 px-8 opacity-[0.3] hidden md:flex">
        {/* Top Timecode & FPS indicator */}
        <div className="flex justify-between items-center text-[11px] font-mono tracking-widest text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500/60 animate-pulse"></span>
            <span>REC // 00:24:18:02</span>
            <span className="text-slate-300">|</span>
            <span>4K DCI 60FPS</span>
          </div>
          <div className="flex items-center gap-4">
            <span>PRORES 422 HQ</span>
            <span className="text-slate-300">|</span>
            <span>COLORSPACE: REC.709</span>
          </div>
        </div>

        {/* Studio Precision Crosshairs */}
        <div className="w-full flex justify-between items-center px-4">
          <span className="text-slate-400 font-mono text-sm select-none">+</span>
          <span className="text-slate-300 font-mono text-xs select-none tracking-widest uppercase">Canvas Grid // 1080p</span>
          <span className="text-slate-400 font-mono text-sm select-none">+</span>
        </div>

        {/* Bottom Status */}
        <div className="flex justify-between items-center text-[11px] font-mono tracking-widest text-slate-400">
          <span>AUDIO: 48kHz 24-BIT</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70"></span>
            <span>RENDER CACHE READY</span>
          </div>
        </div>
      </div>

      {/* Diagonal Studio Ambient Light Accent */}
      <div 
        className="absolute top-0 right-0 w-[80vw] h-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, transparent 60%)'
        }}
      />
    </div>
  );
}
