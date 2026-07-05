/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Profile, BusinessSegment, CapabilityCategory, ContactInfo } from './types';

export const defaultProfile: Profile = {
  name: {
    zh: '于丽娜',
    en: 'Luna Yu',
  },
  title: {
    zh: '香港永顺旅行社总经理 · 跨境文旅与研学知行合一的产品人',
    en: 'General Manager of WT Travel HK · Practice-Oriented Cultural Tourism Product Builder',
  },
  slogan: {
    zh: '有研学，真问题、真现场、真收获',
    en: 'Real Programs, Real Issues, Real Scenarios, Real Gains',
  },
  avatarUrl: '/images/luna-yu-avatar-professional.png',
  bio: [
    {
      zh: '我是于丽娜，长期深耕跨境文旅、研学产品与商务接待，现任香港永顺旅行社总经理，并创立多家文旅与文化交流机构。我的工作，是把产业资源、城市现场、文化内容与客户需求，转化为可落地、可体验、可延展的文旅产品。',
      en: 'I am Luna Yu, a cross-border cultural tourism and study travel product builder, and General Manager of Hong Kong Wing Shun Travel. My work translates industry resources, city contexts, cultural content, and client needs into executable, experiential, and scalable travel products.',
    },
    {
      zh: '我主要服务企业、高校、商协会、海外团组、高净值客户与华人家庭，产品涵盖企业参访、商务接待、文旅研学、非遗文化体验、海外华人寻根、跨境康养与医疗旅行等方向。',
      en: 'I serve enterprises, universities, chambers of commerce, overseas delegations, high-net-worth clients, and Chinese families abroad through corporate visits, business hospitality, study travel, heritage experiences, diaspora homecoming journeys, wellness programs, and medical travel support.',
    },
    {
      zh: '我坚持“有研学，真问题、真现场、真收获”。一条好的路线，不只是把人带到某个地方，而是让参与者在真实场景中理解产业、文化、历史与人的关系，并把一次行走转化为有内容、有情感、有审美、有价值的深度体验。',
      en: 'I believe every strong route should begin with real questions, enter real places, and leave real gains. A meaningful journey does more than move people through destinations; it helps participants understand industry, culture, history, and human connection through grounded, emotionally resonant experiences.',
    }
  ],
  tags: [
    { zh: '跨境文旅', en: 'Cross-Border Tourism' },
    { zh: '研学课程开发', en: 'Curriculum Design' },
    { zh: 'MICE 商务定制', en: 'Corporate MICE' },
    { zh: '资源深度整合', en: 'Resource Integration' },
    { zh: '大湾区科创游', en: 'GBA Tech Tour' },
  ],
  milestones: [
    {
      year: '2012 - PRESENT',
      title: {
        zh: '香港永顺旅行社 / 总经理 & 香港跨境资源负责人',
        en: 'Wing Shun Travel Service (HK) / General Manager & Head of GBA Resources',
      },
      description: {
        zh: '全面统筹旅行社日常运营，主导香港高校及青年赴内地高新名企参访项目、跨境高端文旅及大湾区医疗旅游试运营。',
        en: 'Directing full operations, coordinating high-profile HK university delegations visiting mainland technology giants, and leading cross-border medical tourism pilots.',
      },
    },
    {
      year: '2006 - PRESENT',
      title: {
        zh: '深领航文旅',
        en: 'Deep Navigation Tourism / Founder',
      },
      description: {
        zh: '创立“深蓝研学 / Deep Blue Academy”品牌。与江苏卫视等主流媒体联动进行大湾区科创研学与文娱文创线路精品设计。',
        en: 'Launched the "Deep Blue Academy" study tour brand. Collaborating with mainstream networks like Jiangsu TV on specialized science and culture study paths.',
      },
    },
    {
      year: '2025 - PRESENT',
      title: {
        zh: '新西兰 WT Cultural Exchange & Tourism / 创始人',
        en: 'NZ WT Cultural Exchange & Tourism (NZWT) / Founder',
      },
      description: {
        zh: '面向海外华人社群策划高品质寻根之旅、国际艺术文化交流、深圳大湾区国际医疗旅游服务，强社交属性的跨境文旅产品。',
        en: 'Curating premium homecoming paths, international youth summits, and active GBA medical wellness tourism products with rich social integration features.',
      },
    },
    {
      year: '2023 - 2026',
      title: {
        zh: '国基企业文化管理 & 乐景国旅 / 创始人',
        en: 'Guoji Corporate Culture & Lejing Travel / Founder',
      },
      description: {
        zh: '主导大金融机构高净值客户定制私享会、企业公关活动及大型商务MICE会务招待。',
        en: 'Directed corporate MICE, VIP public relations salons, and high-net-worth custom journeys for leading financial clients and industry champions.',
      },
    },
  ],
};

export const defaultBusinessSegments: BusinessSegment[] = [
  {
    id: 'corporate-visits',
    title: {
      zh: '企业参访与商务接待',
      en: 'Corporate Visits & Business Hosting',
    },
    industry: {
      zh: '企业 / 高校 / 商协会 / 海外团组',
      en: 'Enterprise / Universities / Associations / Overseas Groups',
    },
    description: {
      zh: '为企业、高校、商协会及海外团组设计深港及大湾区参访路线，统筹企业资源、城市现场、商务接待与跨境执行，让一次访问真正形成理解、连接与后续合作可能。',
      en: 'Designing Shenzhen-HK and Greater Bay Area visit routes for companies, universities, associations, and overseas delegations, with integrated corporate resources, city contexts, business hosting, and cross-border execution.',
    },
    metrics: [
      { label: { zh: '面向对象', en: 'Best For' }, value: '企业 / 高校 / 商协会 / 海外团组' },
    ],
    highlights: [
      { zh: '资源对接', en: 'Resource Matching' },
      { zh: '参访设计', en: 'Visit Design' },
      { zh: '行程统筹', en: 'Itinerary Coordination' },
      { zh: '现场接待', en: 'On-site Hosting' },
    ],
    iconName: 'Building2',
  },
  {
    id: 'study-cultural-experience',
    title: {
      zh: '文旅研学与文化体验',
      en: 'Study Tours & Cultural Experiences',
    },
    industry: {
      zh: '青少年 / 海外华人 / 学校 / 媒体合作',
      en: 'Youth / Overseas Chinese / Schools / Media Programs',
    },
    description: {
      zh: '围绕产业、城市、非遗、人文与历史现场设计研学及文化体验产品，将目的地转化为有主题、有课程、有情感记忆的深度行走体验。',
      en: 'Designing study-tour and cultural experience products around industry, cities, heritage, humanities, and historical sites, turning destinations into themed, curriculum-led, emotionally memorable journeys.',
    },
    metrics: [
      { label: { zh: '面向对象', en: 'Best For' }, value: '青少年 / 海外华人 / 学校 / 媒体合作项目' },
    ],
    highlights: [
      { zh: '主题策划', en: 'Theme Planning' },
      { zh: '课程设计', en: 'Curriculum Design' },
      { zh: '文化现场', en: 'Cultural Contexts' },
      { zh: '非遗 / 产业 / 城市路线', en: 'Heritage / Industry / City Routes' },
    ],
    iconName: 'Landmark',
  },
  {
    id: 'medical-wellness',
    title: {
      zh: '跨境康养与医疗旅行',
      en: 'Cross-Border Wellness & Medical Travel',
    },
    industry: {
      zh: '高净值客户 / 银发客群 / 海外华人家庭',
      en: 'HNW Clients / Senior Travelers / Overseas Chinese Families',
    },
    description: {
      zh: '整合博鳌医疗咨询、深圳康养体验与跨境服务安排，为高净值客户、银发客群及海外华人家庭提供更安心、连贯的健康旅行支持。',
      en: 'Integrating Boao medical consultation, Shenzhen wellness experiences, and cross-border service arrangements for more reassuring and continuous health travel support.',
    },
    metrics: [
      { label: { zh: '面向对象', en: 'Best For' }, value: '高净值客户 / 银发客群 / 海外华人家庭' },
    ],
    highlights: [
      { zh: '博鳌医疗资源', en: 'Boao Medical Resources' },
      { zh: '深圳康养资源', en: 'Shenzhen Wellness Resources' },
      { zh: '管家式陪同', en: 'Concierge Companion Care' },
      { zh: '跨境安排', en: 'Cross-Border Arrangements' },
    ],
    iconName: 'HeartPulse',
  },
];

export const defaultCapabilityCategories: CapabilityCategory[] = [
  {
    id: 'professional-foundation',
    name: {
      zh: '专业底盘',
      en: 'Professional',
    },
    description: {
      zh: '从课程、场景、企业参访到跨境供应链，把复杂资源整理成可执行的产品结构。',
      en: 'Product foundations for curriculum, experience design, corporate visits, scenography, supply chains, and cross-border assets.',
    },
    skills: [
      { name: { zh: '研学课程设计', en: 'Curriculum Design' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '实景体验营造', en: 'Experience Design' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '企业参访统筹', en: 'Corporate Visits' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '现场场景复刻', en: 'Scenography' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '跨境供应链整合', en: 'Supply Chain' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '海外资源对接', en: 'Global Assets' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '跨境医疗对接', en: 'Medical Tourism' }, level: 0, description: { zh: '', en: '' } },
    ],
    iconName: 'Compass',
  },
  {
    id: 'aesthetic-appreciation',
    name: {
      zh: '人文审美',
      en: 'Aesthetic',
    },
    description: {
      zh: '用文学、人文与非遗表达提升路线质感，让研学和旅行有更深的审美记忆点。',
      en: 'Humanistic and aesthetic tools that add literary texture, cultural memory, and heritage expression to each route.',
    },
    skills: [
      { name: { zh: '庄子哲学美学', en: 'Zhuangzi Aesthetic' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '毛姆人文笔触', en: "Maugham's Humanism" }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '非遗活化演绎', en: 'Heritage Reimagined' }, level: 0, description: { zh: '', en: '' } },
    ],
    iconName: 'Palette',
  },
  {
    id: 'execution-speed',
    name: {
      zh: '执行力',
      en: 'Execution',
    },
    description: {
      zh: '从项目统筹、深圳速度到跨时区协同，把现场交付做稳、做快、做可控。',
      en: 'Operational capability for planning, speed, multi-timezone coordination, and resilient on-site delivery.',
    },
    skills: [
      { name: { zh: '复杂项目统筹', en: 'Master Planner' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '深圳速度执行', en: 'Execution Speed' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '跨时区协同', en: 'Multi-timezone Sync' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '危机公关保障', en: 'Crisis Management' }, level: 0, description: { zh: '', en: '' } },
    ],
    iconName: 'Zap',
  },
];
export const defaultContactInfo: ContactInfo = {
  wechatId: 'Luna_WT_GBA',
  wechatQrUrl: '/images/wechat-qr.jpg',
  whatsappNumber: '+86 135 3778 6955',
  whatsappUrl: 'https://wa.me/8613537786955',
  email: 'laneige9191@gmail.com',
  phone: '+86 135 3778 6955',
  location: {
    zh: '中国 深圳 · 中国 香港',
    en: 'Shenzhen & Hong Kong, China',
  },
};
