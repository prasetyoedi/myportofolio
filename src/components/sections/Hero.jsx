import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { data } from "../../data";

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const scrollRef = useRef(null);
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.3,
            });

            // Subtitle
            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power4.out",
                delay: 0.6,
            });

            // CTA buttons
            gsap.from(ctaRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.9,
                ease: "power4.out",
                delay: 0.9,
            });

            // Scroll indicator
            gsap.from(scrollRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power4.out",
                delay: 1.2,
            });

            // Blobs floating
            gsap.to(blob1Ref.current, {
                x: 40,
                y: -30,
                duration: 12,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(blob2Ref.current, {
                x: -50,
                y: 20,
                duration: 15,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-5"
            style={{ paddingTop: "80px" }}
        >
            {/* Background glow blobs */}
            <div ref={blob1Ref} className="glow-blob glow-blob-blue w-[500px] h-[500px] -top-20 -left-40" />
            <div ref={blob2Ref} className="glow-blob glow-blob-cyan w-[400px] h-[400px] -bottom-40 -right-40" />
            <div className="glow-blob glow-blob-purple w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-gray-300 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open to opportunities
                </motion.div>

                {/* Title */}
                <h1
                    ref={titleRef}
                    className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight"
                >
                    <span className="text-white">Hi, I'm</span>
                    <br />
                    <span className="gradient-text">Prasetyo Edi Pamungkas</span>
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {data.about.summary.slice(0, 335)}...
                </p>

                {/* CTA Buttons */}
                <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a href="#projects" className="btn-primary">
                        View Projects <ChevronRight size={18} />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Contact Me
                    </a>
                </div>

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="mt-8 flex items-center justify-center gap-4"
                >
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${data.email}`}
                        className="p-2 rounded-full glass text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase">
                    <span>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}