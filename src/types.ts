/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranslationSet {
  zh: string;
  en: string;
}

export interface Profile {
  name: TranslationSet;
  title: TranslationSet;
  slogan: TranslationSet;
  avatarUrl: string;
  bio: TranslationSet[];
  tags: TranslationSet[];
  milestones: {
    year: string;
    title: TranslationSet;
    description: TranslationSet;
  }[];
}

export interface BusinessSegment {
  id: string;
  title: TranslationSet;
  industry: TranslationSet;
  description: TranslationSet;
  metrics: {
    label: TranslationSet;
    value: string;
  }[];
  highlights: TranslationSet[];
  iconName: string; // Dynamic icon from Lucide
}

export interface SkillItem {
  name: TranslationSet;
  level: number; // 0 to 100
  description: TranslationSet;
}

export interface CapabilityCategory {
  id: string;
  name: TranslationSet;
  description: TranslationSet;
  skills: SkillItem[];
  iconName: string;
}

export interface ContactInfo {
  wechatId: string;
  wechatQrUrl: string; // We can use an elegant SVG icon or placeholder QR
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  phone?: string;
  location?: TranslationSet;
}
