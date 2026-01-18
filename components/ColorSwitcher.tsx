'use client';

import { useEffect, useState } from 'react';

const skinColors = [
    { name: 'Red', value: '#ec1839', id: 'color-1' },
    { name: 'Orange', value: '#fa5b0f', id: 'color-2' },
    { name: 'Green', value: '#37b182', id: 'color-3' },
    { name: 'Blue', value: '#1854b4', id: 'color-4' },
    { name: 'Pink', value: '#f021b2', id: 'color-5' },
];

export default function ColorSwitcher() {
    const [activeColor, setActiveColor] = useState('#ec1839');

    useEffect(() => {
        // Check for saved color preference or default to red
        const savedColor = localStorage.getItem('skinColor');
        if (savedColor) {
            setActiveColor(savedColor);
            document.documentElement.style.setProperty('--skin-color', savedColor);
        }
    }, []);

    const changeColor = (color: string) => {
        setActiveColor(color);
        document.documentElement.style.setProperty('--skin-color', color);
        localStorage.setItem('skinColor', color);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 bg-bg-card rounded-2xl shadow-strong p-4">
            <p className="text-sm font-semibold mb-3 text-text-main">Theme Color</p>
            <div className="flex gap-3">
                {skinColors.map((color) => (
                    <button
                        key={color.id}
                        onClick={() => changeColor(color.value)}
                        className={`w-10 h-10 rounded-full transition-all hover:scale-110 ${activeColor === color.value
                            ? 'ring-4 ring-offset-2 ring-offset-bg-card'
                            : 'hover:ring-2 ring-offset-1 ring-offset-bg-card'
                            }`}
                        style={{
                            backgroundColor: color.value,
                            '--tw-ring-color': color.value,
                        } as React.CSSProperties}
                        aria-label={`Switch to ${color.name} theme`}
                        title={color.name}
                    />
                ))}
            </div>
        </div>
    );
}
