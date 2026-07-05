/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Phone, Copy, Check, ExternalLink, Send, ArrowUpRight } from 'lucide-react';
import { ContactInfo, TranslationSet } from '../types';
import { WeChatModal } from './WeChatModal';

interface ContactSectionProps {
  contactInfo: ContactInfo;
  language: 'zh' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo,
  language,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage || !formContact) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const subjectText = encodeURIComponent(`[文旅研学合作咨询] ${formSubject || '来自个人网站的合作咨询'}`);
      const bodyText = encodeURIComponent(`于丽娜您好：\n\n${formMessage}\n\n---\n联系人：${formName}\n联系方式：${formContact}`);
      window.location.href = `mailto:${contactInfo.email}?subject=${subjectText}&body=${bodyText}`;
      setFormName('');
      setFormContact('');
      setFormSubject('');
      setFormMessage('');
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 800);
  };

  const text = {
    title: { zh: '联络通道', en: 'CONTACT' } as TranslationSet,
    heading: { zh: '欢迎交流文旅研学与跨境合作', en: 'Start a Cultural Tourism Conversation' } as TranslationSet,
    sub: {
      zh: '如需企业参访、商务接待、研学定制、文化体验或跨境康养服务，欢迎通过以下方式联系。',
      en: 'Reach out for corporate visits, business hosting, study-tour design, cultural experiences, or cross-border wellness programs.',
    } as TranslationSet,
    formTitle: { zh: '发送合作意向', en: 'Send an Inquiry' } as TranslationSet,
    nameLabel: { zh: '您的姓名', en: 'Your Name' } as TranslationSet,
    contactLabel: { zh: '联系方式', en: 'Contact Details' } as TranslationSet,
    subjectLabel: { zh: '合作主题', en: 'Topic' } as TranslationSet,
    messageLabel: { zh: '需求说明', en: 'Message' } as TranslationSet,
    placeholderName: { zh: '例如：王经理', en: 'e.g., Jane Doe' } as TranslationSet,
    placeholderContact: { zh: '例如：手机号 / 邮箱 / 微信号', en: 'Phone / Email / WeChat' } as TranslationSet,
    placeholderSubject: { zh: '例如：大湾区企业参访合作', en: 'e.g., GBA corporate visit program' } as TranslationSet,
    placeholderMessage: { zh: '请简要说明团组类型、人数、时间、目的地或合作需求。', en: 'Briefly describe your group, timing, destination, and collaboration needs.' } as TranslationSet,
    submitBtn: { zh: '提交并打开邮件', en: 'Prepare Email' } as TranslationSet,
    submitting: { zh: '正在整理邮件内容...', en: 'Preparing Email...' } as TranslationSet,
    successMsg: { zh: '已为您打开邮件客户端，请确认后发送。', en: 'Your email client is ready. Please review and send.' } as TranslationSet,
    clickCopy: { zh: '复制微信号', en: 'Copy ID' } as TranslationSet,
    clickOpen: { zh: '查看微信二维码', en: 'View QR Code' } as TranslationSet,
    chatNow: { zh: '发起联系', en: 'Message Now' } as TranslationSet,
    copied: { zh: '已复制', en: 'Copied' } as TranslationSet,
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center justify-center gap-1.5">
          <Mail className="w-3.5 h-3.5" />
          {text.title[language]}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
          {text.heading[language]}
        </h3>
        <p className="text-neutral-400 text-sm md:text-base">
          {text.sub[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 shadow-lg hover:border-neutral-700/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">WECHAT / 微信</span>
                <h4 className="text-base font-bold text-white mt-0.5 font-display">微信咨询</h4>
                <p className="text-sm font-mono text-neutral-300 mt-1 mb-3">
                  ID: <span className="text-neutral-100 font-semibold">{contactInfo.wechatId}</span>
                </p>
                <div className="flex gap-3">
                  <button onClick={() => setIsWeChatOpen(true)} className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/5 px-2.5 py-1.5 rounded-lg border border-emerald-500/10 cursor-pointer">
                    <span>{text.clickOpen[language]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleCopy(contactInfo.wechatId, 'wechat')} className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer">
                    {copiedField === 'wechat' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{text.copied[language]}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{text.clickCopy[language]}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 shadow-lg hover:border-neutral-700/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">WHATSAPP</span>
                <h4 className="text-base font-bold text-white mt-0.5 font-display">WhatsApp 联系</h4>
                <p className="text-sm font-mono text-neutral-300 mt-1 mb-3">{contactInfo.whatsappNumber}</p>
                <a href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/5 px-2.5 py-1.5 rounded-lg border border-cyan-500/10 cursor-pointer">
                  <span>{text.chatNow[language]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 shadow-lg hover:border-neutral-700/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">EMAIL</span>
                <h4 className="text-base font-bold text-white mt-0.5 font-display">合作邮箱</h4>
                <p className="text-sm font-mono text-neutral-300 mt-1 mb-3 truncate" title={contactInfo.email}>{contactInfo.email}</p>
                <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/5 px-2.5 py-1.5 rounded-lg border border-emerald-500/10 cursor-pointer">
                  <span>{language === 'zh' ? '撰写邮件' : 'Compose Mail'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-neutral-900/40 border border-neutral-800 p-6 md:p-8 shadow-xl relative">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-display">
              <Send className="w-5 h-5 text-emerald-400" />
              {text.formTitle[language]}
            </h4>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required value={formName} onChange={(e) => setFormName(e.target.value)} placeholder={text.placeholderName[language]} aria-label={text.nameLabel[language]} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors" />
                <input required value={formContact} onChange={(e) => setFormContact(e.target.value)} placeholder={text.placeholderContact[language]} aria-label={text.contactLabel[language]} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <input value={formSubject} onChange={(e) => setFormSubject(e.target.value)} placeholder={text.placeholderSubject[language]} aria-label={text.subjectLabel[language]} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors" />
              <textarea required rows={4} value={formMessage} onChange={(e) => setFormMessage(e.target.value)} placeholder={text.placeholderMessage[language]} aria-label={text.messageLabel[language]} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 disabled:bg-neutral-800 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer">
                  <Send className="w-4 h-4 text-neutral-950" />
                  <span>{isSubmitting ? text.submitting[language] : text.submitBtn[language]}</span>
                </button>
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl">
                      {text.successMsg[language]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>

      <WeChatModal isOpen={isWeChatOpen} onClose={() => setIsWeChatOpen(false)} wechatId={contactInfo.wechatId} wechatQrUrl={contactInfo.wechatQrUrl} language={language} />
    </section>
  );
};
