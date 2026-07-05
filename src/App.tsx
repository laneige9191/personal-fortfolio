/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sliders,
  ArrowRight,
  Sparkles,
  Award,
  Briefcase,
  Layers,
  Mail,
  ChevronRight,
} from 'lucide-react';

import { Profile, ContactInfo, TranslationSet } from './types';
import {
  defaultProfile,
  defaultBusinessSegments,
  defaultCapabilityCategories,
  defaultContactInfo,
} from './data';

import { ProfileSection } from './components/ProfileSection';
import { BusinessLandscape } from './components/BusinessLandscape';
import { CapabilityMatrix } from './components/CapabilityMatrix';
import { ContactSection } from './components/ContactSection';
import { CustomizerPanel } from './components/CustomizerPanel';

export default function App() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load custom data from localStorage if exists
  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem('personal_profile');
      const storedContact = localStorage.getItem('personal_contact');
      if (storedProfile) {
        const parsedProfile = JSON.parse(storedProfile);
        // Ensure the latest avatar URL from the template/data.ts is always used
        parsedProfile.avatarUrl = defaultProfile.avatarUrl;
        const cachedTitle = `${parsedProfile.title?.zh || ''} ${parsedProfile.title?.en || ''}`;
        if (/专家|Specialist|Expert/i.test(cachedTitle)) {
          parsedProfile.title = defaultProfile.title;
          localStorage.setItem('personal_profile', JSON.stringify(parsedProfile));
        }
        setProfile(parsedProfile);
      }
      if (storedContact) {
        setContactInfo(JSON.parse(storedContact));
      }
    } catch (e) {
      console.error('Error reading localStorage configurations', e);
    }

    // Header scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdate = (updatedProfile: Profile, updatedContact: ContactInfo) => {
    setProfile(updatedProfile);
    setContactInfo(updatedContact);
    try {
      localStorage.setItem('personal_profile', JSON.stringify(updatedProfile));
      localStorage.setItem('personal_contact', JSON.stringify(updatedContact));
    } catch (e) {
      console.error('Error writing to localStorage', e);
    }
  };

  const handleReset = () => {
    setProfile(defaultProfile);
    setContactInfo(defaultContactInfo);
    try {
      localStorage.removeItem('personal_profile');
      localStorage.removeItem('personal_contact');
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const text = {
    heroTag: { zh: '文旅与研学产品人', en: 'CULTURAL TOURISM PRODUCT BUILDER' } as TranslationSet,
    heroTitleLead: { zh: '连接深港、海外华人与', en: 'Connecting Shenzhen-HK,' } as TranslationSet,
    heroTitleEnd: { zh: '中国文化现场', en: 'Overseas Chinese Communities & Chinese Heritage' } as TranslationSet,
    heroSub: { zh: '我以文旅和研学为载体，整合深港跨境、海外社群、产业参访与文化现场资源，设计可落地、可传播、可复购的深度体验产品。', en: 'I build study-tour and cultural travel products that connect Shenzhen-HK resources, overseas communities, industry visits, and living cultural contexts into executable, memorable experiences.' } as TranslationSet,
    heroContactBtn: { zh: '联络合作', en: 'Connect' } as TranslationSet,
    heroPortfolioBtn: { zh: '查看核心服务', en: 'Explore Services' } as TranslationSet,
    customizerTip: { zh: '配置您的网站', en: 'Personalize App' } as TranslationSet,
    navProfile: { zh: '个人简介', en: 'Bio' } as TranslationSet,
    navBusiness: { zh: '核心服务', en: 'Services' } as TranslationSet,
    navCapabilities: { zh: '核心能力', en: 'Capabilities' } as TranslationSet,
    navContact: { zh: '联络通道', en: 'Contact' } as TranslationSet,
    footerNote: { zh: '本站所有业务板块为真实项目经验整合。欢迎基于定制面板修改为您个人专属的专业履历。', en: 'Synthesized from actual business ventures. Personalize with your own name & contact details via the gear panel!' } as TranslationSet,
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden selection:bg-emerald-600 selection:text-white font-sans">
      {/* Absolute Dynamic Ambient Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[400px] left-10 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* STICKY HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-900/60 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-left focus:outline-none"
          >
            <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1 font-display">
              {profile.name[language]}
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/40 border border-neutral-800/40 px-2 py-1 rounded-full backdrop-blur-sm">
            <button
              onClick={() => handleScrollTo('profile')}
              className="px-4 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white rounded-full hover:bg-neutral-800/50 transition-all"
            >
              {text.navProfile[language]}
            </button>
            <button
              onClick={() => handleScrollTo('business')}
              className="px-4 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white rounded-full hover:bg-neutral-800/50 transition-all"
            >
              {text.navBusiness[language]}
            </button>
            <button
              onClick={() => handleScrollTo('capabilities')}
              className="px-4 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white rounded-full hover:bg-neutral-800/50 transition-all"
            >
              {text.navCapabilities[language]}
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-4 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white rounded-full hover:bg-neutral-800/50 transition-all"
            >
              {text.navContact[language]}
            </button>
          </nav>

          {/* Interactive Actions Header Side */}
          <div className="flex items-center gap-3">
            {/* Customizer Slider Gear Button */}
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-neutral-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02]"
              title="Personalize"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-bold">{text.customizerTip[language]}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER SECTION */}
      <section className="relative pt-28 pb-14 md:pt-48 md:pb-28 border-b border-neutral-900 overflow-hidden">
        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 md:space-y-8">
          {/* Animated welcome tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono tracking-widest text-emerald-400 uppercase"
          >
            <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>{text.heroTag[language]}</span>
          </motion.div>

          {/* Heading with color gradient */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.55rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] font-display"
            >
              <span>{text.heroTitleLead[language]}</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {text.heroTitleEnd[language]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-300/85 text-[15px] sm:text-lg md:text-xl max-w-2xl mx-auto leading-7 md:leading-relaxed"
            >
              {text.heroSub[language]}
            </motion.p>
          </div>

          {/* Direct CTA Navigation Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 text-neutral-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer"
            >
              <span>{text.heroContactBtn[language]}</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
            <button
              onClick={() => handleScrollTo('business')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{text.heroPortfolioBtn[language]}</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CORE DISPLAY SECTIONS CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECT 1: PERSONAL PROFILE (个人简介) */}
        <ProfileSection profile={profile} contactInfo={contactInfo} language={language} />
        {/* SECT 2: CORE SERVICES */}
        <BusinessLandscape segments={defaultBusinessSegments} language={language} />

        {/* SECT 3: CORE CAPABILITIES */}
        <CapabilityMatrix categories={defaultCapabilityCategories} language={language} />

        {/* SECT 4: CONTACT NETWORK (联系方式) */}
        <ContactSection contactInfo={contactInfo} language={language} />

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-sm font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-1 font-display">
              {profile.name[language]}
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
              {text.footerNote[language]}
            </p>
          </div>

          <div className="space-y-2 font-mono text-xs text-neutral-600">
            <div>
              &copy; {new Date().getFullYear()} {profile.name[language]}. All Rights Reserved.
            </div>
            <div>
              Designed & Built with React · Tailwind · Motion
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING CUSTOMIZER PANEL */}
      <CustomizerPanel
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        contactInfo={contactInfo}
        onUpdate={handleUpdate}
        onReset={handleReset}
        language={language}
      />
    </div>
  );
}
