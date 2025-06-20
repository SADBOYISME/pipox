'use client'

import { useEffect } from 'react'
import { useLanguage } from './LanguageProvider'

export default function DynamicLangWrapper() {
    const { language } = useLanguage()

    useEffect(() => {
        // Update the html lang attribute when language changes
        if (typeof document !== 'undefined') {
            document.documentElement.lang = language
        }
    }, [language])

    return null
}
