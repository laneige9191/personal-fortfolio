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
  wechatQrUrl: string;
  language: 'zh' | 'en';
}

export const WeChatModal: React.FC<WeChatModalProps> = ({
  isOpen,
  onClose,
  wechatId,
  wechatQrUrl,
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
    scan: { zh: '请使用微信扫描二维码，或复制微信号添加好友。', en: 'Scan the QR code in WeChat or copy the WeChat ID.' } as TranslationSet,
    copyBtn: { zh: '复制微信号', en: 'Copy WeChat ID' } as TranslationSet,
    copied: { zh: '已复制', en: 'Copied' } as TranslationSet,
    idLabel: { zh: '微信号', en: 'WeChat ID' } as TranslationSet,
    back: { zh: '返回', en: 'Back' } as TranslationSet,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {text.title[language]}
              </h3>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-sm mb-6">
                <span>
                  {text.idLabel[language]}: <strong>{wechatId}</strong>
                </span>
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

              <div className="p-3 bg-white rounded-xl mb-4 shadow-inner">
                <img
                  src={wechatQrUrl}
                  alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                  className="w-56 h-56 object-contain"
                />
              </div>

              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                {text.scan[language]}
              </p>

              <div className="flex gap-3 w-full">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all"
                >
                  {text.back[language]}
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
