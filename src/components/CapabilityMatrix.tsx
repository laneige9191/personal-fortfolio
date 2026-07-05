/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0].id);

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  const handleCategoryClick = (id: string) => {
    setActiveCategoryId(id);
  };

  return (
    <section id="capabilities" className="py-16 md:py-24 border-b border-neutral-900">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-xl space-y-3">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
            <Icons.Layers className="w-3.5 h-3.5" />
            {language === 'zh' ? '能力矩阵' : 'CAPABILITY MATRIX'}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            {language === 'zh' ? '深度复合型核心胜任力' : 'Professional Core Competencies'}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base">
            {language === 'zh' ? '横跨战略规划、工程设计与增长变现的多元化技能组合，赋能高成长期企业' : 'Strategic, technological, and growth expert offering end-to-end consulting for market leaders'}
          </p>
        </div>

        {/* Legend Indicator */}
        <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 rounded-full bg-cyan-500" />
            <span>{language === 'zh' ? '实战专家 (85-90)' : 'Expert Practitioner (85-90)'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 rounded-full bg-emerald-400" />
            <span>{language === 'zh' ? '行业领袖 (90+)' : 'Industry Standard (90+)'}</span>
          </div>
        </div>
      </div>

      {/* Grid Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Columns: Tabs list */}
        <div className="lg:col-span-5 space-y-4">
          {categories.map((category) => {
            const IconComp = (Icons as any)[category.iconName] || Icons.Shield;
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 border-neutral-700 shadow-xl'
                    : 'bg-neutral-950 border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-800'
                }`}
              >
                {/* Active Indicator Strip */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500"
                  />
                )}

                {/* Left Category Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-neutral-900 text-neutral-400'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Text Block */}
                <div className="space-y-1">
                  <h4 className={`font-bold transition-colors ${isActive ? 'text-white font-display' : 'text-neutral-300'}`}>
                    {category.name[language]}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {category.description[language]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Columns: Animated Proficiency Meters */}
        <div className="lg:col-span-7 rounded-3xl bg-neutral-900/50 border border-neutral-850 p-6 md:p-8 shadow-xl relative min-h-[400px]">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
            {language === 'zh' ? '指标效能分析' : 'QUANTIFIED EFFICIENCY'}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category Brief Header */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400">
                  {language === 'zh' ? '当前关注版块 / MODULE BRIEF' : 'ACTIVE MODULE BRIEF'}
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                  {activeCategory.description[language]}
                </p>
              </div>

              {/* Skills Proficiency List */}
              <div className="space-y-6">
                {activeCategory.skills.map((skill, index) => {
                  const isGoldLevel = skill.level >= 90;

                  return (
                    <div key={index} className="space-y-2">
                      {/* Name & Percentage Label */}
                      <div className="flex justify-between items-end">
                        <span className="text-base font-semibold text-white">
                          {skill.name[language]}
                        </span>
                        <span
                          className={`font-mono text-sm font-extrabold ${
                            isGoldLevel ? 'text-emerald-400' : 'text-cyan-400'
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full rounded-full bg-neutral-950 overflow-hidden border border-neutral-800/50">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            isGoldLevel
                              ? 'from-emerald-500 to-teal-400'
                              : 'from-cyan-500 to-teal-400'
                          }`}
                        />
                      </div>

                      {/* Detail description */}
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {skill.description[language]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
