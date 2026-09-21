import React, { forwardRef } from 'react';
import { personalData } from '../../data/personal';
import { cvContent } from '../../data/cvContent';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Youtube, 
  Facebook, 
  Target, 
  GraduationCap, 
  Award, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  Keyboard, 
  Bot, 
  HeartHandshake,
  Layers
} from 'lucide-react';

interface CVPdfTemplateProps {
  language: 'en' | 'bn';
}

export const CVPdfTemplate = forwardRef<HTMLDivElement, CVPdfTemplateProps>(({ language }, ref) => {
  const { careerObjective, education, professionalTraining, skills } = cvContent;

  return (
    <div 
      ref={ref} 
      className="bg-white text-gray-900 w-[210mm] min-h-[297mm] box-border mx-auto font-sans flex shadow-lg"
      style={{
        width: '210mm',
        minHeight: '297mm',
        backgroundColor: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Left Column - Colored (Navy Blue) */}
      <div 
        className="w-[34%] p-6 flex flex-col shrink-0 text-white"
        style={{ backgroundColor: '#1E3A8A', color: '#ffffff' }}
      >
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 mb-6 shrink-0 flex items-center justify-center bg-white/10 shadow-md">
          <img 
            src="/hero.png"
            alt={personalData.name[language]} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="mb-7">
          <h3 className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1.5 mb-3 text-blue-100 flex items-center gap-2">
            <Phone size={14} className="text-blue-300" />
            {language === 'en' ? 'Contact' : 'যোগাযোগ'}
          </h3>
          <div className="space-y-2.5 text-xs text-blue-50">
            <div className="flex items-center gap-2.5">
              <Phone size={13} className="shrink-0 text-blue-300" />
              <span>{personalData.whatsapp}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={13} className="shrink-0 text-blue-300" />
              <span className="break-all">{personalData.email}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={13} className="shrink-0 mt-0.5 text-blue-300" />
              <span className="leading-snug">{personalData.location[language]}</span>
            </div>
            {personalData.facebook && (
              <div className="flex items-center gap-2.5">
                <Facebook size={13} className="shrink-0 text-blue-300" />
                <span className="break-all">facebook.com/asifhasan</span>
              </div>
            )}
            {personalData.behance && (
              <div className="flex items-center gap-2.5">
                <Globe size={13} className="shrink-0 text-blue-300" />
                <span className="break-all">{personalData.behance.replace('https://www.', '').replace('https://', '')}</span>
              </div>
            )}
            {personalData.youtube && (
              <div className="flex items-center gap-2.5">
                <Youtube size={13} className="shrink-0 text-blue-300" />
                <span className="break-all">youtube.com/@AsifCreativeLab</span>
              </div>
            )}
          </div>
        </div>

        {/* Hard Skills */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1.5 mb-3 text-blue-100 flex items-center gap-2">
            <Layers size={14} className="text-blue-300" />
            {skills.hardSkills.title[language]}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Adobe Premiere Pro',
              'Adobe After Effects',
              'Adobe Photoshop',
              'Adobe Illustrator',
              'Video Editing',
              'Motion Graphics',
              'Graphic Design',
              'Typography',
              'Visual Design',
              'Social Media Content'
            ].map((skill, idx) => (
              <span 
                key={idx} 
                className="text-[11px] bg-white/15 px-2 py-0.5 rounded text-blue-50 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Generative AI Tools */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1.5 mb-2.5 text-blue-100 flex items-center gap-2">
            <Bot size={14} className="text-blue-300" />
            {skills.generativeAI.title[language]}
          </h3>
          <p className="text-[11px] leading-relaxed text-blue-100">
            {skills.generativeAI.content[language]}
          </p>
        </div>

        {/* Typing Speed */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1.5 mb-2 text-blue-100 flex items-center gap-2">
            <Keyboard size={14} className="text-blue-300" />
            {skills.typingSpeed.title[language]}
          </h3>
          <p className="text-xs font-semibold text-white bg-white/15 px-2.5 py-1 rounded inline-block">
            {skills.typingSpeed[language]}
          </p>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1.5 mb-3 text-blue-100 flex items-center gap-2">
            <HeartHandshake size={14} className="text-blue-300" />
            {skills.softSkills.title[language]}
          </h3>
          <ul className="space-y-1.5 text-[11px] text-blue-100">
            {skills.softSkills.items[language].map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-blue-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column - Clean White */}
      <div className="w-[66%] p-7 flex flex-col justify-start">
        
        {/* Name and Professional Title */}
        <div className="mb-6 border-b pb-4 border-gray-200">
          <h1 className="text-3xl font-extrabold tracking-tight uppercase" style={{ color: '#1E3A8A' }}>
            {personalData.name[language]}
          </h1>
          <h2 className="text-sm font-bold text-gray-600 tracking-wider uppercase mt-1">
            {language === 'en' ? 'Video Editor & Motion Graphics Designer' : 'ভিডিও এডিটর ও মোশন গ্রাফিক্স ডিজাইনার'}
          </h2>
        </div>

        {/* Career Objective */}
        <div className="mb-6">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-2 flex items-center gap-2 border-b border-gray-100 pb-1" style={{ color: '#1E3A8A' }}>
            <Target size={15} />
            {language === 'en' ? 'Career Objective' : 'ক্যারিয়ার অবজেক্টিভ'}
          </h3>
          <p className="text-xs text-gray-700 leading-relaxed text-justify">
            {careerObjective[language]}
          </p>
        </div>

        {/* Specialized Skills */}
        <div className="mb-6">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-1" style={{ color: '#1E3A8A' }}>
            <Film size={15} />
            {language === 'en' ? 'Specialized Skills' : 'বিশেষায়িত দক্ষতা'}
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50/80 p-2.5 rounded-lg border border-gray-100">
              <h4 className="font-bold text-xs text-gray-900 mb-1 flex items-center gap-1.5" style={{ color: '#1E3A8A' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-800"></span>
                {skills.videoEditing.title[language]}
              </h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                {skills.videoEditing.content[language]}
              </p>
            </div>

            <div className="bg-gray-50/80 p-2.5 rounded-lg border border-gray-100">
              <h4 className="font-bold text-xs text-gray-900 mb-1 flex items-center gap-1.5" style={{ color: '#1E3A8A' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-800"></span>
                {skills.motionGraphics.title[language]}
              </h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                {skills.motionGraphics.content[language]}
              </p>
            </div>

            <div className="bg-gray-50/80 p-2.5 rounded-lg border border-gray-100">
              <h4 className="font-bold text-xs text-gray-900 mb-1 flex items-center gap-1.5" style={{ color: '#1E3A8A' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-800"></span>
                {skills.graphicDesign.title[language]}
              </h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                {skills.graphicDesign.content[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Professional Training */}
        <div className="mb-6">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-1" style={{ color: '#1E3A8A' }}>
            <Award size={15} />
            {language === 'en' ? 'Professional Training' : 'প্রফেশনাল ট্রেনিং'}
          </h3>
          <div className="relative pl-3.5 border-l-2 border-blue-100">
            <div className="absolute w-2 h-2 bg-blue-800 rounded-full -left-[5px] top-1" style={{ backgroundColor: '#1E3A8A' }}></div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-bold text-xs text-gray-900">{professionalTraining.title[language]}</h4>
              <span className="text-[10px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                {professionalTraining.duration[language]} | {professionalTraining.year}
              </span>
            </div>
            <p className="text-[11px] text-blue-900 font-medium mt-0.5">
              {professionalTraining.institution[language]}
            </p>
            <div className="mt-1.5 space-y-1 text-[11px] text-gray-600">
              <p>
                <strong className="text-gray-800">{language === 'en' ? 'Major Areas: ' : 'প্রধান ক্ষেত্র: '}</strong>
                {professionalTraining.majorAreas[language]}
              </p>
              <p>
                <strong className="text-gray-800">{language === 'en' ? 'Key Learning: ' : 'মূল শিক্ষণীয়: '}</strong>
                {professionalTraining.keyLearningAreas[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-1" style={{ color: '#1E3A8A' }}>
            <GraduationCap size={15} />
            {language === 'en' ? 'Education' : 'শিক্ষাগত যোগ্যতা'}
          </h3>
          <div className="space-y-3">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-3.5 border-l-2 border-blue-100">
                <div className="absolute w-2 h-2 bg-blue-800 rounded-full -left-[5px] top-1" style={{ backgroundColor: '#1E3A8A' }}></div>
                <div className="flex items-baseline justify-between">
                  <h4 className="font-bold text-xs text-gray-900">{edu.degree[language]}</h4>
                  <span className="text-[10px] font-semibold text-gray-500">
                    {edu.year ? `${language === 'en' ? 'Year: ' : 'সাল: '}${edu.year}` : ''}
                  </span>
                </div>
                <p className="text-[11px] text-blue-800 font-medium mt-0.5">
                  {edu.institution[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

CVPdfTemplate.displayName = 'CVPdfTemplate';

