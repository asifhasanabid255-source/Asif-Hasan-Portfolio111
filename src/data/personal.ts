import { PersonalData } from '../types';

export const personalData: PersonalData = {
  name: {
    en: 'ASIF HASAN',
    bn: 'আসিফ হাসান',
  },
  professionalTitle: {
    en: 'Video Editor | Motion Graphics Designer | Graphic Designer',
    bn: 'ভিডিও এডিটর | মোশন গ্রাফিক্স ডিজাইনার | গ্রাফিক ডিজাইনার',
  },
  profilePhoto: '/placeholder-profile.jpg', // Placeholder
  aboutText: {
    en: 'I’m Asif Hasan, a creative professional focused on video editing, motion graphics and graphic design. I enjoy turning ideas and information into clear, engaging and visually appealing content. I’m continuously improving my creative and technical skills to produce professional work for businesses, organizations and digital platforms.',
    bn: 'আমি আসিফ হাসান। ভিডিও এডিটিং, মোশন গ্রাফিক্স ও গ্রাফিক ডিজাইনে আগ্রহী একজন ক্রিয়েটিভ প্রফেশনাল। বিভিন্ন ধারণা ও তথ্যকে পরিষ্কার, আকর্ষণীয় এবং দৃষ্টিনন্দন ভিজ্যুয়াল কনটেন্টে রূপ দিতে আমি কাজ করি। ব্যবসা, প্রতিষ্ঠান ও ডিজিটাল প্ল্যাটফর্মের জন্য আরও প্রফেশনাল কাজ করার লক্ষ্যে আমি নিয়মিত আমার সৃজনশীল ও টেকনিক্যাল দক্ষতা উন্নত করছি।',
  },
  email: 'asifhasan.creative@gmail.com',
  whatsapp: '+8801305645150',
  linkedin: '[Add later]',
  youtube: 'https://www.youtube.com/channel/UCZsLHtMPe6H0gIyhfwvIdRQ',
  behance: 'https://www.behance.net/asifhasan78',
  facebook: 'https://www.facebook.com/profile.php?id=61592503171372',
  location: {
    en: 'Singair, Manikganj, Dhaka, Bangladesh',
    bn: 'সিঙ্গাইর, মানিকগঞ্জ, ঢাকা, বাংলাদেশ',
  },
  availability: {
    en: 'Available for New Projects',
    bn: 'নতুন প্রজেক্টের জন্য উন্মুক্ত',
  },
  education: [
    {
      id: 'edu-1',
      degree: {
        en: 'Takmil / Dars-e-Nizami',
        bn: 'তাকমিল / দরসে নিজামী'
      },
      institution: {
        en: 'Jamia Arabia Imdadul Uloom, Faridabad',
        bn: 'জামিয়া আরাবিয়া ইমদাদুল উলুম, ফরিদাবাদ'
      },
      year: '2026',
      result: {
        en: 'Completed',
        bn: 'সম্পন্ন'
      }
    },
    {
      id: 'edu-2',
      degree: {
        en: 'Hafez-e-Quran',
        bn: 'হাফেজ-এ-কুরআন'
      },
      institution: {
        en: 'Completed',
        bn: 'সম্পন্ন'
      },
      year: '2018',
      result: {
        en: 'Completed',
        bn: 'সম্পন্ন'
      },
      description: {
        en: 'Completed memorization of the Holy Quran.',
        bn: 'পবিত্র কুরআন হিফজ সম্পন্ন করেছি।'
      }
    }
  ],
  experience: [
    // Clean placeholder entry
    {
      id: 'exp-placeholder',
      role: {
        en: 'Professional Experience',
        bn: 'পেশাগত অভিজ্ঞতা'
      },
      company: {
        en: 'Details to be added',
        bn: 'বিস্তারিত পরে যোগ করা হবে'
      },
      duration: {
        en: '[Add later]',
        bn: '[পরে যোগ করা হবে]'
      },
      description: {
        en: 'Hands-on creative work developed through training, educational initiatives, community projects and personal portfolio practice.',
        bn: 'প্রশিক্ষণ, শিক্ষামূলক উদ্যোগ, কমিউনিটি প্রজেক্ট এবং ব্যক্তিগত পোর্টফোলিও অনুশীলনের মাধ্যমে অর্জিত বাস্তব কাজের অভিজ্ঞতা।'
      }
    }
  ],
  training: [
    {
      id: 'train-1',
      title: {
        en: 'Small Business Management Course',
        bn: 'স্মল বিজনেস ম্যানেজমেন্ট কোর্স'
      },
      institution: {
        en: 'As-Sunnah Skill Development Institute',
        bn: 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট'
      },
      year: '2026',
      areas: {
        en: [
          'Graphic Design',
          'Video Editing',
          'Motion Graphics',
          'Meta Marketing',
          'AI & Creative Technology'
        ],
        bn: [
          'গ্রাফিক ডিজাইন',
          'ভিডিও এডিটিং',
          'মোশন গ্রাফিক্স',
          'মেটা মার্কেটিং',
          'এআই ও ক্রিয়েটিভ টেকনোলজি'
        ]
      },
      tools: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere Pro',
        'Adobe After Effects',
        'Google AI Studio',
        'Google Flow',
        'Gemini Canvas',
        'Gamma',
        'GitHub',
        'Vercel'
      ]
    }
  ],
  certificates: [
    {
      id: 'cert-1',
      title: {
        en: 'Small Business Management Course',
        bn: 'স্মল বিজনেস ম্যানেজমেন্ট কোর্স'
      },
      issuer: {
        en: 'As-Sunnah Skill Development Institute',
        bn: 'আস-সুন্নাহ স্কিল ডেভেলপমেন্ট ইনস্টিটিউট'
      },
      year: '2026',
      areas: {
        en: [
          'Graphic Design',
          'Video Editing',
          'Motion Graphics',
          'Meta Marketing',
          'AI & Creative Technology'
        ],
        bn: [
          'গ্রাফিক ডিজাইন',
          'ভিডিও এডিটিং',
          'মোশন গ্রাফিক্স',
          'মেটা মার্কেটিং',
          'এআই ও ক্রিয়েটিভ টেকনোলজি'
        ]
      },
      status: {
        en: 'Completed',
        bn: 'সম্পন্ন'
      }
    }
  ],
  cv: {
    en: '',
    bn: ''
  }
};
