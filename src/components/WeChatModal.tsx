/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, MessageSquare } from 'lucide-react';
import { TranslationSet } from '../types';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  wechatId: string;
  language: 'zh' | 'en';
}

export const WeChatModal: React.FC<WeChatModalProps> = ({
  isOpen,
  onClose,
  wechatId,
  language,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(wechatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const text = {
    title: { zh: '微信联系方式', en: 'WeChat Contact' } as TranslationSet,
    scan: { zh: '微信扫一扫，添加好友', en: 'Scan QR code in WeChat to add me' } as TranslationSet,
    copyBtn: { zh: '复制微信号', en: 'Copy WeChat ID' } as TranslationSet,
    copied: { zh: '已复制！', en: 'Copied!' } as TranslationSet,
    idLabel: { zh: '微信号:', en: 'WeChat ID:' } as TranslationSet,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          {/* Overlay click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Header Icon */}
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {text.title[language]}
              </h3>

              {/* WeChat ID */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-sm mb-6">
                <span>{text.idLabel[language]} <strong>{wechatId}</strong></span>
                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-white transition-colors"
                  title={text.copyBtn[language]}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Scalable Vector QR Code Mockup - elegant, clean, crisp SVG */}
              <div className="p-4 bg-white rounded-xl mb-4 relative shadow-inner">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 100 100"
                  className="text-slate-950"
                  fill="currentColor"
                >
                  {/* Outer Frame & Corners */}
                  <path d="M0,0 h30 v6 h-24 v24 h-6 z" />
                  <path d="M100,0 h-30 v6 h24 v24 h6 z" />
                  <path d="M0,100 h30 v-6 h-24 v-24 h-6 z" />
                  <path d="M100,100 h-30 v-6 h24 v-24 h6 z" />

                  {/* Corner Finder Patterns */}
                  {/* Top-Left */}
                  <path d="M10,10 h18 v18 h-18 z" />
                  <path d="M12,12 h14 v14 h-14 z" fill="white" />
                  <path d="M14,14 h10 v10 h-10 z" />
                  {/* Top-Right */}
                  <path d="M72,10 h18 v18 h-18 z" />
                  <path d="M74,12 h14 v14 h-14 z" fill="white" />
                  <path d="M76,14 h10 v10 h-10 z" />
                  {/* Bottom-Left */}
                  <path d="M10,72 h18 v18 h-18 z" />
                  <path d="M12,74 h14 v14 h-14 z" fill="white" />
                  <path d="M14,76 h10 v10 h-10 z" />

                  {/* Alignment / Mock QR Data Modules */}
                  <path d="M42,10 h6 v6 h-6 z M42,22 h6 v6 h-6 z M54,14 h6 v12 h-6 z M62,10 h4 v10 h-4 z" />
                  <path d="M10,42 h6 v6 h-6 z M22,42 h12 v6 h-12 z M14,54 h8 v6 h-8 z M26,50 h6 v10 h-6 z" />
                  <path d="M42,42 h16 v6 h-16 z M46,52 h8 v8 h-8 z M58,54 h6 v6 h-6 z" />
                  <path d="M72,42 h10 v6 h-10 z M86,46 h4 v14 h-4 z M76,54 h6 v6 h-6 z" />
                  <path d="M42,72 h6 v10 h-6 z M52,76 h12 v6 h-12 z M46,86 h18 v4 h-18 z" />
                  <path d="M72,72 h8 v8 h-8 z M84,76 h8 v4 h-8 z M76,84 h12 v6 h-12 z" />

                  {/* Elegant green chat-like logo center-point */}
                  <circle cx="50" cy="50" r="11" fill="white" />
                  <circle cx="50" cy="50" r="9" className="text-emerald-500" />
                  {/* Inner small bubbles representing WeChat speech bubble */}
                  <ellipse cx="48" cy="48" rx="5" ry="4" fill="white" />
                  <ellipse cx="53" cy="51" rx="4" ry="3.2" fill="white" />
                </svg>
              </div>

              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                {text.scan[language]}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all"
                >
                  {language === 'zh' ? '返回' : 'Back'}
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{text.copied[language]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{text.copyBtn[language]}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
