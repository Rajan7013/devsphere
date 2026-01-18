'use client';

import { useState, useEffect } from 'react';
import { X, Palette } from 'lucide-react';

const colors = [
    { name: 'Red', hex: '#ec1839' },
    { name: 'Orange', hex: '#fa5b0f' },
    { name: 'Green', hex: '#37b182' },
    { name: 'Blue', hex: '#1854b4' },
    { name: 'Pink', hex: '#f021b2' },
];

export default function StyleSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [activeColor, setActiveColor] = useState('#ec1839');

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const savedColor = localStorage.getItem('skinColor');

        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

        if (savedColor) {
            setActiveColor(savedColor);
            document.documentElement.style.setProperty('--skin-color', savedColor);
        }
    }, []);

    // Toggle theme switcher panel
    const toggleSwitcher = () => setIsOpen(!isOpen);

    // Toggle light/dark mode
    const toggleTheme = (dark: boolean) => {
        setIsDark(dark);
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Change skin color
    const setColor = (hex: string) => {
        setActiveColor(hex);
        document.documentElement.style.setProperty('--skin-color', hex);
        localStorage.setItem('skinColor', hex);
    };

    // Close on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    return (
        <div
            className="fixed top-24 z-9999 transition-all duration-300 ease-in-out"
            style={{ right: isOpen ? '0' : '-280px' }}
        >
            {/* Toggle Button (Gear Icon) */}
            <div
                onClick={toggleSwitcher}
                className="absolute left-[-48px] top-0 w-12 h-12 bg-bg-card text-skin flex items-center justify-center cursor-pointer rounded-l-xl shadow-strong hover:bg-skin hover:text-white transition-all"
                aria-label="Toggle theme switcher"
            >
                <Palette size={24} />
            </div>

            {/* Panel */}
            <div className="bg-bg-card w-[280px] p-6 rounded-l-2xl shadow-strong border-l-4 border-skin">
                {/* Close Button */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-text-main text-lg font-heading font-semibold">Theme Settings</h4>
                    <button
                        onClick={toggleSwitcher}
                        className="text-text-muted hover:text-skin transition-colors"
                        aria-label="Close theme switcher"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Row 1: Theme Colors */}
                <div className="mb-6">
                    <h5 className="text-text-main text-sm font-semibold mb-3 border-b border-text-muted/20 pb-2">
                        Accent Color
                    </h5>
                    <div className="flex flex-wrap gap-3">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => setColor(color.hex)}
                                className={`w-10 h-10 rounded-full cursor-pointer transition-all hover:scale-110 ${activeColor === color.hex
                                    ? 'ring-4 ring-offset-2 ring-offset-bg-card scale-110'
                                    : ''
                                    }`}
                                style={{
                                    backgroundColor: color.hex,
                                    '--tw-ring-color': color.hex,
                                } as React.CSSProperties}
                                aria-label={`Switch to ${color.name} theme`}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>

                {/* Row 2: Theme Mode (Light/Dark) */}
                <div>
                    <h5 className="text-text-main text-sm font-semibold mb-3 border-b border-text-muted/20 pb-2">
                        Theme Mode
                    </h5>
                    <div className="flex gap-3">
                        <button
                            onClick={() => toggleTheme(false)}
                            className={`flex-1 p-3 rounded-lg border-2 transition-all ${!isDark
                                ? 'bg-skin text-white border-skin'
                                : 'border-text-muted/20 text-text-muted hover:border-skin'
                                }`}
                            aria-label="Switch to light mode"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl">☀️</span>
                                <span className="text-xs font-medium">Light</span>
                            </div>
                        </button>
                        <button
                            onClick={() => toggleTheme(true)}
                            className={`flex-1 p-3 rounded-lg border-2 transition-all ${isDark
                                ? 'bg-skin text-white border-skin'
                                : 'border-text-muted/20 text-text-muted hover:border-skin'
                                }`}
                            aria-label="Switch to dark mode"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl">🌙</span>
                                <span className="text-xs font-medium">Dark</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
