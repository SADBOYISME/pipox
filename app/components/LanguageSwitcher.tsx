'use client'

import { useLanguage } from './LanguageProvider'

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="relative inline-block">
            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === 'en'
                            ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                        }`}
                >
                    🇺🇸 EN
                </button>
                <button
                    onClick={() => setLanguage('th')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === 'th'
                            ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                        }`}
                >
                    🇹🇭 TH
                </button>
            </div>
        </div>
    )
}
