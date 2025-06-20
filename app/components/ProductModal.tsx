'use client';

import { useLanguage } from './LanguageProvider';
import { useEffect } from 'react';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    productKey: string;
}

export default function ProductModal({ isOpen, onClose, productKey }: ProductModalProps) {
    const { t } = useLanguage();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            onKeyDown={(e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
        >
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-2 transition-colors"
                >
                    <svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {t(`products.${productKey}.title`)}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            {t(`products.${productKey}.desc`)}
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* ROI Benefits */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {t(`products.${productKey}.roiTitle`)}
                                </h3>
                            </div>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">•</span>
                                    {t(`products.${productKey}.roiBenefit1`)}
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">•</span>
                                    {t(`products.${productKey}.roiBenefit2`)}
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">•</span>
                                    {t(`products.${productKey}.roiBenefit3`)}
                                </li>
                            </ul>
                        </div>

                        {/* Cost Reduction */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {t(`products.${productKey}.costTitle`)}
                                </h3>
                            </div>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    {t(`products.${productKey}.costBenefit1`)}
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    {t(`products.${productKey}.costBenefit2`)}
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    {t(`products.${productKey}.costBenefit3`)}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {t(`products.${productKey}.impactTitle`)}
                            </h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                            {t(`products.${productKey}.impactDesc`)}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                            {t(`products.${productKey}.featuresTitle`)}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-slate-700 dark:text-slate-300">{t(`products.${productKey}.feature1`)}</span>
                            </div>
                            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-slate-700 dark:text-slate-300">{t(`products.${productKey}.feature2`)}</span>
                            </div>
                            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-slate-700 dark:text-slate-300">{t(`products.${productKey}.feature3`)}</span>
                            </div>
                            <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-slate-700 dark:text-slate-300">{t(`products.${productKey}.feature4`)}</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <span>{t('products.modal.cta')}</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
