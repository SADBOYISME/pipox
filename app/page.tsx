'use client'

import { useEffect, useState } from 'react';
import { useLanguage } from './components/LanguageProvider'
import LanguageSwitcher from './components/LanguageSwitcher'
import ProductModal from './components/ProductModal'
import PartnersSlider from './components/PartnersSlider'

export default function Home() {
  const { t } = useLanguage();
  const [showClientBg, setShowClientBg] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    setShowClientBg(true);
  }, []);

  const handleProductClick = (productKey: string) => {
    setSelectedProduct(productKey);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <div className="min-h-screen bg-white dark:from-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">PipoX</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.services')}</a>
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.about')}</a>
              <a href="#products" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.products')}</a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.contact')}</a>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <a href="tel:0932473600" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                {t('nav.callNow')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
        {/* Subtle Background Pattern */}
        {showClientBg && (
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge/Eyebrow */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {t('language') === 'en' ? 'Premium Tech Consulting' : 'ที่ปรึกษาเทคโนโลยีระดับพรีเมียม'}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                {t('hero.title1')}{' '}
                <span className="relative inline-block">
                  <span className="text-blue-600 dark:text-blue-400">{t('hero.title2')}</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-100 dark:bg-blue-900/30 -z-10"></div>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {t('hero.consultation')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="tel:0932473600" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-200"
                >
                  {t('hero.call')}
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-illustration.svg" 
                  alt="Technology Consulting Illustration" 
                  className="w-full h-auto"
                  width="600"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Moved right after Hero */}
      <section className="py-12 bg-white dark:bg-slate-800 border-y border-slate-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              {t('partners.title')}
            </p>
          </div>

          {/* Partners Slider */}
          <div className="relative">
            <PartnersSlider />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('products.title')}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t('products.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Project Platform */}
            <div
              onClick={() => handleProductClick('ai')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProductClick('ai');
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Learn more about AI Project Platform"
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors">
                  {t('products.ai.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('products.ai.desc')}</p>

                {/* Click indicator */}
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">{t('products.modal.clickToLearn')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div
              onClick={() => handleProductClick('cloud')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProductClick('cloud');
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Learn more about Cloud Infrastructure"
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors">
                  {t('products.cloud.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('products.cloud.desc')}</p>

                <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">{t('products.modal.clickToLearn')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Automation Suite */}
            <div
              onClick={() => handleProductClick('automation')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProductClick('automation');
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Learn more about Business Automation Suite"
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors">
                  {t('products.automation.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('products.automation.desc')}</p>

                <div className="flex items-center text-sm text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">{t('products.modal.clickToLearn')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Data Analytics Tools */}
            <div
              onClick={() => handleProductClick('analytics')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProductClick('analytics');
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Learn more about Data Analytics Tools"
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors">
                  {t('products.analytics.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('products.analytics.desc')}</p>

                <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">{t('products.modal.clickToLearn')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Horizontal Scrollable List */}
          <div className="relative">
            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}>
              <div className="flex gap-6 min-w-max">
                {/* Digital Transformation */}
                <div className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" style={{ scrollSnapAlign: 'start' }}>
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t('services.digital.title')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('services.digital.desc')}
                  </p>
                </div>

                {/* Cloud Migration */}
                <div className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" style={{ scrollSnapAlign: 'start' }}>
                  <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t('services.cloud.title')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('services.cloud.desc')}
                  </p>
                </div>

                {/* Custom Software Development */}
                <div className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" style={{ scrollSnapAlign: 'start' }}>
                  <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t('services.software.title')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('services.software.desc')}
                  </p>
                </div>

                {/* Cybersecurity */}
                <div className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" style={{ scrollSnapAlign: 'start' }}>
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t('services.security.title')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('services.security.desc')}
                  </p>
                </div>

                {/* Performance Optimization */}
                <div className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" style={{ scrollSnapAlign: 'start' }}>
                  <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t('services.performance.title')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('services.performance.desc')}
                  </p>
                </div>

                {/* Team Augmentation */}
                <div className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" style={{ scrollSnapAlign: 'start' }}>
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t('services.team.title')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('services.team.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {t('about.subtitle')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('about.proven.title')}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{t('about.proven.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('about.expert.title')}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{t('about.expert.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('about.support.title')}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{t('about.support.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('about.tech.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Cloud Platforms */}
                <div className="text-center">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-3 min-h-[120px] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      {/* AWS Logo */}
                      <div className="w-10 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AWS</span>
                      </div>
                      {/* Azure Logo */}
                      <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Azure</span>
                      </div>
                      {/* GCP Logo */}
                      <div className="w-10 h-6 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">GCP</span>
                      </div>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Cloud Platforms</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">AWS, Microsoft Azure, Google Cloud</p>
                </div>

                {/* Frontend Technologies */}
                <div className="text-center">
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-3 min-h-[120px] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      {/* React Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
                        </svg>
                      </div>
                      {/* Next.js Logo */}
                      <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                        <span className="text-white dark:text-black text-xs font-bold">N</span>
                      </div>
                      {/* Vue Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Vue</span>
                      </div>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-semibold text-sm">Frontend</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">React, Next.js, Vue.js</p>
                </div>

                {/* Backend Technologies */}
                <div className="text-center">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-3 min-h-[120px] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      {/* Node.js Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm0 2.03L12 4c4.11 0 7.43 3.32 7.43 7.43S16.11 18.86 12 18.86 4.57 15.54 4.57 11.43 7.89 4 12 4z" />
                        </svg>
                      </div>
                      {/* Python Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Py</span>
                      </div>
                      {/* .NET Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">.NET</span>
                      </div>
                    </div>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Backend</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Node.js, Python, .NET Core</p>
                </div>

                {/* Database Technologies */}
                <div className="text-center">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-3 min-h-[120px] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      {/* PostgreSQL Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.8 12.56c0-3.37-2.73-6.1-6.1-6.1-.1 0-.21 0-.31.01C16.27 3.18 13.38.8 9.9.8 5.43.8 1.8 4.43 1.8 8.9c0 .21.01.42.02.63C.74 10.24 0 11.49 0 12.9c0 2.49 2.01 4.5 4.5 4.5h14.8c2.49 0 4.5-2.01 4.5-4.5 0-.13-.01-.26-.02-.39.01-.28.02-.57.02-.85z" />
                        </svg>
                      </div>
                      {/* MongoDB Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      {/* Redis Logo */}
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">R</span>
                      </div>
                    </div>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">Databases</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">PostgreSQL, MongoDB, Redis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('reviews.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SCB Review */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SCB
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('reviews.scb.name')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t('reviews.scb.position')}</p>
                </div>
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic">
                &ldquo;{t('reviews.scb.text')}&rdquo;
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`scb-star-${i + 1}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* SCG Review */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SCG
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('reviews.scg.name')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t('reviews.scg.position')}</p>
                </div>
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic">
                &ldquo;{t('reviews.scg.text')}&rdquo;
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`scg-star-${i + 1}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* PTT Review */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  PTT
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('reviews.ptt.name')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t('reviews.ptt.position')}</p>
                </div>
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic">
                &ldquo;{t('reviews.ptt.text')}&rdquo;
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`ptt-star-${i + 1}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* CP Review */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  CP
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('reviews.cp.name')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t('reviews.cp.position')}</p>
                </div>
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic">
                &ldquo;{t('reviews.cp.text')}&rdquo;
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`cp-star-${i + 1}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* TTB Review */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  TTB
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('reviews.ttb.name')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t('reviews.ttb.position')}</p>
                </div>
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic">
                &ldquo;{t('reviews.ttb.text')}&rdquo;
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`ttb-star-${i + 1}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              {t('cta.consultation')}
            </a>
            <a href="tel:0932473600" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('cta.call')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{t('contact.phone')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">093-247-3600</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('contact.availability')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{t('contact.email')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">contact@pipox.com</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('contact.response')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{t('contact.office')}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{t('contact.location')}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('contact.remote')}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('contact.form.title')}</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">PipoX</h3>
              <p className="text-slate-300 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-slate-300">
                <li><span className="hover:text-white transition-colors cursor-pointer">{t('services.digital.title')}</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t('services.cloud.title')}</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t('services.software.title')}</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t('services.security.title')}</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t('footer.caseStudies')}</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t('footer.careers')}</span></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
              <ul className="space-y-2 text-slate-300">
                <li>{t('contact.phone')}: 093-247-3600</li>
                <li>{t('contact.email')}: contact@pipox.com</li>
                <li>{t('contact.location')}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        isOpen={modalOpen}
        onClose={closeModal}
        productKey={selectedProduct}
      />
    </div>
  );
}
