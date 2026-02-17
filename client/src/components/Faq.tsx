import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { faqData } from '../assets/dummy-data';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
    const refs = useRef<(HTMLDetailsElement | null)[]>([]);

    return (
        <section
            id="faq"
            className="relative overflow-hidden py-24 2xl:py-36 bg-gradient-to-b from-[#0b0f19] via-[#0e1322] to-black text-white"
        >
            {/* Ambient Glow Background */}
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">

                <Title
                    title="FAQ"
                    heading="Frequently asked questions"
                    description="Everything you need to know about using the platform. If you have more questions, feel free to reach out."
                />

                <div className="mt-14 space-y-5">
                    {faqData.map((faq, i) => (
                        <motion.details
                            key={i}
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add(
                                        "transition-all",
                                        "duration-500",
                                        "hover:-translate-y-1",
                                        "hover:shadow-xl",
                                        "hover:shadow-indigo-500/10"
                                    );
                                }
                            }}
                            className="group rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-md overflow-hidden"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h4 className="font-semibold text-base md:text-lg tracking-tight">
                                    {faq.question}
                                </h4>

                                <div className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 group-open:bg-indigo-500/20 transition">
                                    <ChevronDownIcon className="w-4 h-4 text-gray-300 group-open:rotate-180 transition-transform duration-300" />
                                </div>
                            </summary>

                            <div className="px-6 pb-6 pt-0">
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>

                            {/* Subtle Bottom Glow Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-open:opacity-100 transition duration-500" />
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}
