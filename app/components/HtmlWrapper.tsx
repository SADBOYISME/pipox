'use client'

import { useLanguage } from './LanguageProvider'

export default function HtmlWrapper({
    children
}: {
    children: React.ReactNode
}) {
    const { language } = useLanguage()

    return (
        <html lang={language}>
            {children}
        </html>
    )
}
