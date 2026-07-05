/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CapabilityCategory } from '../types';

interface CapabilityMatrixProps {
  categories: CapabilityCategory[];
  language: 'zh' | 'en';
}

export const CapabilityMatrix: React.FC<CapabilityMatrixProps> = ({
  categories,
  language,
}) => {
  return (
    <section id="capabilities" className="py-16 md:py-24 border-b border-neutral-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
            <Icons.Layers className="w-3.5 h-3.5" />
            {language === 'zh' ? '核心能力' : 'CORE CAPABILITIES'}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            {language === 'zh' ? '把资源、现场与交付串成产品' : 'Turning Resources, Sites, and Delivery into Products'}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            {language === 'zh'
              ? '去掉模板化评分，用更清晰的能力组呈现我在研学产品、跨境资源、人文审美与项目交付上的工作方法。'
              : 'A concise view of the working capabilities behind study-tour products, cross-border resources, cultural aesthetics, and on-site delivery.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        {categories.map((category, index) => {
          const IconComp = (Icons as any)[category.iconName] || Icons.Shield;

          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl bg-neutral-900/45 border border-neutral-800/80 p-5 md:p-6 shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <IconComp className="w-5.5 h-5.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    {category.name.en}
                  </span>
                  <h4 className="text-xl font-bold text-white font-display mt-1">
                    {category.name[language]}
                  </h4>
                </div>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={`${skill.name.zh}-${skill.name.en}`}
                    className="flex items-start gap-3 rounded-xl bg-neutral-950/35 border border-neutral-800/60 px-3.5 py-3"
                  >
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-neutral-100">
                        {skill.name[language]}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                        {skill.name.en}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
