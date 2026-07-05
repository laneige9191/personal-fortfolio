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
  avatarUrl: '/src/assets/images/regenerated_image_1783181952266.png',
  bio: [
    {
      zh: '我先后创立深圳市国基企业文化管理有限公司、乐景国际旅行社、深领航文旅，并在新西兰创立 New Zealand WT Cultural Exchange & Tourism Limited（NZWT）。现任香港永顺旅行社总经理，长期深耕旅行社运营、客户服务、团队接待和跨境资源整合。我的产品体系涵盖企业公关 MICE、金融行业高净值客户私享会、深蓝研学品牌、银发壮游俱乐部、面向港澳及海外访客的"即刻深圳" (GoSZ) 商务接待与企业参访、电视台合作开发粤港澳大湾区研学，以及香港高校赴内地名企参访项目。',
      en: 'I founded Shenzhen Guoji Corporate Culture Management, Lejing International Travel Service, Deep Navigation Cultural Tourism, and New Zealand WT Cultural Exchange & Tourism Limited (NZWT). I now serve as General Manager of Hong Kong Wing Shun Travel, with hands-on experience in travel agency operations, high-end guest hospitality, corporate delegations, and cross-border resource integration.',
    },
    {
      zh: '在产品设计上，我坚持“有研学，真问题、真现场、真收获”。无论是科技企业参访、非遗主题线路、红楼梦主题江南美学、海外华人寻根、大湾区国际医疗旅行，还是云南芒市腾冲、川渝“祖国山河”、中医康养研学与国际文化交流，我关注的都不只是“去哪里”，而是一个目的地能否被转化为一场有内容、有情感、有审美、有价值的深度体验。我希望每一条线路都能回应真实问题、进入真实现场、留下真实收获，让参与者在行走中理解产业、文化、历史与人的关系，在一次旅程里看见更具体、更有温度的中国。',
      en: 'In product design, I champion the ethos: "Real Programs, Real Issues, Real Scenarios, and Real Gains." Whether coordinating tech corporate delegations, intangible cultural heritage pathways, Dream of the Red Chamber-themed Jiangnan aesthetics, diaspora homecoming trips, GBA international medical wellness journeys, or TCM wellness tours, I focus not just on "where to go," but on how to transform a destination into an immersive experience with substance, emotion, aesthetic taste, and lasting value.',
    },
    {
      zh: '我擅长整合企业、学校、媒体、目的地、非遗传承人、海外机构与客户需求，并将其转化为可落地、可传播、可复购的文旅产品。我的产品风格克制、真实而富有文学质感，兼具商业执行力、文化表达力与跨境资源整合能力。',
      en: 'I orchestrate complex synergies across corporate clients, educational institutions, media outlets, heritage masters, and overseas networks. I translate these synergies into highly executable, shareable, and repeatable travel products characterized by disciplined styling, authentic emotional resonance, and human quality.',
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
    id: 'corporate-mice',
    title: {
      zh: '企业 MICE 与高净值定制游',
      en: 'Corporate MICE & Custom Premium Travel',
    },
    industry: {
      zh: '企业公关 / 金融私享会 / 商务地接',
      en: 'Corporate MICE / Financial VIP Salons / Executive Hospitality',
    },
    description: {
      zh: '面向金融行业、领军实业等高规格客户，提供定制化公关会务与私享旅行。主打红楼梦江南美学、庄子哲学等深度人文审美设计，将商务考察与高质感旅行体验完美交融。',
      en: 'Delivering tailored business event hosting and elite private group travel for premium financial institutions and market-leading enterprises. Blending executive logistics with rich, bespoke Jiangnan and Zhuangzi philosophical themes.',
    },
    metrics: [
      { label: { zh: '累计会务服务量', en: 'Custom Groups Served' }, value: '100+' },
      { label: { zh: '高净值客群占比', en: 'HNW Clients Ratio' }, value: '85%+' },
      { label: { zh: '综合好评率', en: 'Client Satisfaction' }, value: '99.8%' },
    ],
    highlights: [
      { zh: '提供端到端管家式高端公关活动统筹，追求零差错的高规格交付品质', en: 'End-to-end white-glove event directorship ensuring flawless execution' },
      { zh: '融入经典文学与历史本真美学，打破单一会务形式，赋予行程深厚质感', en: 'Weaving high literature and authentic art aesthetics into executive itineraries' },
      { zh: '拥有海外（新西兰/港澳）与内地双向绿色通道及稀缺景区定制开发特许', en: 'Exclusive access to custom permits and dual-track paths in NZ, HK, and Mainland' },
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'gba-study-tour',
    title: {
      zh: '大湾区科创研学 (深蓝研学)',
      en: 'GBA Science & Tech Study Tours',
    },
    industry: {
      zh: '青少年研学 / 媒体协同 / 科技游学',
      en: 'STEM Study Tours / Media Broadcasts / Academic Retreats',
    },
    description: {
      zh: '创立“深蓝研学”品牌，聚焦大湾区创新力量。联手江苏卫视等一流电视台深度合作，开发面向港澳青少年、香港高校赴内地的“即刻深圳”(GoSZ)科技企业名校参访线路。',
      en: 'Curating STEM programs centering GBA science breakthroughs under the "Deep Blue Academy" banner. Coordinating "GoSZ" tech delegation paths for HK/Macao youth in alliance with Jiangsu TV.',
    },
    metrics: [
      { label: { zh: '深度合作媒体', en: 'Cooperated Networks' }, value: '3+' },
      { label: { zh: '精品研学路线', en: 'Bespoke Tour Paths' }, value: '25+' },
      { label: { zh: '研学接待人次', en: 'Total Students Served' }, value: '10,000+' },
    ],
    highlights: [
      { zh: '深度链接腾讯、大疆等高新标杆企业，策划真问题真动手的研学课题', en: 'Forging deep collaborations with Tencent, DJI, etc., for hands-on innovation labs' },
      { zh: '与香港知名大专院校建立长期战略输送机制，承接大型两地青年交流参访', en: 'Strategic partnerships with top HK universities for dual-track academic exchange' },
      { zh: '开发面向港澳及海外青年群组的“即刻深圳(GoSZ)”系列入境科技商务参访', en: 'Broadening "GoSZ" incoming business study products for high-achieving youths' },
    ],
    iconName: 'Tv',
  },
  {
    id: 'medical-wellness',
    title: {
      zh: '大湾区医疗旅游与健康管理',
      en: 'GBA Medical Wellness & Health Tourism',
    },
    industry: {
      zh: '康养文旅 / 跨境医疗对接 / 双向转诊',
      en: 'Medical Wellness / Cross-Border Diagnostics / Bilateral Referrals',
    },
    description: {
      zh: '整合香港顶尖私人诊所医学资源及深圳国医大师级高端中医康养体验。打造“高端诊断 + 跨境就医 + 疗愈旅行 + 全程管家伴护”的尊享级大湾区大健康旅游综合服务。',
      en: 'Synthesizing premium healthcare diagnostics in Hong Kong with first-rate TCM wellness retreats in Shenzhen. Offering tailored diagnostics, consultations, longevity tours, and white-glove companion care.',
    },
    metrics: [
      { label: { zh: '合作名医名诊', en: 'Affiliated HK Clinics' }, value: '150+' },
      { label: { zh: '双向绿色通道', en: 'Referral Centers' }, value: '12' },
      { label: { zh: '综合管家服务率', en: 'Concierge Coverage' }, value: '100%' },
    ],
    highlights: [
      { zh: '开辟香港专科医疗与内地中医调理双向流动的跨境医疗绿色快捷通道', en: 'Bridging HK private diagnostics with mainland TCM therapies for fluid green paths' },
      { zh: '定制融汇静心静思、中医康养与文旅休闲的独家养生静修高端服务包', en: 'Custom-tailored elite retreats combining diagnostics, TCM, and mindfulness' },
      { zh: '提供全流程、多语种客服与全天候专职健康管家一站式陪伴', en: 'One-stop all-weather multilingual health butler and logistics companion' },
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
      { name: { zh: '项目统筹狂人', en: 'Master Planner' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '深圳速度执行', en: 'Execution Speed' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '跨时区协同', en: 'Multi-timezone Sync' }, level: 0, description: { zh: '', en: '' } },
      { name: { zh: '危机公关保障', en: 'Crisis Management' }, level: 0, description: { zh: '', en: '' } },
    ],
    iconName: 'Zap',
  },
];

export const defaultContactInfo: ContactInfo = {
  wechatId: 'Luna_WT_GBA',
  wechatQrUrl: '', // Will render beautifully inside ContactSection as interactive mock
  whatsappNumber: '+86 135 3778 6955',
  whatsappUrl: 'https://wa.me/8613537786955',
  email: 'laneige9191@gmail.com',
  phone: '+86 135 3778 6955',
  location: {
    zh: '中国 深圳 · 中国 香港',
    en: 'Shenzhen & Hong Kong, China',
  },
};
