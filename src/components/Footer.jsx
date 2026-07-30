import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="border-t border-[var(--glass-border)] py-8 px-5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
                <p className="flex items-center gap-1">
                    © {new Date().getFullYear()} Prasetyo Edi Pamungkas
                </p>
                <p className="flex items-center gap-1">
                    Built with <Heart size={14} className="text-red-400" /> using React & Tailwind
                </p>
            </div>
        </footer>
    );
};