import React, { forwardRef } from 'react';

interface CVPdfTemplateProps {
  language?: 'en' | 'bn';
}

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
        padding: '54px 62px',
        backgroundColor: '#ffffff',
        fontFamily: '"Times New Roman", Times, Georgia, serif',
        color: '#000000',
        lineHeight: 1.4,
        boxSizing: 'border-box',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div>
        {/* Top Header - Info on left, Passport photo on right */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            {/* Candidate Name */}
            <h1 style={{ fontSize: '26px', fontWeight: 'bold', letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#000000', margin: '0 0 4px 0', lineHeight: 1.1 }}>
              {isEn ? 'ASIF HASAN' : 'আসিফ হাসান'}
            </h1>
            
            {/* Contact Details */}
            <div style={{ fontSize: '12px', color: '#000000', marginTop: '4px', lineHeight: 1.45 }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Email ID:' : 'ইমেইল:'}</span>{' '}
                <span>asifhasan.creative@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
                <span>{isEn ? '99, Kajibari, Satarkul, Badda, Dhaka, Bangladesh' : 'হোল্ডিং নং: ৯৯, কাজিবাড়ি, সাঁতারকুল, বাড্ডা, ঢাকা, বাংলাদেশ'}</span>
              </div>
            </div>
          </div>

          {/* Profile Picture - Crisp 35mm x 45mm ratio matching PDF exactly */}
          <div style={{ width: '92px', height: '115px', border: '1px solid #d1d5db', padding: '2px', backgroundColor: '#ffffff', flexShrink: 0, overflow: 'hidden' }}>
            <img 
              src="/hero.png" 
              alt="ASIF HASAN" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* 1. CAREER OBJECTIVE */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 2px 0' }}>
            {isEn ? 'CAREER OBJECTIVE' : 'ক্যারিয়ার অবজেক্টিভ'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '8px' }} />
          <p style={{ fontSize: '11.5px', lineHeight: 1.48, textAlign: 'justify', color: '#000000', margin: 0 }}>
            {isEn 
              ? 'I am looking to build my career as a Video Editor and Motion Graphics Designer. I want to use my skills in Premiere Pro, After Effects, Photoshop, and Illustrator to create clean, engaging, and professional visual content. I am eager to learn, improve my skills through real-world work, and contribute to a creative team while growing professionally.'
              : 'আমি একজন ভিডিও এডিটর এবং মোশন গ্রাফিক্স ডিজাইনার হিসেবে আমার ক্যারিয়ার গড়তে আগ্রহী। প্রিমিয়ার প্রো, আফটার ইফেক্টস, ফটোশপ ও ইলাস্ট্রেটরের দক্ষতাকে কাজে লাগিয়ে মানসম্মত, আকর্ষণীয় এবং প্রফেশনাল ভিজ্যুয়াল কনটেন্ট তৈরি করতে চাই। বাস্তব কাজের মাধ্যমে নিত্যনতুন দক্ষতা অর্জন, ক্রিয়েটিভ টিমে কার্যকর অবদান এবং পেশাগত উন্নতি সাধনই আমার মূল লক্ষ্য।'}
          </p>
        </div>

        {/* 2. EDUCATION */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 2px 0' }}>
            {isEn ? 'EDUCATION' : 'শিক্ষাগত যোগ্যতা'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '8px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11.5px', color: '#000000' }}>
            <div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Takmil / Dars-e-Nizami' : 'তাকমীল / দাওরায়ে হাদিস'}</span>
                <span> — {isEn ? 'Jamia Arabia Imdadul Uloom, Faridabad' : 'জামিয়া আরাবিয়া ইমদাদুল উলুম, ফরিদাবাদ'}</span>
              </div>
              <div style={{ color: '#111827' }}>
                <span>{isEn ? 'Year: 2026' : 'সাল: ২০২৬'}</span>
              </div>
            </div>

            <div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{isEn ? 'Hafez-e-Quran' : 'হাফেজ-এ-কুরআন'}</span>
                <span> — {isEn ? 'Completed' : 'সম্পন্ন'}</span>
              </div>
              <div style={{ color: '#111827' }}>
                <span>{isEn ? 'Year: 2018' : 'সাল: ২০১৮'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. PROFESSIONAL TRAINING */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 2px 0' }}>
            {isEn ? 'PROFESSIONAL TRAINING' : 'প্রফেশনাল ট্রেনিং'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '8px' }} />
          <div style={{ fontSize: '11.5px', color: '#000000', display: 'flex', flexDirection: 'column', gap: '3px' }}>
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
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 2px 0' }}>
            {isEn ? 'SKILLS' : 'দক্ষতা'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '8px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '11.5px', color: '#000000', lineHeight: 1.42 }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Hard Skills:' : 'হার্ড স্কিলস:'}</span>{' '}
              <span>{isEn ? 'Skilled in Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, Video Editing, Motion Graphics, Graphic Design, Typography, Visual Design, and Social Media Content Creation.' : 'অ্যাডোবি প্রিমিয়ার প্রো, অ্যাডোবি আফটার ইফেক্টস, অ্যাডোবি ফটোশপ, অ্যাডোবি ইলাস্ট্রেটর, ভিডিও এডিটিং, মোশন গ্রাফিক্স, গ্রাফিক ডিজাইন, টাইপোগ্রাফি, ভিজ্যুয়াল ডিজাইন এবং সোশ্যাল মিডিয়া কনটেন্ট ক্রিয়েশন।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Video Editing:' : 'ভিডিও এডিটিং:'}</span>{' '}
              <span>{isEn ? 'Experienced in video cutting, transitions, audio editing, color correction, text animation, B-roll integration, and social media video content.' : 'ভিডিও কাটিং, ট্রানজিশন, অডিও এডিটিং, কালার কারেকশন, টেক্সট অ্যানিমেশন, বি-রোল ইন্টিগ্রেশন এবং সোশ্যাল মিডিয়া ভিডিও কনটেন্ট তৈরিতে দক্ষ।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Motion Graphics:' : 'মোশন গ্রাফিক্স:'}</span>{' '}
              <span>{isEn ? 'Working knowledge of motion graphics, text animation, keyframe animation, typography animation, masking, tracking, and visual effects using Adobe After Effects.' : 'অ্যাডোবি আফটার ইফেক্টসের মাধ্যমে মোশন গ্রাফিক্স, টেক্সট অ্যানিমেশন, কিফ্রেম অ্যানিমেশন, টাইপোগ্রাফি অ্যানিমেশন, মাস্কিং, ট্র্যাকিং এবং ভিজ্যুয়াল ইফেক্টসের বাস্তব অভিজ্ঞতা।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Graphic Design:' : 'গ্রাফিক ডিজাইন:'}</span>{' '}
              <span>{isEn ? 'Capable of creating social media posts, promotional graphics, advertisements, posters, and visual content using Adobe Photoshop and Adobe Illustrator.' : 'অ্যাডোবি ফটোশপ ও ইলাস্ট্রেটর দিয়ে সোশ্যাল মিডিয়া পোস্ট, প্রমোশনাল গ্রাফিক্স, বিজ্ঞাপন, পোস্টার এবং আকর্ষণীয় ভিজ্যুয়াল কনটেন্ট তৈরিতে পারদর্শী।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Generative AI Tools:' : 'জেনারেটিভ এআই টুলস:'}</span>{' '}
              <span>{isEn ? 'Familiar with ChatGPT, Google AI Studio, Gamma, NotebookLM, and other AI-assisted creative tools.' : 'ChatGPT, Google AI Studio, Gamma, NotebookLM সহ বিভিন্ন আধুনিক কৃত্রিম বুদ্ধিমত্তা সম্পন্ন ক্রিয়েটিভ টুলের ব্যবহারে দক্ষ।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Typing Speed:' : 'টাইপিং স্পিড:'}</span>{' '}
              <span>{isEn ? 'English (30 WPM), Bangla (20 WPM).' : 'ইংরেজি (৩০ WPM), বাংলা (২০ WPM)।'}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Soft Skills:' : 'সফট স্কিলস:'}</span>{' '}
              <span>{isEn ? 'Creative thinking and problem solving, hard-working and goal-oriented, effective communication, time management and adaptability, teamwork & collaboration.' : 'সৃজনশীল চিন্তা ও সমস্যা সমাধান, পরিশ্রমী ও লক্ষ্যনিষ্ঠ, কার্যকর যোগাযোগ দক্ষতা, সময় সচেতনতা ও অভিযোজন ক্ষমতা, টিমওয়ার্ক ও দলগত সমন্বয়।'}</span>
            </div>
          </div>
        </div>

        {/* 5. TRAINING */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 2px 0' }}>
            {isEn ? 'TRAINING' : 'ট্রেনিং'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '8px' }} />
          <div style={{ fontSize: '11.5px', color: '#000000', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>
                {isEn ? 'Small Business Management Course' : 'স্মল বিজনেস ম্যানেজমেন্ট কোর্স'}
              </span>
              <span>
                {isEn 
                  ? ' — As-Sunnah Skill Development Institute | Duration: 3 Months' 
                  : ' — আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট | মেয়াদ: ৩ মাস'}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>{isEn ? 'Key Learning Areas:' : 'শিক্ষণীয় বিষয়সমূহ:'}</span>{' '}
              <span>
                {isEn 
                  ? 'Graphic Design, Video Editing, Motion Graphics, Microsoft Office, Generative AI Tools, Meta Marketing, and Basic Business Management.' 
                  : 'গ্রাফিক ডিজাইন, ভিডিও এডিটিং, মোশন গ্রাফিক্স, মাইক্রোসফট অফিস, জেনারেটিভ এআই টুলস, মেটা মার্কেটিং এবং বেসিক বিজনেস ম্যানেজমেন্ট।'}
              </span>
            </div>
          </div>
        </div>

        {/* 6. REFERENCE */}
        <div>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000', margin: '0 0 2px 0' }}>
            {isEn ? 'REFERENCE' : 'রেফারেন্স'}
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#000000', marginBottom: '8px' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '12px', alignItems: 'flex-start', fontSize: '11.5px', color: '#000000' }}>
            {/* Reference 1 (45%) */}
            <div style={{ gridColumn: 'span 5 / span 5', lineHeight: 1.38 }}>
              <div style={{ fontWeight: 'bold' }}>{isEn ? 'Borkotullah' : 'বরকতুল্লাহ'}</div>
              <div>{isEn ? 'Graphic Design Instructor' : 'গ্রাফিক ডিজাইন প্রশিক্ষক'}</div>
              <div>{isEn ? 'Senior Facilitator, As-Sunnah Skill Development Institute' : 'সিনিয়র ফ্যাসিলিটেটর, আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট'}</div>
              <div>{isEn ? 'Mobile: +880 1604-943535' : 'মোবাইল: +৮৮০ ১৬০৪-৯৪৩৫৩৫'}</div>
            </div>

            {/* Reference 2 (45%) */}
            <div style={{ gridColumn: 'span 5 / span 5', lineHeight: 1.38 }}>
              <div style={{ fontWeight: 'bold' }}>{isEn ? 'Mohammad Jabed Omar Jisan' : 'মোহাম্মদ জাবেদ ওমর জিসান'}</div>
              <div>{isEn ? 'Video Editing Instructor' : 'ভিডিও এডিটিং প্রশিক্ষক'}</div>
              <div>{isEn ? 'Senior Facilitator' : 'সিনিয়র ফ্যাসিলিটেটর'}</div>
              <div>{isEn ? 'As-Sunnah Skill Development Institute' : 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট'}</div>
              <div>{isEn ? 'Mobile: +880 1991-776651' : 'মোবাইল: +৮৮০ ১৯৯১-৭৭৬৬৫১'}</div>
            </div>

            {/* QR Code (10%) */}
            <div style={{ gridColumn: 'span 2 / span 2', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '76px', height: '76px', border: '1px solid #d1d5db', padding: '2px', backgroundColor: '#ffffff' }}>
                <img 
                  src="/portfolio-qr.png" 
                  alt="Portfolio QR" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '9px', color: '#000000', marginTop: '4px', lineHeight: 1.2 }}>
                {isEn ? 'Scan to view portfolio' : 'পোর্টফোলিও দেখতে স্ক্যান করুন'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CVPdfTemplate.displayName = 'CVPdfTemplate';
