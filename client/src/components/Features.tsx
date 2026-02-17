import { useRef } from 'react';
import { featuresData } from '../assets/dummy-data';
import Title from './Title';
import { motion } from 'framer-motion';

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section
            id="features"
            className="relative overflow-hidden py-24 2xl:py-36 bg-gradient-to-b from-black via-[#0c1120] to-[#0b0f19] text-white"
        >
            {/* Background Glow Effects */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <Title
                    title="Features"
                    heading="Designed for today’s high-growth brands"
                    description="From product to post in seconds. Our AI produces professional lifestyle imagery & short-form video optimized for commercial use and social growth."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresData.map((feature, i) => (
                        <motion.div
                            key={i}
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add(
                                        "transition-all",
                                        "duration-500",
                                        "hover:-translate-y-3",
                                        "hover:shadow-2xl",
                                        "hover:shadow-indigo-500/20"
                                    );
                                }
                            }}
                            className="group relative rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden"
                        >
                            {/* Subtle gradient hover overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10" />

                            {/* Icon Container */}
                            <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-xl font-semibold mb-3 tracking-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>

                            {/* Glow Accent Line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
