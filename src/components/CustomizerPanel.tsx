/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, X, Check, RotateCcw, Sparkles, User, FileText, Smartphone } from 'lucide-react';
import { Profile, ContactInfo, TranslationSet } from '../types';

interface CustomizerPanelProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  contactInfo: ContactInfo;
  onUpdate: (updatedProfile: Profile, updatedContact: ContactInfo) => void;
  onReset: () => void;
  language: 'zh' | 'en';
}

export const CustomizerPanel: React.FC<CustomizerPanelProps> = ({
  isOpen,
  onClose,
  profile,
  contactInfo,
  onUpdate,
  onReset,
  language,
}) => {
  // Local editable state fields
  const [zhName, setZhName] = useState(profile.name.zh);
  const [enName, setEnName] = useState(profile.name.en);
  
  const [zhTitle, setZhTitle] = useState(profile.title.zh);
  const [enTitle, setEnTitle] = useState(profile.title.en);

  const [zhSlogan, setZhSlogan] = useState(profile.slogan.zh);
  const [enSlogan, setEnSlogan] = useState(profile.slogan.en);

  const [wechatId, setWechatId] = useState(contactInfo.wechatId);
  const [whatsappNumber, setWhatsappNumber] = useState(contactInfo.whatsappNumber);
  const [email, setEmail] = useState(contactInfo.email);
  
  const [zhLocation, setZhLocation] = useState(contactInfo.location?.zh || '');
  const [enLocation, setEnLocation] = useState(contactInfo.location?.en || '');

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProfile: Profile = {
      ...profile,
      name: { zh: zhName, en: enName },
      title: { zh: zhTitle, en: enTitle },
      slogan: { zh: zhSlogan, en: enSlogan },
    };

    const updatedContact: ContactInfo = {
      ...contactInfo,
      wechatId: wechatId,
      whatsappNumber: whatsappNumber,
      whatsappUrl: `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`,
      email: email,
      location: { zh: zhLocation, en: enLocation },
    };

    onUpdate(updatedProfile, updatedContact);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1500);
  };

  const handleResetClick = () => {
    if (window.confirm(language === 'zh' ? '确定要恢复默认模板数据吗？' : 'Are you sure you want to reset to default template data?')) {
      onReset();
      // Sync local form states
      setZhName(profile.name.zh);
      setEnName(profile.name.en);
      setZhTitle(profile.title.zh);
      setEnTitle(profile.title.en);
      setZhSlogan(profile.slogan.zh);
      setEnSlogan(profile.slogan.en);
      setWechatId(contactInfo.wechatId);
      setWhatsappNumber(contactInfo.whatsappNumber);
      setEmail(contactInfo.email);
      setZhLocation(contactInfo.location?.zh || '');
      setEnLocation(contactInfo.location?.en || '');
      onClose();
    }
  };

  const text = {
    title: { zh: '个性化配置您的个人网站', en: 'Personalize Your Website' } as TranslationSet,
    intro: { zh: '在这里修改您的个人信息，所有板块（简介、业务、能力、联系方式）都将实时刷新！', en: 'Modify your information below to instantly update the entire webpage in real-time!' } as TranslationSet,
    saveBtn: { zh: '保存并应用配置', en: 'Apply Changes' } as TranslationSet,
    saved: { zh: '保存成功！', en: 'Changes Saved!' } as TranslationSet,
    resetBtn: { zh: '重置默认数据', en: 'Reset to Template' } as TranslationSet,
    sectionIdentity: { zh: '第一步：个人基本身份信息', en: 'Step 1: Core Identity' } as TranslationSet,
    sectionContact: { zh: '第二步：即时联络通道配置', en: 'Step 2: Connect Channels' } as TranslationSet,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Panel Container (Slides from right) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-lg bg-neutral-900 border-l border-neutral-800 p-6 md:p-8 overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-neutral-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                    <Sliders className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5 font-display">
                    {text.title[language]}
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-neutral-400 mb-6 leading-relaxed bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                {text.intro[language]}
              </p>

              {/* Form Content */}
              <form onSubmit={handleSave} className="space-y-6">
                
                {/* Section 1: Basic Identity */}
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1.5 border-b border-neutral-800/40 pb-1.5">
                    <User className="w-3.5 h-3.5" />
                    {text.sectionIdentity[language]}
                  </h4>

                  {/* Name CN & EN */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">姓名 (中文)</label>
                      <input
                        type="text"
                        required
                        value={zhName}
                        onChange={(e) => setZhName(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">Name (English)</label>
                      <input
                        type="text"
                        required
                        value={enName}
                        onChange={(e) => setEnName(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Title CN & EN */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">职业称谓 (中文)</label>
                      <input
                        type="text"
                        required
                        value={zhTitle}
                        onChange={(e) => setZhTitle(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">Professional Title (English)</label>
                      <input
                        type="text"
                        required
                        value={enTitle}
                        onChange={(e) => setEnTitle(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Slogan CN & EN */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">商业标语 / Slogan (中文)</label>
                      <textarea
                        required
                        rows={2}
                        value={zhSlogan}
                        onChange={(e) => setZhSlogan(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">Business Slogan (English)</label>
                      <textarea
                        required
                        rows={2}
                        value={enSlogan}
                        onChange={(e) => setEnSlogan(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Location CN & EN */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">常驻城市 (中文)</label>
                      <input
                        type="text"
                        value={zhLocation}
                        onChange={(e) => setZhLocation(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">Location City (English)</label>
                      <input
                        type="text"
                        value={enLocation}
                        onChange={(e) => setEnLocation(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Contact Info */}
                <div className="space-y-4 pt-4">
                  <h4 className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1.5 border-b border-neutral-800/40 pb-1.5">
                    <Smartphone className="w-3.5 h-3.5" />
                    {text.sectionContact[language]}
                  </h4>

                  {/* WeChat & WhatsApp */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">微信号 (WeChat ID)</label>
                      <input
                        type="text"
                        required
                        value={wechatId}
                        onChange={(e) => setWechatId(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400">WhatsApp (带区号)</label>
                      <input
                        type="text"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="例如: +8618888888888"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-neutral-400">联系邮箱 (Email Address)</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-6 flex gap-3">
                  <button
                    type="submit"
                    disabled={isSaved}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 disabled:bg-neutral-800 text-neutral-950 text-xs font-bold transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSaved ? (
                      <>
                        <Check className="w-4 h-4 text-neutral-950" />
                        <span>{text.saved[language]}</span>
                      </>
                    ) : (
                      <span>{text.saveBtn[language]}</span>
                    )}
                  </button>
                </div>

              </form>
            </div>

            {/* Reset Button bottom block */}
            <div className="pt-8 border-t border-neutral-800/60 mt-8">
              <button
                onClick={handleResetClick}
                className="w-full py-2 rounded-xl bg-neutral-950 hover:bg-neutral-950/40 border border-neutral-800 hover:border-red-500/20 text-neutral-500 hover:text-red-400 text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{text.resetBtn[language]}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
