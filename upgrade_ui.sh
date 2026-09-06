#!/bin/bash

# Upgrade Portfolio.tsx
sed -i 's/className="bg-white-surface rounded-2xl overflow-hidden border border-border shadow-\[0_4px_20px_rgba(0,0,0,0.02)\] group hover:shadow-\[0_8px_30px_rgba(0,0,0,0.06)\] transition-all duration-300 flex flex-col"/className="bg-white-surface rounded-3xl overflow-hidden border border-border\/50 shadow-sm group hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] hover:border-primary-accent\/30 transition-all duration-500 flex flex-col"/g' src/components/sections/Portfolio.tsx

# Upgrade Services.tsx
sed -i 's/className="bg-white-surface rounded-2xl p-8 border border-border shadow-\[0_2px_10px_rgba(0,0,0,0.01)\] hover:shadow-\[0_8px_30px_rgba(0,0,0,0.04)\] transition-all duration-300 flex flex-col h-full group"/className="bg-white-surface rounded-3xl p-8 sm:p-10 border border-border\/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] hover:border-primary-accent\/30 transition-all duration-500 flex flex-col h-full group hover:-translate-y-1"/g' src/components/sections/Services.tsx

# Upgrade SkillsAndTools.tsx
sed -i 's/className="bg-primary-bg rounded-2xl p-8 border border-border shadow-\[0_2px_15px_rgba(0,0,0,0.01)\] hover:shadow-\[0_8px_30px_rgba(0,0,0,0.04)\] transition-all duration-300 flex flex-col h-full relative group"/className="bg-white-surface rounded-3xl p-8 sm:p-10 border border-border\/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] hover:border-primary-accent\/30 transition-all duration-500 flex flex-col h-full relative group hover:-translate-y-1"/g' src/components/sections/SkillsAndTools.tsx
sed -i 's/className="w-14 h-14 rounded-xl bg-white-surface flex items-center justify-center shadow-sm border border-border\/50 group-hover:border-primary-accent\/30 transition-colors"/className="w-16 h-16 rounded-2xl bg-primary-bg flex items-center justify-center shadow-sm border border-border\/50 group-hover:border-primary-accent\/30 transition-colors group-hover:scale-110 duration-500"/g' src/components/sections/SkillsAndTools.tsx
sed -i 's/className="inline-flex items-center px-3 py-1.5 rounded-md bg-white-surface border border-border text-xs font-medium text-primary-text shadow-sm"/className="inline-flex items-center px-4 py-2 rounded-full bg-primary-bg border border-border\/60 text-xs font-medium text-secondary-text group-hover:border-primary-accent\/30 group-hover:text-primary-accent transition-colors"/g' src/components/sections/SkillsAndTools.tsx

# Upgrade AboutMe.tsx
sed -i 's/className="bg-white-surface rounded-xl p-8 border border-border shadow-\[0_2px_10px_rgba(0,0,0,0.02)\] relative overflow-hidden"/className="bg-white-surface rounded-3xl p-8 sm:p-10 border border-border\/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 relative overflow-hidden hover:-translate-y-1"/g' src/components/sections/AboutMe.tsx

# Upgrade Experience.tsx
sed -i 's/className="bg-white-surface rounded-2xl p-6 sm:p-8 border border-border shadow-\[0_2px_10px_rgba(0,0,0,0.01)\] hover:shadow-\[0_8px_30px_rgba(0,0,0,0.04)\] transition-all duration-300"/className="bg-white-surface rounded-3xl p-6 sm:p-8 border border-border\/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 hover:-translate-y-1"/g' src/components/sections/Experience.tsx
sed -i 's/className="w-12 h-12 rounded-xl bg-white-surface shadow-sm border border-border flex items-center justify-center text-primary-accent"/className="w-14 h-14 rounded-2xl bg-white-surface shadow-sm border border-border\/50 flex items-center justify-center text-primary-accent group-hover:scale-110 duration-500"/g' src/components/sections/Experience.tsx

# Upgrade Education.tsx
sed -i 's/className="bg-white-surface rounded-2xl p-6 sm:p-8 border border-border shadow-\[0_2px_10px_rgba(0,0,0,0.01)\] hover:shadow-\[0_8px_30px_rgba(0,0,0,0.04)\] transition-all duration-300"/className="bg-white-surface rounded-3xl p-6 sm:p-8 border border-border\/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 hover:-translate-y-1"/g' src/components/sections/Education.tsx
sed -i 's/className="w-12 h-12 rounded-xl bg-white-surface shadow-sm border border-border flex items-center justify-center text-primary-accent"/className="w-14 h-14 rounded-2xl bg-white-surface shadow-sm border border-border\/50 flex items-center justify-center text-primary-accent group-hover:scale-110 duration-500"/g' src/components/sections/Education.tsx

# Upgrade CV.tsx
sed -i 's/className="w-full max-w-2xl bg-white-surface rounded-2xl p-8 sm:p-12 border border-border shadow-\[0_2px_15px_rgba(0,0,0,0.02)\] hover:shadow-\[0_8px_30px_rgba(0,0,0,0.05)\] transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"/className="w-full max-w-2xl bg-white-surface rounded-3xl p-8 sm:p-12 border border-border\/50 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.08)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden hover:-translate-y-1"/g' src/components/sections/CV.tsx

# Upgrade Contact.tsx
sed -i 's/className="bg-white-surface rounded-3xl p-8 sm:p-10 border border-border shadow-\[0_2px_15px_rgba(0,0,0,0.02)\]"/className="bg-white-surface rounded-\[2.5rem\] p-8 sm:p-12 border border-border\/50 shadow-\[0_20px_40px_-15px_rgba(30,58,138,0.05)\]"/g' src/components/sections/Contact.tsx

