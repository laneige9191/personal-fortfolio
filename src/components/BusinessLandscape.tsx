/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 85, damping: 16 } },
  };

  return (
    <section id="business" className="py-16 md:py-24 border-b border-neutral-900">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center justify-center gap-1.5">
          <Icons.LayoutGrid className="w-3.5 h-3.5" />
          {language === 'zh' ? '核心服务' : 'CORE SERVICES'}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
          {language === 'zh' ? '我能交付什么' : 'What I Deliver'}
        </h3>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          {language === 'zh'
            ? '围绕深港、大湾区与海外社群，提供从策划、资源到现场交付的一体化文旅研学服务。'
            : 'Integrated cultural tourism and study-tour services across Shenzhen-HK, the Greater Bay Area, and overseas communities.'}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {segments.map((segment) => {
          const IconComponent = (Icons as any)[segment.iconName] || Icons.HelpCircle;
          const audience = segment.metrics[0];

          return (
            <motion.article
              key={segment.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl bg-neutral-900/45 border border-neutral-800/80 p-5 md:p-6 shadow-xl transition-colors hover:border-neutral-700/80"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30" />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    {segment.industry.en}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1 font-display">
                    {segment.title[language]}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {segment.description[language]}
              </p>

              <div className="space-y-4">
                {audience && (
                  <div className="rounded-xl bg-neutral-950/35 border border-neutral-800/60 p-3.5">
                    <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-2">
                      {audience.label[language]}
                    </div>
                    <div className="text-sm text-neutral-200 leading-relaxed">
                      {audience.value}
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-3">
                    {language === 'zh' ? '核心价值' : 'CORE VALUE'}
                  </div>
                  <ul className="space-y-2.5">
                    {segment.highlights.map((highlight) => (
                      <li
                        key={`${segment.id}-${highlight.zh}`}
                        className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed"
                      >
                        <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};
