'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'th'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations
const translations = {
    en: {
        // Navigation
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.callNow': 'Call Now',
        'nav.language': 'Language',

        // Hero Section
        'hero.title1': 'Transform Your Business with',
        'hero.title2': 'Expert Tech Consulting',
        'hero.subtitle': 'Accelerate your digital transformation with our comprehensive technology consulting services. From cloud migration to custom software development, we deliver solutions that drive growth.',
        'hero.consultation': 'Get Free Consultation',
        'hero.call': 'Call: 093-247-3600',

        // Services Section
        'services.title': 'Our Technology Consulting Services',
        'services.subtitle': 'Comprehensive tech solutions tailored to your business needs',
        'services.digital.title': 'Digital Transformation',
        'services.digital.desc': 'Modernize your business processes with cutting-edge digital solutions and automation strategies.',
        'services.cloud.title': 'Cloud Migration',
        'services.cloud.desc': 'Seamlessly migrate your infrastructure to the cloud with AWS, Azure, or Google Cloud platforms.',
        'services.software.title': 'Custom Software Development',
        'services.software.desc': 'Build scalable web applications, mobile apps, and enterprise software tailored to your requirements.',
        'services.security.title': 'Cybersecurity',
        'services.security.desc': 'Protect your business with comprehensive security audits, implementation, and monitoring solutions.',
        'services.performance.title': 'Performance Optimization',
        'services.performance.desc': 'Optimize your applications and infrastructure for maximum performance and cost efficiency.',
        'services.team.title': 'Team Augmentation',
        'services.team.desc': 'Scale your development team with our experienced engineers and technical specialists.',

        // About Section
        'about.title': 'Why Choose PipoX for Your Tech Consulting Needs?',
        'about.subtitle': 'With years of experience in technology consulting, we have helped numerous businesses transform their operations and achieve sustainable growth through innovative tech solutions.',
        'about.proven.title': 'Proven Track Record',
        'about.proven.desc': 'Successfully delivered 100+ projects across various industries',
        'about.expert.title': 'Expert Team',
        'about.expert.desc': 'Certified professionals with deep expertise in latest technologies',
        'about.support.title': '24/7 Support',
        'about.support.desc': 'Round-the-clock support and maintenance for all our solutions',
        'about.tech.title': 'Technologies We Work With',

        // CTA Section
        'cta.title': 'Ready to Transform Your Business?',
        'cta.subtitle': 'Let us discuss how our technology consulting services can help accelerate your digital transformation and drive sustainable growth for your business.',
        'cta.consultation': 'Get Free Consultation',
        'cta.call': 'Call: 093-247-3600',

        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Ready to start your digital transformation journey? Contact us today.',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.office': 'Office',
        'contact.location': 'Bangkok, Thailand',
        'contact.availability': 'Available Mon-Fri, 9AM-6PM',
        'contact.response': 'We respond within 24 hours',
        'contact.remote': 'Remote consultations available worldwide',
        'contact.form.title': 'Request a Free Consultation',
        'contact.form.name': 'Full Name',
        'contact.form.namePlaceholder': 'Your full name',
        'contact.form.email': 'Email Address',
        'contact.form.emailPlaceholder': 'your@email.com',
        'contact.form.company': 'Company',
        'contact.form.companyPlaceholder': 'Your company name',
        'contact.form.message': 'Project Details',
        'contact.form.messagePlaceholder': 'Tell us about your project requirements...',
        'contact.form.send': 'Send Message',

        // Footer
        'footer.description': 'Expert technology consulting services to transform your business and accelerate growth.',
        'footer.services': 'Services',
        'footer.company': 'Company',
        'footer.aboutUs': 'About Us',
        'footer.caseStudies': 'Case Studies',
        'footer.careers': 'Careers',
        'footer.contactInfo': 'Contact Info',
        'footer.copyright': '2025 PipoX Technology Consulting. All rights reserved.',
    },
    th: {
        // Navigation
        'nav.services': 'บริการ',
        'nav.about': 'เกี่ยวกับเรา',
        'nav.contact': 'ติดต่อ',
        'nav.callNow': 'โทรเลย',
        'nav.language': 'ภาษา',

        // Hero Section
        'hero.title1': 'เปลี่ยนแปลงธุรกิจของคุณด้วย',
        'hero.title2': 'ที่ปรึกษาเทคโนโลยีผู้เชี่ยวชาญ',
        'hero.subtitle': 'เร่งการเปลี่ยนแปลงดิจิทัลของคุณด้วยบริการให้คำปรึกษาเทคโนโลยีที่ครอบคลุม จากการย้ายข้อมูลไปยังคลาวด์ไปจนถึงการพัฒนาซอฟต์แวร์แบบกำหนดเอง เราส่งมอบโซลูชันที่ขับเคลื่อนการเติบโต',
        'hero.consultation': 'รับคำปรึกษาฟรี',
        'hero.call': 'โทร: 093-247-3600',

        // Services Section
        'services.title': 'บริการให้คำปรึกษาเทคโนโลยีของเรา',
        'services.subtitle': 'โซลูชันเทคโนโลยีที่ครอบคลุมและปรับแต่งตามความต้องการของธุรกิจคุณ',
        'services.digital.title': 'การเปลี่ยนแปลงดิจิทัล',
        'services.digital.desc': 'ทำให้กระบวนการธุรกิจของคุณทันสมัยด้วยโซลูชันดิจิทัลและกลยุทธ์ระบบอัตโนมัติที่ล้ำสมัย',
        'services.cloud.title': 'การย้ายข้อมูลไปยังคลาวด์',
        'services.cloud.desc': 'ย้ายโครงสร้างพื้นฐานของคุณไปยังคลาวด์อย่างราบรื่นด้วยแพลตฟอร์ม AWS, Azure หรือ Google Cloud',
        'services.software.title': 'การพัฒนาซอฟต์แวร์แบบกำหนดเอง',
        'services.software.desc': 'สร้างเว็บแอปพลิเคชันที่ขยายได้ แอปมือถือ และซอฟต์แวร์องค์กรที่ปรับแต่งตามความต้องการของคุณ',
        'services.security.title': 'ความปลอดภัยทางไซเบอร์',
        'services.security.desc': 'ปกป้องธุรกิจของคุณด้วยการตรวจสอบความปลอดภัยที่ครอบคลุม การนำไปใช้ และโซลูชันการตรวจสอบ',
        'services.performance.title': 'การเพิ่มประสิทธิภาพ',
        'services.performance.desc': 'เพิ่มประสิทธิภาพแอปพลิเคชันและโครงสร้างพื้นฐานของคุณเพื่อประสิทธิภาพสูงสุดและความคุ้มค่า',
        'services.team.title': 'การเสริมทีม',
        'services.team.desc': 'ขยายทีมพัฒนาของคุณด้วยวิศวกรที่มีประสบการณ์และผู้เชี่ยวชาญด้านเทคนิคของเรา',

        // About Section
        'about.title': 'ทำไมต้องเลือก PipoX สำหรับความต้องการด้านที่ปรึกษาเทคโนโลยีของคุณ?',
        'about.subtitle': 'ด้วยประสบการณ์หลายปีในด้านการให้คำปรึกษาเทคโนโลยี เราได้ช่วยธุรกิจมากมายเปลี่ยนแปลงการดำเนินงานและบรรลุการเติบโตอย่างยั่งยืนผ่านโซลูชันเทคโนโลยีที่นวัตกรรม',
        'about.proven.title': 'ผลงานที่พิสูจน์แล้ว',
        'about.proven.desc': 'ส่งมอบโครงการได้สำเร็จมากกว่า 100 โครงการในหลากหลายอุตสาหกรรม',
        'about.expert.title': 'ทีมผู้เชี่ยวชาญ',
        'about.expert.desc': 'ผู้เชี่ยวชาญที่ได้รับการรับรองด้วยความเชี่ยวชาญลึกในเทคโนโลยีล่าสุด',
        'about.support.title': 'การสนับสนุน 24/7',
        'about.support.desc': 'การสนับสนุนและบำรุงรักษาตลอด 24 ชั่วโมงสำหรับทุกโซลูชันของเรา',
        'about.tech.title': 'เทคโนโลยีที่เราทำงานด้วย',

        // CTA Section
        'cta.title': 'พร้อมที่จะเปลี่ยนแปลงธุรกิจของคุณแล้วหรือยัง?',
        'cta.subtitle': 'มาปรึกษากันว่าบริการให้คำปรึกษาเทคโนโลยีของเราจะช่วยเร่งการเปลี่ยนแปลงดิจิทัลและขับเคลื่อนการเติบโตอย่างยั่งยืนสำหรับธุรกิจของคุณได้อย่างไร',
        'cta.consultation': 'รับคำปรึกษาฟรี',
        'cta.call': 'โทร: 093-247-3600',

        // Contact Section
        'contact.title': 'ติดต่อเรา',
        'contact.subtitle': 'พร้อมที่จะเริ่มต้นการเดินทางการเปลี่ยนแปลงดิจิทัลของคุณแล้วหรือยัง? ติดต่อเราวันนี้',
        'contact.phone': 'โทรศัพท์',
        'contact.email': 'อีเมล',
        'contact.office': 'สำนักงาน',
        'contact.location': 'กรุงเทพมหานคร ประเทศไทย',
        'contact.availability': 'พร้อมให้บริการ จันทร์-ศุกร์ 9:00-18:00',
        'contact.response': 'เราตอบกลับภายใน 24 ชั่วโมง',
        'contact.remote': 'รับปรึกษาออนไลน์ทั่วโลก',
        'contact.form.title': 'ขอรับคำปรึกษาฟรี',
        'contact.form.name': 'ชื่อ-นามสกุล',
        'contact.form.namePlaceholder': 'กรุณากรอกชื่อ-นามสกุล',
        'contact.form.email': 'ที่อยู่อีเมล',
        'contact.form.emailPlaceholder': 'your@email.com',
        'contact.form.company': 'บริษัท',
        'contact.form.companyPlaceholder': 'ชื่อบริษัทของคุณ',
        'contact.form.message': 'รายละเอียดโครงการ',
        'contact.form.messagePlaceholder': 'บอกเราเกี่ยวกับความต้องการโครงการของคุณ...',
        'contact.form.send': 'ส่งข้อความ',

        // Footer
        'footer.description': 'บริการให้คำปรึกษาเทคโนโลยีผู้เชี่ยวชาญเพื่อเปลี่ยนแปลงธุรกิจของคุณและเร่งการเติบโต',
        'footer.services': 'บริการ',
        'footer.company': 'บริษัท',
        'footer.aboutUs': 'เกี่ยวกับเรา',
        'footer.caseStudies': 'กรณีศึกษา',
        'footer.careers': 'ร่วมงาน',
        'footer.contactInfo': 'ข้อมูลติดต่อ',
        'footer.copyright': '© 2025 PipoX Technology Consulting สงวนลิขสิทธิ์',
    }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        // Check if language is stored in localStorage
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'th')) {
            setLanguage(savedLanguage)
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
