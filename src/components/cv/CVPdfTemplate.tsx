import React, { forwardRef } from 'react';
import { personalData } from '../../data/personal';
import { cvContent } from '../../data/cvContent';

interface CVPdfTemplateProps {
  language: 'en' | 'bn';
}

export const CVPdfTemplate = forwardRef<HTMLDivElement, CVPdfTemplateProps>(({ language }, ref) => {
  const { 
    careerObjective, 
    education, 
    professionalTraining, 
    skills, 
    contactInfo, 
    references 
  } = cvContent;

  return (
    <div 
      ref={ref} 
      className="bg-white text-black w-[210mm] min-h-[297mm] box-border mx-auto p-[14mm] sm:p-[16mm] flex flex-col justify-start shadow-xl"
      style={{
        width: '210mm',
        minHeight: '297mm',
        backgroundColor: '#ffffff',
        fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
        color: '#000000',
        lineHeight: 1.42
      }}
    >
      {/* Top Header - Info on left, Passport photo on right */}
      <div className="flex items-start justify-between gap-6 pb-2 border-b border-transparent">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight uppercase mb-2 font-serif text-black">
            {language === 'en' ? 'ASIF HASAN' : 'আসিফ হাসান'}
          </h1>
          
          <div className="space-y-0.5 text-[12.5px] text-gray-900">
            <div>
              <span className="font-bold">{language === 'en' ? 'Email ID: ' : 'ইমেইল: '}</span>
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6">
              <div>
                <span className="font-bold">{language === 'en' ? 'Phone: ' : 'ফোন: '}</span>
                <span>{contactInfo.phone}</span>
              </div>
              <div>
                <span className="font-bold">{language === 'en' ? 'Portfolio: ' : 'পোর্টফোলিও: '}</span>
                <span>{contactInfo.portfolio}</span>
              </div>
            </div>
            <div>
              <span className="font-bold">{language === 'en' ? 'Holding No: ' : 'হোল্ডিং নং: '}</span>
              <span>{contactInfo.address[language]}</span>
            </div>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-24 h-28 sm:w-26 sm:h-32 border border-gray-400 p-0.5 bg-white shrink-0 overflow-hidden shadow-sm">
          <img 
            src="/hero.png" 
            alt={personalData.name[language]} 
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* 1. CAREER OBJECTIVE */}
      <div className="mt-3">
        <h2 className="font-bold text-[13.5px] uppercase border-b border-black pb-0.5 mb-1.5 tracking-wider font-serif">
          {language === 'en' ? 'CAREER OBJECTIVE' : 'ক্যারিয়ার অবজেক্টিভ'}
        </h2>
        <p className="text-[12px] leading-relaxed text-justify text-gray-900">
          {careerObjective[language]}
        </p>
      </div>

      {/* 2. EDUCATION */}
      <div className="mt-3">
        <h2 className="font-bold text-[13.5px] uppercase border-b border-black pb-0.5 mb-1.5 tracking-wider font-serif">
          {language === 'en' ? 'EDUCATION' : 'শিক্ষাগত যোগ্যতা'}
        </h2>
        <div className="space-y-1.5 text-[12px] text-gray-900">
          {education.map((item, idx) => (
            <div key={idx}>
              <div>
                <span className="font-bold">{item.degree[language]}</span>
                <span className="font-normal"> — {item.institution[language]}</span>
              </div>
              <div className="text-[11.5px] text-gray-800">
                {language === 'en' ? 'Year: ' : 'সাল: '}{item.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PROFESSIONAL TRAINING */}
      <div className="mt-3">
        <h2 className="font-bold text-[13.5px] uppercase border-b border-black pb-0.5 mb-1.5 tracking-wider font-serif">
          {language === 'en' ? 'PROFESSIONAL TRAINING' : 'প্রফেশনাল ট্রেনিং'}
        </h2>
        <div className="text-[12px] text-gray-900 leading-relaxed">
          <div>
            <span className="font-bold">{professionalTraining.title[language]}</span>
            <span className="font-normal"> — {professionalTraining.institution[language]} | {language === 'en' ? 'Duration: ' : 'মেয়াদ: '}{professionalTraining.duration[language]} | {language === 'en' ? 'Year: ' : 'সাল: '}{professionalTraining.year}</span>
          </div>
          <div className="mt-0.5">
            <span className="font-bold">{language === 'en' ? 'Major Areas: ' : 'মূল ক্ষেত্র: '}</span>
            <span>{professionalTraining.majorAreas[language]}</span>
          </div>
        </div>
      </div>

      {/* 4. SKILLS */}
      <div className="mt-3">
        <h2 className="font-bold text-[13.5px] uppercase border-b border-black pb-0.5 mb-1.5 tracking-wider font-serif">
          {language === 'en' ? 'SKILLS' : 'দক্ষতা'}
        </h2>
        <div className="space-y-1 text-[12px] text-gray-900 leading-snug">
          <div>
            <span className="font-bold">{skills.hardSkills.title[language]}: </span>
            <span>{skills.hardSkills.content[language]}</span>
          </div>
          <div>
            <span className="font-bold">{skills.videoEditing.title[language]}: </span>
            <span>{skills.videoEditing.content[language]}</span>
          </div>
          <div>
            <span className="font-bold">{skills.motionGraphics.title[language]}: </span>
            <span>{skills.motionGraphics.content[language]}</span>
          </div>
          <div>
            <span className="font-bold">{skills.graphicDesign.title[language]}: </span>
            <span>{skills.graphicDesign.content[language]}</span>
          </div>
          <div>
            <span className="font-bold">{skills.generativeAI.title[language]}: </span>
            <span>{skills.generativeAI.content[language]}</span>
          </div>
          <div>
            <span className="font-bold">{skills.typingSpeed.title[language]}: </span>
            <span>{skills.typingSpeed[language]}</span>
          </div>
          <div>
            <span className="font-bold">{skills.softSkills.title[language]}: </span>
            <span>
              {skills.softSkills.items[language].join(', ')}.
            </span>
          </div>
        </div>
      </div>

      {/* 5. TRAINING */}
      <div className="mt-3">
        <h2 className="font-bold text-[13.5px] uppercase border-b border-black pb-0.5 mb-1.5 tracking-wider font-serif">
          {language === 'en' ? 'TRAINING' : 'ট্রেনিং'}
        </h2>
        <div className="text-[12px] text-gray-900 leading-relaxed">
          <div>
            <span className="font-bold">{professionalTraining.title[language]}</span>
            <span className="font-normal"> — As-Sunnah Skill Development Institute | {language === 'en' ? 'Duration: 3 Months' : 'মেয়াদ: ৩ মাস'}</span>
          </div>
          <div className="mt-0.5">
            <span className="font-bold">{language === 'en' ? 'Key Learning Areas: ' : 'মূল শিক্ষণীয় বিষয়: '}</span>
            <span>{professionalTraining.keyLearningAreas[language]}</span>
          </div>
        </div>
      </div>

      {/* 6. REFERENCE & QR CODE */}
      <div className="mt-3">
        <h2 className="font-bold text-[13.5px] uppercase border-b border-black pb-0.5 mb-2 tracking-wider font-serif">
          {language === 'en' ? 'REFERENCE' : 'রেফারেন্স'}
        </h2>
        <div className="grid grid-cols-12 gap-4 items-start text-[11.5px] text-gray-900">
          {/* Ref 1 */}
          <div className="col-span-5 leading-snug">
            <div className="font-bold text-[12px] text-black">{references[0].name[language]}</div>
            <div>{references[0].title[language]}</div>
            <div>{references[0].organization[language]}</div>
            <div className="mt-0.5">Mobile: {references[0].mobile}</div>
          </div>

          {/* Ref 2 */}
          <div className="col-span-4 leading-snug">
            <div className="font-bold text-[12px] text-black">{references[1].name[language]}</div>
            <div>{references[1].title[language]}</div>
            <div>Senior Facilitator</div>
            <div>As-Sunnah Skill Development Institute</div>
            <div className="mt-0.5">Mobile: {references[1].mobile}</div>
          </div>

          {/* QR Code */}
          <div className="col-span-3 flex flex-col items-center justify-center text-center">
            <div className="w-18 h-18 p-1 bg-white border border-gray-400">
              <img 
                src="/portfolio-qr.png" 
                alt="Portfolio QR" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[9.5px] text-gray-700 mt-1 font-sans">
              Scan to view portfolio
            </span>
          </div>
        </div>
      </div>

    </div>
  );
});

CVPdfTemplate.displayName = 'CVPdfTemplate';
