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
  
  // Contact Form State
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

    // Simulate safe transit / loading feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Create a native prefilled mailto link for direct execution
      const subjectText = encodeURIComponent(`[Business Consultation] ${formSubject || 'Inquiry from Portfolio'}`);
      const bodyText = encodeURIComponent(
        `Hi Alex,\n\n${formMessage}\n\n---\nSender Details:\nName: ${formName}\nContact Info: ${formContact}`
      );
      
      const mailtoUrl = `mailto:${contactInfo.email}?subject=${subjectText}&body=${bodyText}`;
      
      // Open in a new window/applet frame safely
      window.location.href = mailtoUrl;

      // Clear form states on success after feedback
      setFormName('');
      setFormContact('');
      setFormSubject('');
      setFormMessage('');

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const text = {
    title: { zh: '联络通道', en: 'CONNECT CHANNELS' } as TranslationSet,
    heading: { zh: '启动高价值商业对话', en: 'Initiate High-Value Dialogue' } as TranslationSet,
    sub: { zh: '无论是商业合伙、企业咨询还是资本孵化需求，欢迎随时取得联系。', en: 'Reach out for corporate advisory, technology venture partnerships, or capital incubation.' } as TranslationSet,
    formTitle: { zh: '发送商业咨询', en: 'Direct Inquiry Builder' } as TranslationSet,
    nameLabel: { zh: '您的姓名', en: 'Your Name' } as TranslationSet,
    contactLabel: { zh: '联络方式 (手机/邮箱/社交账号)', en: 'Your Contact Details (Phone/Email/Social)' } as TranslationSet,
    subjectLabel: { zh: '咨询主题', en: 'Topic / Subject' } as TranslationSet,
    messageLabel: { zh: '留言详情', en: 'Message Details' } as TranslationSet,
    placeholderName: { zh: '例如：王经理', en: 'e.g., Jane Doe' } as TranslationSet,
    placeholderContact: { zh: '例如：manager@company.com', en: 'e.g., manager@company.com' } as TranslationSet,
    placeholderSubject: { zh: '例如：关于AIoT软硬件研发合作', en: 'e.g., IoT smart hardware partnership inquiry' } as TranslationSet,
    placeholderMessage: { zh: '请在此输入您的具体合作意向与需求...', en: 'Describe your requirements or partnership details...' } as TranslationSet,
    submitBtn: { zh: '提交并开启邮箱发送', en: 'Submit & Prepare Email' } as TranslationSet,
    submitting: { zh: '正在生成邮件草稿...', en: 'Generating Email Draft...' } as TranslationSet,
    successMsg: { zh: '留言成功！已为您打开系统邮箱客户端发送。', en: 'Success! Your email client has been prepared.' } as TranslationSet,
    clickCopy: { zh: '点击复制', en: 'Copy ID' } as TranslationSet,
    clickOpen: { zh: '点击查看 QR Code', en: 'View QR Code' } as TranslationSet,
    chatNow: { zh: '发起即时对话', en: 'Message Now' } as TranslationSet,
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      {/* Section Header */}
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
        {/* Left: Contact Channels Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: WeChat */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 shadow-lg hover:border-neutral-700/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">WECHAT / 微信</span>
                <h4 className="text-base font-bold text-white mt-0.5 font-display">微信扫一扫</h4>
                <p className="text-sm font-mono text-neutral-300 mt-1 mb-3">
                  ID: <span className="text-neutral-100 font-semibold">{contactInfo.wechatId}</span>
                </p>

                {/* WeChat Interactive Options */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsWeChatOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/5 px-2.5 py-1.5 rounded-lg border border-emerald-500/10 cursor-pointer"
                  >
                    <span>{text.clickOpen[language]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleCopy(contactInfo.wechatId, 'wechat')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                  >
                    {copiedField === 'wechat' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">已复制</span>
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

          {/* Card 2: WhatsApp */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 shadow-lg hover:border-neutral-700/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">WHATSAPP / 瓦斯</span>
                <h4 className="text-base font-bold text-white mt-0.5 font-display">WhatsApp 通话</h4>
                <p className="text-sm font-mono text-neutral-300 mt-1 mb-3">
                  {contactInfo.whatsappNumber}
                </p>

                {/* WhatsApp Interactive Options */}
                <div className="flex gap-3">
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/5 px-2.5 py-1.5 rounded-lg border border-cyan-500/10 cursor-pointer"
                  >
                    <span>{text.chatNow[language]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleCopy(contactInfo.whatsappNumber, 'whatsapp')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                  >
                    {copiedField === 'whatsapp' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">已复制</span>
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

          {/* Card 3: Email */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-6 shadow-lg hover:border-neutral-700/80 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">EMAIL / 电子邮箱</span>
                <h4 className="text-base font-bold text-white mt-0.5 font-display">官方联络邮箱</h4>
                <p className="text-sm font-mono text-neutral-300 mt-1 mb-3 truncate" title={contactInfo.email}>
                  {contactInfo.email}
                </p>

                {/* Email Interactive Options */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/5 px-2.5 py-1.5 rounded-lg border border-emerald-500/10 cursor-pointer"
                  >
                    <span>{language === 'zh' ? '撰写邮件' : 'Compose Mail'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleCopy(contactInfo.email, 'email')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{language === 'zh' ? '复制地址' : 'Copy Email'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Composer Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-neutral-900/40 border border-neutral-800 p-6 md:p-8 shadow-xl relative">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-display">
              <Send className="w-5 h-5 text-emerald-400" />
              {text.formTitle[language]}
            </h4>

            {/* Email form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 font-mono">
                    {text.nameLabel[language]} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={text.placeholderName[language]}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Contact Detail */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 font-mono">
                    {text.contactLabel[language]} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formContact}
                    onChange={(e) => setFormContact(e.target.value)}
                    placeholder={text.placeholderContact[language]}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 font-mono">
                  {text.subjectLabel[language]}
                </label>
                <input
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder={text.placeholderSubject[language]}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 font-mono">
                  {text.messageLabel[language]} <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder={text.placeholderMessage[language]}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              {/* Form Actions with animation feedback */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 disabled:bg-neutral-800 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-neutral-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>{text.submitting[language]}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-neutral-950" />
                      <span>{text.submitBtn[language]}</span>
                    </>
                  )}
                </button>

                {/* Submit Feedback */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl"
                    >
                      {text.successMsg[language]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Embedded WeChat QR Overlay Modal */}
      <WeChatModal
        isOpen={isWeChatOpen}
        onClose={() => setIsWeChatOpen(false)}
        wechatId={contactInfo.wechatId}
        language={language}
      />
    </section>
  );
};
