/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BusinessSegment } from '../types';

interface BusinessLandscapeProps {
  segments: BusinessSegment[];
  language: 'zh' | 'en';
}

export const BusinessLandscape: React.FC<BusinessLandscapeProps> = ({
  segments,
  language,
}) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  return (
    <section id="business" className="py-16 md:py-24 border-b border-neutral-900">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center justify-center gap-1.5">
          <Icons.LayoutGrid className="w-3.5 h-3.5" />
          {language === 'zh' ? '业务版图' : 'BUSINESS LANDSCAPE'}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
          {language === 'zh' ? '多元化产业板块与商业实践' : 'Multi-dimensional Business Venture & Operations'}
        </h3>
        <p className="text-neutral-400 text-sm md:text-base">
          {language === 'zh' ? '深耕实业、赋能数字化转型、链接创新资本，打造多维闭环生态' : 'Integrating solid manufacturing, advanced AI Consulting, and venture incubations for scalable impact'}
        </p>
      </div>

      {/* Business Segments Bento-Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {segments.map((segment) => {
          // Dynamic Icon matching
          const IconComponent = (Icons as any)[segment.iconName] || Icons.HelpCircle;
          const isExpanded = activeSegmentId === segment.id;

          return (
            <motion.div
              key={segment.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-neutral-800/80 p-6 md:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 ${
                isExpanded ? 'ring-2 ring-emerald-500/50 bg-neutral-900/80' : 'hover:border-neutral-700/80'
              }`}
            >
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30" />

              <div>
                {/* Segment Meta */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Icon Shield */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {/* Industry Label */}
                  <span className="px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 font-mono font-medium">
                    {segment.industry[language]}
                  </span>
                </div>

                {/* Segment Title */}
                <h4 className="text-xl font-bold text-white mb-3 font-display">
                  {segment.title[language]}
                </h4>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                  {segment.description[language]}
                </p>

                {/* Key Metrics Dashboard */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-950 border border-neutral-800/60 mb-6">
                  {segment.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center space-y-1">
                      <div className="text-lg md:text-xl font-extrabold text-white tracking-tight font-mono">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-medium leading-none">
                        {metric.label[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Toggle (Framer motion) */}
              <div className="space-y-4">
                <button
                  onClick={() => setActiveSegmentId(isExpanded ? null : segment.id)}
                  className="w-full flex items-center justify-between text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 py-1.5 transition-colors group cursor-pointer"
                >
                  <span>
                    {isExpanded
                      ? (language === 'zh' ? '收起业务亮点' : 'COLLAPSE HIGHLIGHTS')
                      : (language === 'zh' ? '查看核心业务成果' : 'VIEW CORE HIGHLIGHTS')}
                  </span>
                  <Icons.ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-cyan-300' : 'group-hover:translate-y-0.5'
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 pt-2 pb-1 border-t border-neutral-800/80 text-xs text-neutral-300 leading-relaxed">
                    {segment.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight[language]}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
