import React, { forwardRef } from 'react';
import { personalData } from '../../data/personal';
import { Mail, Phone, MapPin, Globe, Linkedin, Youtube, Facebook, Github } from 'lucide-react';

interface CVPdfTemplateProps {
  language: 'en' | 'bn';
}

export const CVPdfTemplate = forwardRef<HTMLDivElement, CVPdfTemplateProps>(({ language }, ref) => {
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
      {/* Left Column - Colored (Blue) */}
      <div 
        className="w-1/3 p-8 flex flex-col"
        style={{ backgroundColor: '#1E3A8A', color: '#ffffff' }}
      >
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 mb-8 shrink-0 flex items-center justify-center bg-white/10">
          <img 
            src="/hero.png"
            alt={personalData.name[language]} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-2 mb-4 text-blue-100">
            {language === 'en' ? 'Contact' : 'যোগাযোগ'}
          </h3>
          <div className="space-y-4 text-sm text-blue-50">
            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-blue-300" />
              <span className="break-all">{personalData.whatsapp}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-blue-300" />
              <span className="break-all">{personalData.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="shrink-0 mt-0.5 text-blue-300" />
              <span>{personalData.location[language]}</span>
            </div>
            {personalData.facebook && (
              <div className="flex items-center gap-3">
                <Facebook size={16} className="shrink-0 text-blue-300" />
                <span className="break-all">{personalData.facebook.replace('https://', '')}</span>
              </div>
            )}
            {personalData.behance && (
              <div className="flex items-center gap-3">
                <Globe size={16} className="shrink-0 text-blue-300" />
                <span className="break-all">{personalData.behance.replace('https://', '')}</span>
              </div>
            )}
             {personalData.youtube && (
              <div className="flex items-center gap-3">
                <Youtube size={16} className="shrink-0 text-blue-300" />
                <span className="break-all">{personalData.youtube.replace('https://', '')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Training & Courses */}
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-2 mb-4 text-blue-100">
            {language === 'en' ? 'Training & Courses' : 'প্রশিক্ষণ ও কোর্স'}
          </h3>
          <div className="space-y-5">
            {personalData.training.map((train) => (
              <div key={train.id}>
                <h4 className="font-bold text-sm text-white">{train.title[language]}</h4>
                <p className="text-xs text-blue-200 mt-1">{train.institution[language]}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right Column - White */}
      <div className="w-2/3 p-10 flex flex-col bg-white">
        
        {/* Name and Title */}
        <div className="mb-10 pt-4">
          <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight uppercase" style={{ color: '#1E3A8A' }}>
            {personalData.name[language]}
          </h1>
          <h2 className="text-xl text-gray-600 font-medium tracking-wide uppercase">
            {personalData.professionalTitle[language]}
          </h2>
        </div>

        {/* Profile */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4 uppercase tracking-wider" style={{ color: '#1E3A8A' }}>
            {language === 'en' ? 'Profile' : 'আমার সম্পর্কে'}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            {personalData.aboutText[language]}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4 uppercase tracking-wider" style={{ color: '#1E3A8A' }}>
            {language === 'en' ? 'Experience' : 'অভিজ্ঞতা'}
          </h3>
          <div className="space-y-6">
            {personalData.experience.map((exp) => (
              <div key={exp.id} className="relative pl-4 border-l-2 border-blue-100">
                <div className="absolute w-2 h-2 bg-blue-800 rounded-full -left-[5px] top-1.5" style={{ backgroundColor: '#1E3A8A' }}></div>
                <h4 className="font-bold text-gray-900 text-base">{exp.role[language]}</h4>
                <div className="text-sm text-blue-800 font-medium mb-2 flex justify-between" style={{ color: '#1E3A8A' }}>
                  <span>{exp.company[language]}</span>
                  <span className="text-gray-500 italic text-xs">{exp.duration[language]}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">{exp.description[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-4 uppercase tracking-wider" style={{ color: '#1E3A8A' }}>
            {language === 'en' ? 'Education' : 'শিক্ষাগত যোগ্যতা'}
          </h3>
          <div className="space-y-5">
            {personalData.education.map((edu) => (
              <div key={edu.id} className="relative pl-4 border-l-2 border-blue-100">
                <div className="absolute w-2 h-2 bg-blue-800 rounded-full -left-[5px] top-1.5" style={{ backgroundColor: '#1E3A8A' }}></div>
                <h4 className="font-bold text-gray-900 text-base">{edu.degree[language]}</h4>
                {edu.institution && <p className="text-sm text-blue-800 font-medium mt-1" style={{ color: '#1E3A8A' }}>{edu.institution[language]}</p>}
                {edu.result && <p className="text-sm text-gray-600 mt-1">{edu.result[language]}</p>}
                {edu.description && <p className="text-sm text-gray-700 mt-2 text-justify">{edu.description[language]}</p>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

CVPdfTemplate.displayName = 'CVPdfTemplate';
