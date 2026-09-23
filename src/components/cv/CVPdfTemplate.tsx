import React, { forwardRef } from 'react';

interface CVPdfTemplateProps {
  language?: 'en' | 'bn';
}

/**
 * 1:1 Accurate representation of ASIF HASAN's official 1-page PDF CV
 * Matching exact fonts (Times New Roman serif), layouts, borders, alignments,
 * contact details, career objective, education, professional training, skills, training,
 * and exact references: Nazmul Huda & Borkotullah with QR code.
 */
export const CVPdfTemplate = forwardRef<HTMLDivElement, CVPdfTemplateProps>(({ language = 'en' }, ref) => {
  const isEn = language === 'en';

  return (
    <div 
      ref={ref} 
      className="box-border mx-auto flex flex-col justify-between relative select-text"
      style={{
        width: '794px',
        height: '1123px',
        minHeight: '1123px',
        maxHeight: '1123px',
        padding: '50px 58px 45px 58px',
        backgroundColor: '#ffffff',
        fontFamily: '"Times New Roman", Times, Georgia, serif',
        color: '#000000',
        lineHeight: 1.36,
        boxSizing: 'border-box',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div>
        {/* Top Header - Info on left, Passport photo on right */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            {/* Candidate Name */}
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', letterSpacing: '-0.01em', textTransform: 'uppercase', color: '#000000', margin: '0 0 6px 0', lineHeight: 1.1 }}>
              {isEn ? 'ASIF HASAN' : 'আসিফ হাসান'}
            </h1>
            
            {/* Contact Details */}
            <div style={{ fontSize: '11.5px', color: '#000000', lineHeight: 1.45 }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Email ID:' : 'ইমেইল আইডি:'}</span>{' '}
                <span>asifhasan.creative@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div>
                  <span style={{ fontWeight: 'bold' }}>{isEn ? 'Phone:' : 'ফোন:'}</span>{' '}
                  <span>01305645150</span>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>{isEn ? 'Portfolio:' : 'পোর্টফোলিও:'}</span>{' '}
                  <span>asifhasan.ai.studio</span>
                </div>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Holding No:' : 'ঠিকানা:'}</span>{' '}
                <span>{isEn ? '99, Kajibari, Satarkul, Badda, Dhaka, Bangladesh' : '৯৯, কাজিবাড়ি, সাঁতারকুল, বাড্ডা, ঢাকা, বাংলাদেশ'}</span>
              </div>
            </div>
          </div>

          {/* Profile Picture matching PDF */}
          <div style={{ width: '96px', height: '118px', border: '1px solid #9ca3af', padding: '2px', backgroundColor: '#ffffff', flexShrink: 0, overflow: 'hidden' }}>
            <img 
              src="/hero.png" 
              alt="ASIF HASAN" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* 1. CAREER OBJECTIVE */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 3px 0' }}>
            {isEn ? 'CAREER OBJECTIVE' : 'ক্যারিয়ার অবজেক্টিভ'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '6px' }} />
          <p style={{ fontSize: '11px', lineHeight: 1.42, textAlign: 'justify', color: '#000000', margin: 0 }}>
            {isEn 
              ? 'I am looking to build my career as a Video Editor and Motion Graphics Designer. I want to use my skills in Premiere Pro, After Effects, Photoshop, and Illustrator to create clean, engaging, and professional visual content. I am eager to learn, improve my skills through real-world work, and contribute to a creative team while growing professionally.'
              : 'আমি একজন ভিডিও এডিটর এবং মোশন গ্রাফিক্স ডিজাইনার হিসেবে আমার ক্যারিয়ার গড়তে আগ্রহী। প্রিমিয়ার প্রো, আফটার ইফেক্টস, ফটোশপ ও ইলাস্ট্রেটরের দক্ষতাকে কাজে লাগিয়ে মানসম্মত, আকর্ষণীয় এবং প্রফেশনাল ভিজ্যুয়াল কনটেন্ট তৈরি করতে চাই। বাস্তব কাজের মাধ্যমে নিত্যনতুন দক্ষতা অর্জন, ক্রিয়েটিভ টিমে কার্যকর অবদান এবং পেশাগত উন্নতি সাধনই আমার মূল লক্ষ্য।'}
          </p>
        </div>

        {/* 2. EDUCATION */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 3px 0' }}>
            {isEn ? 'EDUCATION' : 'শিক্ষাগত যোগ্যতা'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '6px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#000000' }}>
            <div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Takmil / Dars-e-Nizami' : 'তাকমীল / দাওরায়ে হাদিস'}</span>
                <span> — {isEn ? 'Jamia Arabia Imdadul Uloom, Faridabad' : 'জামিয়া আরাবিয়া ইমদাদুল উলুম, ফরিদাবাদ'}</span>
              </div>
              <div>
                <span>{isEn ? 'Year: 2026' : 'সাল: ২০২৬'}</span>
              </div>
            </div>

            <div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Hafez-e-Quran' : 'হাফেজ-এ-কুরআন'}</span>
                <span> — {isEn ? 'Completed' : 'সম্পন্ন'}</span>
              </div>
              <div>
                <span>{isEn ? 'Year: 2018' : 'সাল: ২০১৮'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. PROFESSIONAL TRAINING */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 3px 0' }}>
            {isEn ? 'PROFESSIONAL TRAINING' : 'প্রফেশনাল ট্রেনিং'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '6px' }} />
          <div style={{ fontSize: '11px', color: '#000000', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>
                {isEn ? 'Small Business Management Course' : 'স্মল বিজনেস ম্যানেজমেন্ট কোর্স'}
              </span>
              <span>
                {isEn 
                  ? ' — As-Sunnah Skill Development Institute, Dhaka | Duration: 3 Months | Year: 2026' 
                  : ' — আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট, ঢাকা | মেয়াদ: ৩ মাস | সাল: ২০২৬'}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Major Areas:' : 'মূল ক্ষেত্র:'}</span>{' '}
              <span>{isEn ? 'Graphic Design, Video Editing, Motion Graphics, Meta Marketing & AI Tools.' : 'গ্রাফিক ডিজাইন, ভিডিও এডিটিং, মোশন গ্রাফিক্স, মেটা মার্কেটিং ও এআই টুলস।'}</span>
            </div>
          </div>
        </div>

        {/* 4. SKILLS */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 3px 0' }}>
            {isEn ? 'SKILLS' : 'দক্ষতা'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '6px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5px', fontSize: '11px', color: '#000000', lineHeight: 1.38 }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Hard Skills:' : 'হার্ড স্কিলস:'}</span>{' '}
              <span>{isEn ? 'Skilled in Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, Video Editing, Motion Graphics, Graphic Design, Typography, Visual Design, and Social Media Content Creation.' : 'অ্যাডোবি প্রিমিয়ার প্রো, অ্যাডোবি আফটার ইফেক্টস, অ্যাডোবি ফটোশপ, অ্যাডোবি ইলাস্ট্রেটর, ভিডিও এডিটিং, মোশন গ্রাফিক্স, গ্রাফিক ডিজাইন, টাইপোগ্রাফি, ভিজ্যুয়াল ডিজাইন এবং সোশ্যাল মিডিয়া কনটেন্ট ক্রিয়েশনে দক্ষ।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Video Editing:' : 'ভিডিও এডিটিং:'}</span>{' '}
              <span>{isEn ? 'Experienced in video cutting, transitions, audio editing, color correction, text animation, B-roll integration, and social media video content.' : 'ভিডিও কাটিং, ট্রানজিশন, অডিও এডিটিং, কালার কারেকশন, টেক্সট অ্যানিমেশন, বি-রোল ইন্টিগ্রেশন এবং সোশ্যাল মিডিয়া ভিডিও কনটেন্টে অভিজ্ঞ।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Motion Graphics:' : 'মোশন গ্রাফিক্স:'}</span>{' '}
              <span>{isEn ? 'Working knowledge of motion graphics, text animation, keyframe animation, typography animation, masking, tracking, and visual effects using Adobe After Effects.' : 'অ্যাডোবি আফটার ইফেক্টসের মাধ্যমে মোশন গ্রাফিক্স, টেক্সট অ্যানিমেশন, কি-ফ্রেম অ্যানিমেশন, টাইপোগ্রাফি অ্যানিমেশন, মাস্কিং, ট্র্যাকিং এবং ভিজ্যুয়াল এফেক্টসের বাস্তব জ্ঞান।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Graphic Design:' : 'গ্রাফিক ডিজাইন:'}</span>{' '}
              <span>{isEn ? 'Capable of creating social media posts, promotional graphics, advertisements, posters, and visual content using Adobe Photoshop and Adobe Illustrator.' : 'অ্যাডোবি ফটোশপ এবং অ্যাডোবি ইলাস্ট্রেটর ব্যবহার করে সোশ্যাল মিডিয়া পোস্ট, প্রমোশনাল গ্রাফিক্স, বিজ্ঞাপন, পোস্টার এবং ভিজ্যুয়াল কনটেন্ট তৈরিতে পারদর্শী।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Generative AI Tools:' : 'জেনারেটিভ এআই টুলস:'}</span>{' '}
              <span>{isEn ? 'Familiar with ChatGPT, Google AI Studio, Gamma, NotebookLM, and other AI-assisted creative tools.' : 'ChatGPT, Google AI Studio, Gamma, NotebookLM এবং অন্যান্য এআই-অ্যাসিস্টেড ক্রিয়েটিভ টুলে পারদর্শী।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Typing Speed:' : 'টাইপিং স্পিড:'}</span>{' '}
              <span>{isEn ? 'English (30 WPM), Bangla (20 WPM).' : 'ইংরেজি (৩০ WPM), বাংলা (২০ WPM)।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Soft Skills:' : 'সফট স্কিলস:'}</span>{' '}
              <span>{isEn ? 'Creative thinking and problem solving, hard-working and goal-oriented, effective communication, time management and adaptability, teamwork & collaboration.' : 'সৃজনশীল চিন্তাভাবনা ও সমস্যা সমাধান, কঠোর পরিশ্রমী ও লক্ষ্যমুখী, কার্যকর যোগাযোগ, সময় সচেতনতা ও অভিযোজন ক্ষমতা, দলগত কাজ ও সহযোগিতা।'}</span>
            </div>
          </div>
        </div>

        {/* 5. TRAINING */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 3px 0' }}>
            {isEn ? 'TRAINING' : 'ট্রেনিং'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '6px' }} />
          <div style={{ fontSize: '11px', color: '#000000', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>
                {isEn ? 'Small Business Management Course' : 'স্মল বিজনেস ম্যানেজমেন্ট কোর্স'}
              </span>
              <span>
                {isEn 
                  ? ' — As-Sunnah Skill Development Institute | Duration: Months' 
                  : ' — আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট | মেয়াদ: মাস'}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Key Learning Areas:' : 'মূল শিক্ষণীয় বিষয়:'}</span>{' '}
              <span>
                {isEn 
                  ? 'Graphic Design, Video Editing, Motion Graphics, Microsoft Office, Generative AI Tools, Meta Marketing, and Basic Business Management.' 
                  : 'গ্রাফিক ডিজাইন, ভিডিও এডিটিং, মোশন গ্রাফিক্স, মাইক্রোসফট অফিস, জেনারেটিভ এআই টুলস, মেটা মার্কেটিং এবং বেসিক বিজনেস ম্যানেজমেন্ট।'}
              </span>
            </div>
          </div>
        </div>

        {/* 6. REFERENCE - Exactly matching PDF: Nazmul Huda, Borkotullah, and QR Code */}
        <div>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 3px 0' }}>
            {isEn ? 'REFERENCE' : 'রেফারেন্স'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '6px' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '16px', alignItems: 'flex-start', fontSize: '11px', color: '#000000' }}>
            {/* Reference 1: Nazmul Huda (5 cols) */}
            <div style={{ gridColumn: 'span 5 / span 5', lineHeight: 1.35 }}>
              <div style={{ fontWeight: 'bold' }}>Nazmul Huda</div>
              <div>Senior Trainer [ Video Editing ]</div>
              <div>As-Sunnah Skill development institute</div>
              <div>Mobile: 01571036429</div>
              <div>Email: nazmul.huda.editor@gmail.com</div>
            </div>

            {/* Reference 2: Borkotullah (5 cols) */}
            <div style={{ gridColumn: 'span 5 / span 5', lineHeight: 1.35 }}>
              <div style={{ fontWeight: 'bold' }}>Borkotullah</div>
              <div>Senior Trainer [ Graphic Design ]</div>
              <div>As-Sunnah Skill Development Institute</div>
              <div>Mobile: +880 1604-943535</div>
            </div>

            {/* QR Code (2 cols) */}
            <div style={{ gridColumn: 'span 2 / span 2', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '74px', height: '74px', border: '1px solid #9ca3af', padding: '2px', backgroundColor: '#ffffff' }}>
                <img 
                  src="/portfolio-qr.png" 
                  alt="Portfolio QR" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '8.5px', color: '#000000', marginTop: '3px', lineHeight: 1.15 }}>
                {isEn ? 'Scan to view portfolio' : 'Scan to view portfolio'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CVPdfTemplate.displayName = 'CVPdfTemplate';
