/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Calendar, MapPin, Globe, Sparkles } from 'lucide-react';
import { Profile, ContactInfo } from '../types';

interface ProfileSectionProps {
  profile: Profile;
  contactInfo: ContactInfo;
  language: 'zh' | 'en';
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profile,
  contactInfo,
  language,
}) => {
  // Stagger wrapper for list animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="profile" className="py-16 md:py-24 border-b border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Avatar Card & Identity Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Avatar & Key Card */}
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800/80 p-6 md:p-8 shadow-xl">
            {/* Ambient Accent light inside the card */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Avatar Image Frame */}
            <div className="relative group w-44 h-44 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-lg">
              <img
                src={profile.avatarUrl}
                alt={profile.name[language]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Name and Slogan inside Left column */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {language === 'zh' ? '接受全球业务咨询' : 'Open to Global Ventures'}
              </div>
              
              <h2 className="text-3xl font-bold text-white tracking-tight font-display">
                {profile.name[language]}
              </h2>
              
              <p className="text-sm font-semibold text-cyan-400">
                {profile.title[language]}
              </p>
            </div>

            {/* Location & Slogan Quick Specs */}
            <div className="mt-6 pt-6 border-t border-neutral-800/60 space-y-3.5 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>{contactInfo.location ? contactInfo.location[language] : 'Global'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>{language === 'zh' ? '中文 / 英文 双语' : 'Bilingual: Mandarin / English'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>{language === 'zh' ? '15+ 年文旅与研学创新' : '15+ Years Cultural Tourism Innovation'}</span>
              </div>
            </div>

            {/* Micro Tags Grid */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {profile.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-950 border border-neutral-800 text-neutral-400"
                >
                  #{tag[language]}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Slogan, Biography, & Interactive Timeline */}
        <div className="lg:col-span-7 space-y-12">
          {/* Detailed Biography Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Section Title */}
            <div className="space-y-1">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {language === 'zh' ? '个人简介' : 'BIOGRAPHY'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-display">
                {language === 'zh' ? '以创新穿越周期，打磨可落地、可传播、可复购的文旅产品。' : 'Navigating Cycles with Modular, High-Impact, and Repeatable Cultural Products'}
              </h3>
            </div>

            {/* Slogan Statement */}
            <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 italic text-neutral-200 font-serif text-xl leading-relaxed">
              "{profile.slogan[language]}"
            </blockquote>

            {/* Detailed paragraphs */}
            <div className="space-y-4 text-neutral-400 leading-relaxed text-base">
              {profile.bio.map((para, idx) => (
                <p key={idx}>{para[language]}</p>
              ))}
            </div>
          </motion.div>

          {/* Experience / Milestones Timeline */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400" />
              {language === 'zh' ? '职业核心履历' : 'Professional Milestones'}
            </h4>

            {/* Animated Timeline Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="relative pl-6 border-l border-neutral-800 space-y-8"
            >
              {profile.milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Outer point indicator */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-neutral-950 flex items-center justify-center transition-all group-hover:scale-125 group-hover:bg-emerald-500 duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>

                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 mb-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{milestone.year}</span>
                  </div>

                  {/* Title */}
                  <h5 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {milestone.title[language]}
                  </h5>

                  {/* Description */}
                  <p className="mt-1 text-sm text-neutral-400 leading-relaxed max-w-xl">
                    {milestone.description[language]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
