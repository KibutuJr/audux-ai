import { ArrowRightIcon } from 'lucide-react';
import { GhostButton } from './Buttons';
import { motion } from 'framer-motion';
import { useClerk, useUser } from '@clerk/clerk-react';

export default function CTA() {
    const { user } = useUser();
    const { openSignIn, openSignUp } = useClerk();

    const handleStartCreating = () => {
        if (!user) {
            openSignUp(); // Open sign-up modal for new users
        } else {
            // Navigate to generation page if already signed in
            window.location.href = '/generate';
        }
    };

    return (
        <section className="relative overflow-hidden py-24 2xl:pb-36 px-6 bg-gradient-to-b from-black via-[#0e1322] to-[#0b0f19] text-white">

            {/* Ambient Glow Background */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 container mx-auto max-w-4xl">

                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-12 md:p-20 text-center shadow-2xl shadow-indigo-500/10 overflow-hidden">

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-80" />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />

                    <div className="relative z-10">

                        <motion.h2
                            className="text-3xl sm:text-5xl font-bold mb-8 tracking-tight"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Ready to Make Your Content Go Viral?
                        </motion.h2>

                        <motion.p
                            className="text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Join thousands of creators & brands generating viral UGC with AI. No credit card needed. 
                            Start creating in seconds!
                        </motion.p>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <GhostButton
                                onClick={handleStartCreating}
                                className="px-10 py-4 text-base gap-3 border border-white/20 backdrop-blur-xl hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                            >
                                Start Creating Now <ArrowRightIcon size={20} />
                            </GhostButton>
                        </motion.div>

                    </div>

                    {/* Bottom Accent Glow Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-80" />
                </div>
            </div>
        </section>
    );
}
