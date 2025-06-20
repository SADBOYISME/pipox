'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react'

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
        'nav.products': 'Products',

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

        // Products Section
        'products.title': 'Our Technology Products',
        'products.subtitle': 'Innovative solutions to accelerate your business',
        'products.ai.title': 'AI Project Platform',
        'products.ai.desc': 'End-to-end AI project delivery, from ideation to deployment, tailored for your business needs.',
        'products.cloud.title': 'Cloud Infrastructure',
        'products.cloud.desc': 'Robust, scalable, and secure cloud solutions for modern enterprises.',
        'products.automation.title': 'Business Automation Suite',
        'products.automation.desc': 'Automate workflows and processes to boost efficiency and reduce costs.',
        'products.analytics.title': 'Data Analytics Tools',
        'products.analytics.desc': 'Powerful analytics and visualization tools for data-driven decision making.',

        // AI Platform Detailed Information
        'products.ai.roiTitle': 'ROI Improvements',
        'products.ai.roiBenefit1': 'Accelerate decision-making by 60% with AI-powered insights',
        'products.ai.roiBenefit2': 'Increase revenue by 25-40% through intelligent automation',
        'products.ai.roiBenefit3': 'Boost customer satisfaction by 35% with personalized experiences',
        'products.ai.costTitle': 'Cost Reduction',
        'products.ai.costBenefit1': 'Reduce operational costs by 30-50% through automation',
        'products.ai.costBenefit2': 'Minimize human errors and rework costs by 80%',
        'products.ai.costBenefit3': 'Lower infrastructure costs with efficient AI resource management',
        'products.ai.impactTitle': 'Professional Business Impact',
        'products.ai.impactDesc': 'Transform your business into a data-driven organization with cutting-edge AI capabilities that provide competitive advantages, improve operational efficiency, and create new revenue streams through intelligent automation and predictive analytics.',
        'products.ai.featuresTitle': 'Key Features',
        'products.ai.feature1': 'Machine Learning Model Development',
        'products.ai.feature2': 'Natural Language Processing Integration',
        'products.ai.feature3': 'Computer Vision Solutions',
        'products.ai.feature4': 'Predictive Analytics Dashboard',

        // Cloud Infrastructure Detailed Information
        'products.cloud.roiTitle': 'ROI Improvements',
        'products.cloud.roiBenefit1': 'Increase system reliability to 99.9% uptime',
        'products.cloud.roiBenefit2': 'Scale resources dynamically saving 40% on unused capacity',
        'products.cloud.roiBenefit3': 'Accelerate deployment speed by 10x with automated CI/CD',
        'products.cloud.costTitle': 'Cost Reduction',
        'products.cloud.costBenefit1': 'Reduce infrastructure costs by 35-60% with pay-as-you-use',
        'products.cloud.costBenefit2': 'Eliminate hardware maintenance and upgrade costs',
        'products.cloud.costBenefit3': 'Lower IT staffing costs with managed services',
        'products.cloud.impactTitle': 'Professional Business Impact',
        'products.cloud.impactDesc': 'Modernize your IT infrastructure with enterprise-grade cloud solutions that ensure business continuity, enhance security, enable global scalability, and provide the foundation for digital innovation and growth.',
        'products.cloud.featuresTitle': 'Key Features',
        'products.cloud.feature1': 'Multi-Cloud Architecture Design',
        'products.cloud.feature2': 'Auto-scaling and Load Balancing',
        'products.cloud.feature3': 'Advanced Security and Compliance',
        'products.cloud.feature4': '24/7 Monitoring and Support',

        // Business Automation Detailed Information
        'products.automation.roiTitle': 'ROI Improvements',
        'products.automation.roiBenefit1': 'Increase productivity by 45% through process automation',
        'products.automation.roiBenefit2': 'Improve accuracy by 95% with automated workflows',
        'products.automation.roiBenefit3': 'Enhance customer response time by 70%',
        'products.automation.costTitle': 'Cost Reduction',
        'products.automation.costBenefit1': 'Reduce manual processing costs by 60-80%',
        'products.automation.costBenefit2': 'Minimize compliance and audit costs through automation',
        'products.automation.costBenefit3': 'Lower training costs with standardized processes',
        'products.automation.impactTitle': 'Professional Business Impact',
        'products.automation.impactDesc': 'Revolutionize your operations with intelligent automation that eliminates repetitive tasks, ensures consistent quality, improves compliance, and allows your team to focus on strategic initiatives that drive business growth.',
        'products.automation.featuresTitle': 'Key Features',
        'products.automation.feature1': 'Workflow Design and Optimization',
        'products.automation.feature2': 'RPA (Robotic Process Automation)',
        'products.automation.feature3': 'Integration with Existing Systems',
        'products.automation.feature4': 'Performance Analytics and Reporting',

        // Data Analytics Detailed Information
        'products.analytics.roiTitle': 'ROI Improvements',
        'products.analytics.roiBenefit1': 'Improve decision accuracy by 85% with data insights',
        'products.analytics.roiBenefit2': 'Increase sales by 30% through customer behavior analysis',
        'products.analytics.roiBenefit3': 'Optimize operations saving 25% in resource allocation',
        'products.analytics.costTitle': 'Cost Reduction',
        'products.analytics.costBenefit1': 'Reduce data processing costs by 50% with automation',
        'products.analytics.costBenefit2': 'Minimize reporting overhead with self-service analytics',
        'products.analytics.costBenefit3': 'Lower compliance costs through automated data governance',
        'products.analytics.impactTitle': 'Professional Business Impact',
        'products.analytics.impactDesc': 'Unlock the power of your data with advanced analytics solutions that provide real-time insights, predictive capabilities, and actionable intelligence to drive strategic decisions and competitive advantage.',
        'products.analytics.featuresTitle': 'Key Features',
        'products.analytics.feature1': 'Real-time Data Visualization',
        'products.analytics.feature2': 'Predictive Modeling and Forecasting',
        'products.analytics.feature3': 'Custom Dashboard Development',
        'products.analytics.feature4': 'Advanced Reporting and Insights',

        // Product Modal
        'products.modal.cta': 'Get Started with This Solution',
        'products.modal.clickToLearn': 'Click to Learn More',

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

        // Partners Section
        'partners.title': 'Our Trusted Partners',
        'partners.subtitle': 'We collaborate with industry leaders to deliver exceptional technology solutions',

        // Customer Reviews Section
        'reviews.title': 'Trusted by Leading Thai Companies',
        'reviews.subtitle': 'See what our enterprise partners say about our technology consulting services',
        'reviews.scb.name': 'Siam Commercial Bank',
        'reviews.scb.position': 'Chief Technology Officer',
        'reviews.scb.text': 'PipoX helped us modernize our banking infrastructure with their cloud migration expertise. The digital transformation journey was seamless and resulted in 40% improved system performance.',
        'reviews.scg.name': 'SCG Group',
        'reviews.scg.position': 'Digital Innovation Director',
        'reviews.scg.text': 'Their AI automation solutions revolutionized our manufacturing processes. We achieved 30% cost reduction and significantly improved operational efficiency across all facilities.',
        'reviews.ptt.name': 'PTT Public Company Limited',
        'reviews.ptt.position': 'Head of Digital Technology',
        'reviews.ptt.text': 'Outstanding cybersecurity implementation and 24/7 support. PipoX team delivered enterprise-grade security solutions that protect our critical energy infrastructure.',
        'reviews.cp.name': 'Charoen Pokphand Group',
        'reviews.cp.position': 'Chief Information Officer',
        'reviews.cp.text': 'Excellent custom software development for our agricultural technology platform. Their expertise in data analytics helped us optimize supply chain operations globally.',
        'reviews.ttb.name': 'TMBThanachart Bank',
        'reviews.ttb.position': 'Executive Vice President - Technology',
        'reviews.ttb.text': 'Professional team augmentation services that scaled our fintech development capabilities. Delivered robust digital banking solutions ahead of schedule.',

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
        'nav.products': 'สินค้า',

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

        // Products Section
        'products.title': 'ผลิตภัณฑ์เทคโนโลยีของเรา',
        'products.subtitle': 'โซลูชันนวัตกรรมเพื่อเร่งธุรกิจของคุณ',
        'products.ai.title': 'แพลตฟอร์มโครงการ AI',
        'products.ai.desc': 'บริการโครงการ AI ครบวงจร ตั้งแต่ไอเดียจนถึงใช้งานจริง ตอบโจทย์ธุรกิจของคุณ',
        'products.cloud.title': 'โครงสร้างพื้นฐานคลาวด์',
        'products.cloud.desc': 'โซลูชันคลาวด์ที่แข็งแกร่ง ขยายได้ และปลอดภัยสำหรับองค์กรยุคใหม่',
        'products.automation.title': 'ชุดระบบอัตโนมัติธุรกิจ',
        'products.automation.desc': 'ทำงานอัตโนมัติ เพิ่มประสิทธิภาพ ลดต้นทุน',
        'products.analytics.title': 'เครื่องมือวิเคราะห์ข้อมูล',
        'products.analytics.desc': 'เครื่องมือวิเคราะห์และแสดงผลข้อมูลทรงพลังสำหรับการตัดสินใจเชิงธุรกิจ',

        // AI Platform Detailed Information
        'products.ai.roiTitle': 'การปรับปรุง ROI',
        'products.ai.roiBenefit1': 'เร่งความเร็วในการตัดสินใจถึง 60% ด้วยข้อมูลเชิงลึกจาก AI',
        'products.ai.roiBenefit2': 'เพิ่มรายได้ 25-40% ผ่านการทำงานอัตโนมัติที่ชาญฉลาด',
        'products.ai.roiBenefit3': 'เพิ่มความพึงพอใจของลูกค้า 35% ด้วยประสบการณ์ที่ปรับให้เหมาะสม',
        'products.ai.costTitle': 'การลดต้นทุน',
        'products.ai.costBenefit1': 'ลดต้นทุนการดำเนินงาน 30-50% ผ่านการทำงานอัตโนมัติ',
        'products.ai.costBenefit2': 'ลดข้อผิดพลาดของมนุษย์และต้นทุนการทำงานซ้ำ 80%',
        'products.ai.costBenefit3': 'ลดต้นทุนโครงสร้างพื้นฐานด้วยการจัดการทรัพยากร AI ที่มีประสิทธิภาพ',
        'products.ai.impactTitle': 'ผลกระทบทางธุรกิจระดับมืออาชีพ',
        'products.ai.impactDesc': 'เปลี่ยนธุรกิจของคุณให้เป็นองค์กรที่ขับเคลื่อนด้วยข้อมูลด้วยความสามารถ AI ที่ทันสมัยซึ่งมอบความได้เปรียบทางการแข่งขัน ปรับปรุงประสิทธิภาพการดำเนินงาน และสร้างรายได้ใหม่ผ่านการทำงานอัตโนมัติที่ชาญฉลาดและการวิเคราะห์เชิงพยากรณ์',
        'products.ai.featuresTitle': 'คุณสมบัติเด่น',
        'products.ai.feature1': 'การพัฒนาโมเดลการเรียนรู้ของเครื่อง',
        'products.ai.feature2': 'การรวมการประมวลผลภาษาธรรมชาติ',
        'products.ai.feature3': 'โซลูชันการมองเห็นด้วยคอมพิวเตอร์',
        'products.ai.feature4': 'แดชบอร์ดการวิเคราะห์เชิงพยากรณ์',

        // Cloud Infrastructure Detailed Information
        'products.cloud.roiTitle': 'การปรับปรุง ROI',
        'products.cloud.roiBenefit1': 'เพิ่มความน่าเชื่อถือของระบบเป็น 99.9% ของเวลาใช้งาน',
        'products.cloud.roiBenefit2': 'ปรับขนาดทรัพยากรได้อย่างยืดหยุ่นประหยัด 40% จากความจุที่ไม่ได้ใช้งาน',
        'products.cloud.roiBenefit3': 'เร่งความเร็วในการปรับใช้ถึง 10 เท่าด้วย CI/CD อัตโนมัติ',
        'products.cloud.costTitle': 'การลดต้นทุน',
        'products.cloud.costBenefit1': 'ลดต้นทุนโครงสร้างพื้นฐาน 35-60% ด้วยการจ่ายตามการใช้งาน',
        'products.cloud.costBenefit2': 'กำจัดต้นทุนการบำรุงรักษาและอัปเกรดฮาร์ดแวร์',
        'products.cloud.costBenefit3': 'ลดต้นทุนการจัดการ IT ด้วยบริการที่จัดการ',
        'products.cloud.impactTitle': 'ผลกระทบทางธุรกิจระดับมืออาชีพ',
        'products.cloud.impactDesc': 'ปรับปรุงโครงสร้างพื้นฐานด้าน IT ของคุณด้วยโซลูชันคลาวด์ระดับองค์กรที่รับประกันความต่อเนื่องของธุรกิจ เพิ่มความปลอดภัย เปิดใช้งานการปรับขนาดทั่วโลก และจัดเตรียมพื้นฐานสำหรับนวัตกรรมและการเติบโตทางดิจิทัล',
        'products.cloud.featuresTitle': 'คุณสมบัติเด่น',
        'products.cloud.feature1': 'การออกแบบสถาปัตยกรรมหลายคลาวด์',
        'products.cloud.feature2': 'การปรับขนาดอัตโนมัติและการกระจายโหลด',
        'products.cloud.feature3': 'ความปลอดภัยและการปฏิบัติตามข้อกำหนดขั้นสูง',
        'products.cloud.feature4': 'การตรวจสอบและสนับสนุนตลอด 24 ชั่วโมง',

        // Business Automation Detailed Information
        'products.automation.roiTitle': 'การปรับปรุง ROI',
        'products.automation.roiBenefit1': 'เพิ่มผลผลิต 45% ผ่านการทำงานอัตโนมัติของกระบวนการ',
        'products.automation.roiBenefit2': 'ปรับปรุงความถูกต้อง 95% ด้วยการทำงานอัตโนมัติของเวิร์กโฟลว์',
        'products.automation.roiBenefit3': 'ปรับปรุงเวลาตอบสนองของลูกค้า 70%',
        'products.automation.costTitle': 'การลดต้นทุน',
        'products.automation.costBenefit1': 'ลดต้นทุนการประมวลผลด้วยมือ 60-80%',
        'products.automation.costBenefit2': 'ลดต้นทุนการปฏิบัติตามและการตรวจสอบผ่านการทำงานอัตโนมัติ',
        'products.automation.costBenefit3': 'ลดต้นทุนการฝึกอบรมด้วยกระบวนการมาตรฐาน',
        'products.automation.impactTitle': 'ผลกระทบทางธุรกิจระดับมืออาชีพ',
        'products.automation.impactDesc': 'ปฏิวัติการดำเนินงานของคุณด้วยการทำงานอัตโนมัติที่ชาญฉลาดซึ่งขจัดงานที่ซ้ำซาก ปรับประกันคุณภาพที่สม่ำเสมอ ปรับปรุงการปฏิบัติตามข้อกำหนด และช่วยให้ทีมของคุณมุ่งเน้นไปที่กลยุทธ์ที่ขับเคลื่อนการเติบโตของธุรกิจ',
        'products.automation.featuresTitle': 'คุณสมบัติเด่น',
        'products.automation.feature1': 'การออกแบบและปรับแต่งเวิร์กโฟลว์',
        'products.automation.feature2': 'RPA (Robotic Process Automation)',
        'products.automation.feature3': 'การรวมกับระบบที่มีอยู่',
        'products.automation.feature4': 'การวิเคราะห์และรายงานประสิทธิภาพ',

        // Data Analytics Detailed Information
        'products.analytics.roiTitle': 'การปรับปรุง ROI',
        'products.analytics.roiBenefit1': 'ปรับปรุงความแม่นยำในการตัดสินใจ 85% ด้วยข้อมูลเชิงลึก',
        'products.analytics.roiBenefit2': 'เพิ่มยอดขาย 30% ผ่านการวิเคราะห์พฤติกรรมของลูกค้า',
        'products.analytics.roiBenefit3': 'ปรับให้เหมาะสมกับการดำเนินงานประหยัด 25% ในการจัดสรรทรัพยากร',
        'products.analytics.costTitle': 'การลดต้นทุน',
        'products.analytics.costBenefit1': 'ลดต้นทุนการประมวลผลข้อมูล 50% ด้วยการทำงานอัตโนมัติ',
        'products.analytics.costBenefit2': 'ลดภาระการรายงานด้วยการวิเคราะห์แบบบริการตนเอง',
        'products.analytics.costBenefit3': 'ลดต้นทุนการปฏิบัติตามข้อกำหนดผ่านการกำกับดูแลข้อมูลอัตโนมัติ',
        'products.analytics.impactTitle': 'ผลกระทบทางธุรกิจระดับมืออาชีพ',
        'products.analytics.impactDesc': 'ปลดล็อกพลังของข้อมูลของคุณด้วยโซลูชันการวิเคราะห์ขั้นสูงที่ให้ข้อมูลเชิงลึกแบบเรียลไทม์ ความสามารถในการพยากรณ์ และข้อมูลเชิงปฏิบัติเพื่อขับเคลื่อนการตัดสินใจเชิงกลยุทธ์และความได้เปรียบทางการแข่งขัน',
        'products.analytics.featuresTitle': 'คุณสมบัติเด่น',
        'products.analytics.feature1': 'การแสดงผลข้อมูลแบบเรียลไทม์',
        'products.analytics.feature2': 'การสร้างแบบจำลองและการพยากรณ์เชิงพยากรณ์',
        'products.analytics.feature3': 'การพัฒนาแดชบอร์ดแบบกำหนดเอง',
        'products.analytics.feature4': 'การรายงานและข้อมูลเชิงลึกขั้นสูง',

        // Product Modal
        'products.modal.cta': 'เริ่มต้นกับโซลูชันนี้',
        'products.modal.clickToLearn': 'คลิกเพื่อเรียนรู้เพิ่มเติม',

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

        // Partners Section
        'partners.title': 'พันธมิตรที่เชื่อถือได้ของเรา',
        'partners.subtitle': 'เราร่วมมือกับผู้นำในอุตสาหกรรมเพื่อส่งมอบโซลูชันเทคโนโลยีที่ยอดเยี่ยม',

        // Customer Reviews Section
        'reviews.title': 'ได้รับความไว้วางใจจากบริษัทชั้นนำของไทย',
        'reviews.subtitle': 'ดูความคิดเห็นจากพันธมิตรองค์กรเกี่ยวกับบริการให้คำปรึกษาเทคโนโลยีของเรา',
        'reviews.scb.name': 'ธนาคารไทยพาณิชย์',
        'reviews.scb.position': 'หัวหน้าเจ้าหน้าที่เทคโนโลยี',
        'reviews.scb.text': 'PipoX ช่วยเราปรับปรุงโครงสร้างพื้นฐานของธนาคารด้วยความเชี่ยวชาญในการย้ายข้อมูลไปยังคลาวด์ การเดินทางสู่การเปลี่ยนแปลงดิจิทัลเป็นไปอย่างราบรื่นและส่งผลให้ประสิทธิภาพของระบบดีขึ้น 40%',
        'reviews.scg.name': 'เอสซีจี กรุ๊ป',
        'reviews.scg.position': 'ผู้อำนวยการนวัตกรรมดิจิทัล',
        'reviews.scg.text': 'โซลูชันการทำงานอัตโนมัติด้วย AI ของพวกเขาปฏิวัติกระบวนการผลิตของเรา เราบรรลุการลดต้นทุน 30% และปรับปรุงประสิทธิภาพการดำเนินงานอย่างมีนัยสำคัญในทุกโรงงาน',
        'reviews.ptt.name': 'ปตท. จำกัด (มหาชน)',
        'reviews.ptt.position': 'หัวหน้าเทคโนโลยีดิจิทัล',
        'reviews.ptt.text': 'การใช้งานระบบรักษาความปลอดภัยไซเบอร์ที่โดดเด่นและการสนับสนุนตลอด 24 ชั่วโมง ทีม PipoX ส่งมอบโซลูชันความปลอดภัยระดับองค์กรที่ปกป้องโครงสร้างพื้นฐานด้านพลังงานที่สำคัญของเรา',
        'reviews.cp.name': 'เครือเจริญโภคภัณฑ์',
        'reviews.cp.position': 'หัวหน้าเจ้าหน้าที่สารสนเทศ',
        'reviews.cp.text': 'การพัฒนาซอฟต์แวร์แบบกำหนดเองที่ยอดเยี่ยมสำหรับแพลตฟอร์มเทคโนโลยีเกษตรของเรา ความเชี่ยวชาญในการวิเคราะห์ข้อมูลช่วยเราเพิ่มประสิทธิภาพการดำเนินงานห่วงโซ่อุปทานทั่วโลก',
        'reviews.ttb.name': 'ธนาคารทีเอ็มบีธนชาต',
        'reviews.ttb.position': 'รองผู้จัดการใหญ่ - เทคโนโลยี',
        'reviews.ttb.text': 'บริการเสริมทีมระดับมืออาชีพที่ขยายขีดความสามารถในการพัฒนาฟินเทคของเรา ส่งมอบโซลูชันธนาคารดิจิทัลที่แข็งแกร่งก่อนกำหนด',

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

    const contextValue = useMemo(() => {
        const t = (key: string): string => {
            return translations[language][key as keyof typeof translations[typeof language]] || key
        }

        return {
            language,
            setLanguage: handleSetLanguage,
            t
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={contextValue}>
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
