import React, { forwardRef } from 'react';
import { personalData } from '../../data/personal';

interface CVPdfTemplateProps {
  language: 'en' | 'bn';
}

export const CVPdfTemplate = forwardRef<HTMLDivElement, CVPdfTemplateProps>(({ language }, ref) => {
  return (
    <div 
      ref={ref} 
      className="bg-white text-gray-900 w-[210mm] min-h-[297mm] p-10 box-border mx-auto font-sans"
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1a202c',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Header */}
      <div className="flex items-center border-b-2 border-gray-200 pb-6 mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-accent shrink-0">
          <img 
            src="https://i.postimg.cc/cJ2CkzjV/abid.png" // Updated image
            alt={personalData.name[language]} 
            className="w-full h-full object-cover"
            crossOrigin="anonymous" // required for html2pdf rendering remote images
          />
        </div>
        <div className="ml-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 uppercase">{personalData.name[language]}</h1>
          <h2 className="text-xl text-primary-accent font-medium mb-4">{personalData.professionalTitle[language]}</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <p><strong>Email:</strong> {personalData.email}</p>
            <p><strong>Phone:</strong> {personalData.whatsapp}</p>
            <p><strong>Location:</strong> {personalData.location[language]}</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3 uppercase tracking-wider">
          {language === 'en' ? 'About Me' : 'আমার সম্পর্কে'}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {personalData.aboutText[language]}
        </p>
      </div>

      {/* Experience & Skills Split */}
      <div className="flex gap-8 mb-6">
        {/* Left Column */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3 uppercase tracking-wider">
            {language === 'en' ? 'Experience' : 'অভিজ্ঞতা'}
          </h3>
          <div className="space-y-4">
            {personalData.experience.map((exp) => (
              <div key={exp.id}>
                <h4 className="font-bold text-gray-900 text-sm">{exp.role[language]}</h4>
                <div className="text-sm text-gray-600 mb-1 flex justify-between">
                  <span>{exp.company[language]}</span>
                  <span>{exp.duration[language]}</span>
                </div>
                <p className="text-xs text-gray-700">{exp.description[language]}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3 uppercase tracking-wider mt-6">
            {language === 'en' ? 'Education' : 'শিক্ষাগত যোগ্যতা'}
          </h3>
          <div className="space-y-4">
            {personalData.education.map((edu) => (
              <div key={edu.id}>
                <h4 className="font-bold text-gray-900 text-sm">{edu.degree[language]}</h4>
                {edu.institution && <p className="text-sm text-gray-600">{edu.institution[language]}</p>}
                {edu.result && <p className="text-xs text-gray-700 mt-1">{edu.result[language]}</p>}
                {edu.description && <p className="text-xs text-gray-700 mt-1">{edu.description[language]}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3 uppercase tracking-wider">
            {language === 'en' ? 'Training & Courses' : 'প্রশিক্ষণ ও কোর্স'}
          </h3>
          <div className="space-y-4">
            {personalData.training.map((train) => (
              <div key={train.id}>
                <h4 className="font-bold text-gray-900 text-sm">{train.title[language]}</h4>
                <p className="text-sm text-gray-600">{train.institution[language]}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {train.tools?.map((tool, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3 uppercase tracking-wider mt-6">
            {language === 'en' ? 'Social Profiles' : 'সোশ্যাল প্রোফাইল'}
          </h3>
          <div className="space-y-1 text-sm text-gray-700">
            {personalData.youtube && <p><strong>YouTube:</strong> {personalData.youtube}</p>}
            {personalData.behance && <p><strong>Behance:</strong> {personalData.behance}</p>}
            {personalData.facebook && <p><strong>Facebook:</strong> {personalData.facebook}</p>}
          </div>
        </div>
      </div>

    </div>
  );
});

CVPdfTemplate.displayName = 'CVPdfTemplate';
