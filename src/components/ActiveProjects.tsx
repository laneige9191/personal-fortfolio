/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Radio, Tv, Building2, HeartPulse, Sparkles, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TranslationSet } from '../types';

interface ActiveProjectsProps {
  language: 'zh' | 'en';
}

interface ProjectItem {
  id: string;
  icon: any;
  title: TranslationSet;
  subtitle: TranslationSet;
  status: TranslationSet;
  location: TranslationSet;
  highlights: TranslationSet[];
  themeColor: string;
}

export function ActiveProjects({ language }: ActiveProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>('project-1');

  const text = {
    sectionTitle: { zh: '实时动态', en: 'LIVE OPERATIONS' } as TranslationSet,
    sectionHeading: { zh: '当前进行中项目', en: 'Active Engagements' } as TranslationSet,
    sectionSub: {
      zh: '前沿实操现场，通过数字化、文旅及跨境资源的跨界整合，持续输出高价值实战成果。',
      en: 'Real-time engagements integrating digital, cultural tourism, and cross-border resources to deliver tangible impact.'
    } as TranslationSet,
    badgeLive: { zh: '正在运行', en: 'LIVE FEED' } as TranslationSet,
    clickTip: { zh: '点击项目查看核心详情', en: 'Click to explore project specifics' } as TranslationSet,
  };

  const projects: ProjectItem[] = [
    {
      id: 'project-1',
      icon: Tv,
      title: {
        zh: '江苏卫视大湾区研学',
        en: 'Jiangsu TV GBA Study Tour'
      },
      subtitle: {
        zh: '主流媒体联动与大湾区青年研学精品线开发',
        en: 'Mainstream TV Media Collaboration & Youth Study Tour'
      },
      status: {
        zh: '执行中 / 方案统筹',
        en: 'Active / Directing'
      },
      location: {
        zh: '大湾区 (深圳/香港/澳门)',
        en: 'GBA (Shenzhen/HK/Macao)'
      },
      themeColor: 'from-emerald-500 to-teal-500',
      highlights: [
        { zh: '联合江苏卫视及主流媒体进行深度专题策划与文化研学推广', en: 'Partnering with Jiangsu TV to deliver premium cultural study curating' },
        { zh: '设计融合‘真现场、真问题、真收获’的大湾区科技与文化研学课程', en: 'Curating STEM & heritage programs with "Real Scenario, Real Inquiries"' },
        { zh: '对接港澳高校及大湾区头部科技企业，构建全闭环研学生态', en: 'Linking top GBA universities and tech leaders for full-lifecycle study paths' }
      ]
    },
    {
      id: 'project-2',
      icon: Building2,
      title: {
        zh: '企业参访',
        en: 'Corporate Visits'
      },
      subtitle: {
        zh: '高新科技企业与标杆产业实地考察及深度链接',
        en: 'High-Tech Enterprise Delegations & Strategic Matchmaking'
      },
      status: {
        zh: '持续开展 / 资源对接',
        en: 'Ongoing / Active Matchmaking'
      },
      location: {
        zh: '大湾区各大科技园区',
        en: 'Major Tech Parks across GBA'
      },
      themeColor: 'from-cyan-500 to-blue-500',
      highlights: [
        { zh: '组织高净值金融客户、境外考察团参访腾讯、大疆等领军企业', en: 'Organizing executive visits to industry pioneers like Tencent, DJI, etc.' },
        { zh: '深度对话企业创始人及高管，研讨企业数字化转型与实战打法', en: 'Facilitating face-to-face dialogues with executives on digital tactics' },
        { zh: '搭建粤港澳大湾区企业间跨境合作、商机共创与技术交流桥梁', en: 'Bridging cross-border technical partnerships and local integrations' }
      ]
    },
    {
      id: 'project-3',
      icon: HeartPulse,
      title: {
        zh: '大湾区医疗旅游服务中心',
        en: 'GBA Medical Tourism Service Center'
      },
      subtitle: {
        zh: '高净值跨境医疗康养与品质健康旅游服务平台',
        en: 'Premium Cross-Border Medical Wellness & Quality Health Travel'
      },
      status: {
        zh: '试运营中 / 资源导入',
        en: 'Pilot Phase / Resource Injection'
      },
      location: {
        zh: '香港 / 深圳',
        en: 'Hong Kong / Shenzhen'
      },
      themeColor: 'from-teal-400 to-cyan-500',
      highlights: [
        { zh: '整合香港顶尖私人专科医生及深圳高端康养医疗实体资源', en: 'Synthesizing top HK private healthcare experts & Shenzhen wellness spas' },
        { zh: '为高净值客群提供‘高端体检 + 跨境医疗对接 + 疗愈旅行’定制方案', en: 'Offering tailored premium diagnostics, specialist care, and leisure travel' },
        { zh: '实现全流程管家式跟进与双向绿色转诊通道，确保安心极速服务', en: 'Providing continuous multilingual white-glove concierge and fast-track care' }
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === activeTab) || projects[0];
  const CurrentIcon = currentProject.icon;

  return (
    <section id="active-projects" className="py-16 md:py-24 border-b border-neutral-900 relative">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center justify-center gap-1.5">
            {/* The blinking light / pulse */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{text.sectionTitle[language]}</span>
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            {text.sectionHeading[language]}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base">
            {text.sectionSub[language]}
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Project Selector List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            <div className="space-y-3.5">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>{text.clickTip[language]}</span>
              </div>
              
              {projects.map((proj) => {
                const IconComponent = proj.icon;
                const isActive = activeTab === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveTab(proj.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center gap-4 cursor-pointer group ${
                      isActive
                        ? 'bg-neutral-900 border-neutral-700 shadow-xl ring-1 ring-emerald-500/30'
                        : 'bg-neutral-950/40 border-neutral-800/80 hover:bg-neutral-900/60 hover:border-neutral-700/60'
                    }`}
                  >
                    {/* Active Gradient Border left strip */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProjBar"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-cyan-500"
                      />
                    )}

                    {/* Icon container */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-neutral-900 text-neutral-400 group-hover:text-neutral-200'
                      }`}
                    >
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`text-sm md:text-base font-bold truncate transition-colors duration-300 ${
                          isActive ? 'text-white font-display' : 'text-neutral-300 group-hover:text-white'
                        }`}>
                          {proj.title[language]}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-400 truncate mt-0.5">
                        {proj.subtitle[language]}
                      </p>
                    </div>

                    {/* Small action chevron */}
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                      isActive ? 'text-emerald-400 translate-x-1' : 'text-neutral-600 group-hover:text-neutral-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Status Bar */}
            <div className="p-4 rounded-2xl bg-neutral-900/30 border border-neutral-850 flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-neutral-300 uppercase tracking-wider">
                  {text.badgeLive[language]}
                </span>
              </div>
              <div className="text-[10px] text-neutral-500">
                REF_ID: GBA-ONGOING-2026
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity Detailed Project View Board (7 Columns) */}
          <div className="lg:col-span-7 rounded-3xl bg-neutral-900/40 border border-neutral-850 p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Corner Decorative Tech Mesh */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent pointer-events-none" />
            
            <div>
              {/* Detailed Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${currentProject.themeColor} bg-opacity-10 border border-emerald-500/20 flex items-center justify-center text-white`}>
                    <CurrentIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-display">
                      {currentProject.title[language]}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {currentProject.subtitle[language]}
                    </p>
                  </div>
                </div>

                {/* Status Pills */}
                <div className="flex flex-wrap gap-2 sm:self-start">
                  <span className="px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-850 text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {currentProject.status[language]}
                  </span>
                </div>
              </div>

              {/* Location Spec */}
              <div className="mb-6 flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-950/40 border border-neutral-800/60 py-2 px-3.5 rounded-xl w-max">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-neutral-300">{currentProject.location[language]}</span>
              </div>

              {/* Core Execution Highlights */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-bold block mb-1">
                  {language === 'zh' ? '项目核心规划 & 交付细节' : 'PROGRAM DELIVERABLES & OUTLINE'}
                </span>
                
                <div className="space-y-3">
                  {currentProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-neutral-950/20 border border-neutral-800/40 p-3 rounded-xl hover:border-neutral-700/40 transition-colors">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {item[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Indicator of Connection */}
            <div className="mt-8 pt-5 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500">
                ENGAGEMENT LEVEL: MAXIMUM (100%)
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-mono text-[10px]">
                <Radio className="w-3 h-3 animate-pulse" />
                {language === 'zh' ? '实时连接中' : 'LIVE CONCURRENT'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
