'use client'

import { useEffect, useState } from 'react'

interface LogoItem {
    name: string
    bgColor: string
    textColor: string
}

interface LogoGroup {
    name: string
    items: LogoItem[]
}

interface LogoSliderProps {
    logoGroups: LogoGroup[]
    autoSlideInterval?: number
}

export default function LogoSlider({ logoGroups = [], autoSlideInterval = 3000 }: LogoSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (logoGroups.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % logoGroups.length)
        }, autoSlideInterval)

        return () => clearInterval(interval)
    }, [logoGroups.length, autoSlideInterval])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    if (!logoGroups || logoGroups.length === 0) {
        return <div className="text-center text-slate-500">No logo groups available</div>
    }

    return (
        <div className="relative w-full">
            {/* Logo Display Area */}
            <div className="flex justify-center items-center h-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {logoGroups.map((group, index) => (
                        <div key={`group-${group.name}-${index}`} className="flex-shrink-0 w-full flex justify-center items-center">
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-4 mb-2">
                                    {group.items.map((item, itemIndex) => (
                                        <div key={`${group.name}-${item.name}-${itemIndex}`} className={`${item.bgColor} px-6 py-3 rounded-lg`}>
                                            <span className={`${item.textColor} font-bold text-lg`}>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                                    {group.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
                {logoGroups.map((group, index) => (
                    <button
                        key={`dot-${group.name}-${index}`}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex
                                ? 'bg-blue-600 dark:bg-blue-400'
                                : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
