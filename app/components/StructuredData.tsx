export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "PipoX Technology Consulting",
        "description": "Expert technology consulting services including digital transformation, cloud migration, software development, and IT strategy consulting.",
        "url": "https://pipox.chobchuen.com",
        "telephone": "+66932473600",
        "email": "contact@pipox.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangkok",
            "addressCountry": "Thailand"
        },
        "serviceType": [
            "Digital Transformation",
            "Cloud Migration",
            "Software Development",
            "Cybersecurity Consulting",
            "IT Strategy Consulting"
        ],
        "areaServed": {
            "@type": "Country",
            "name": "Thailand"
        },
        "founder": {
            "@type": "Organization",
            "name": "PipoX"
        },
        "sameAs": [
            "https://linkedin.com/company/pipox",
            "https://twitter.com/pipox"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
