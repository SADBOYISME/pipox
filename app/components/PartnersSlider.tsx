'use client'

import React from 'react'

interface PartnerLogo {
    name: string
    logo: string
    width?: number
    height?: number
}

const PARTNER_LOGOS: PartnerLogo[] = [
    {
        name: 'AWS',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkY5OTAwIiByeD0iOCIvPgo8dGV4dCB4PSI1MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BV1M8L3RleHQ+Cjwvc3ZnPgo=',
        width: 100,
        height: 60
    },
    {
        name: 'Microsoft Azure',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDA3OEQ0IiByeD0iOCIvPgo8dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BenVyZTwvdGV4dD4KPC9zdmc+Cg==',
        width: 120,
        height: 60
    },
    {
        name: 'Google Cloud',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJnY3AiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzQyODVGNCIvPgo8c3RvcCBvZmZzZXQ9IjMzJSIgc3R5bGU9InN0b3AtY29sb3I6I0VBNDMzNSIvPgo8c3RvcCBvZmZzZXQ9IjY2JSIgc3R5bGU9InN0b3AtY29sb3I6I0ZCQkMwNCIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNEE4NTMiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2djcCkiIHJ4PSI4Ii8+Cjx0ZXh0IHg9IjYwIiB5PSIzNyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdvb2dsZSBDbG91ZDwvdGV4dD4KPC9zdmc+Cg==',
        width: 120,
        height: 60
    },
    {
        name: 'React',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNjFEQUZCIiByeD0iOCIvPgo8dGV4dCB4PSI1MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMzI3MkEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJlYWN0PC90ZXh0Pgo8L3N2Zz4K',
        width: 100,
        height: 60
    },
    {
        name: 'Next.js',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDAwMDAwIiByeD0iOCIvPgo8dGV4dCB4PSI1MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OZXh0LmpzPC90ZXh0Pgo8L3N2Zz4K',
        width: 100,
        height: 60
    },
    {
        name: 'Node.js',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMzM5OTMzIiByeD0iOCIvPgo8dGV4dCB4PSI1MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ob2RlLmpzPC90ZXh0Pgo8L3N2Zz4K',
        width: 100,
        height: 60
    },
    {
        name: 'PostgreSQL',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMzM2NzkxIiByeD0iOCIvPgo8dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qb3N0Z3JlU1FMPC90ZXh0Pgo8L3N2Zz4K',
        width: 120,
        height: 60
    },
    {
        name: 'MongoDB',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTEwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTEwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNDdBMjQ4IiByeD0iOCIvPgo8dGV4dCB4PSI1NSIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb25nb0RCPC90ZXh0Pgo8L3N2Zz4K',
        width: 110,
        height: 60
    },
    {
        name: 'Docker',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMjQ5NkVEIiByeD0iOCIvPgo0dGV4dCB4PSI1MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Eb2NrZXI8L3RleHQ+Cjwvc3ZnPgo=',
        width: 100,
        height: 60
    },
    {
        name: 'Kubernetes',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTMwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTMwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMzI2Q0U1IiByeD0iOCIvPgo8dGV4dCB4PSI2NSIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5LdWJlcm5ldGVzPC90ZXh0Pgo8L3N2Zz4K',
        width: 130,
        height: 60
    }
]

interface PartnersSliderProps {
    className?: string
}

export default function PartnersSlider({ className = '' }: PartnersSliderProps) {
    return (
        <div className={`group w-full overflow-hidden whitespace-nowrap py-8 ${className}`}
            style={{
                maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)'
            }}>
            <div className="inline-block animate-scroll-infinite">
                {/* First set of logos */}
                {PARTNER_LOGOS.map((partner, index) => (
                    <div
                        key={`partner-a-${partner.name}-${index}`}
                        className="mx-8 inline-block transition-all duration-300 hover:scale-110 filter hover:brightness-110"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            width={partner.width ?? 100}
                            height={partner.height ?? 60}
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                            loading="lazy"
                        />
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {PARTNER_LOGOS.map((partner, index) => (
                    <div
                        key={`partner-b-${partner.name}-${index}`}
                        className="mx-8 inline-block transition-all duration-300 hover:scale-110 filter hover:brightness-110"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            width={partner.width ?? 100}
                            height={partner.height ?? 60}
                            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
