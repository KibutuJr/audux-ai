import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';
import { useClerk, useUser } from '@clerk/clerk-react';

export default function Hero() {
    const { user } = useUser();
    const { openSignIn, openSignUp } = useClerk();

    const handleTryItFree = () => {
        if (!user) {
            openSignUp(); // Opens the sign-up modal
        } else {
            // Navigate to generation page if already signed in
            window.location.href = '/generate';
        }
    };

    const trustedUserImages = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
    ];

    const mainImageUrl = 'https://images.unsplash.com/photo-1713085155480-674f18d7ade9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const galleryStripImages = [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100',
    ];

    const trustedLogosText = [
        'Adobe',
        'Figma',
        'Canva',
        'Shopify',
        'Web Flow',
        'Creatives'
    ];

    return (
        <>
            <section
                id="home"
                className="relative overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0e1322] to-black text-white"
            >
                {/* Background Glow Effects */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 min-h-screen flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            <motion.a
                                href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge"
                                className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg mb-8"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex -space-x-2">
                                    {trustedUserImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Client ${i + 1}`}
                                            className="w-7 h-7 rounded-full border-2 border-[#0b0f19]"
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-300">
                                    Join 10,000+ creators already using it!
                                </span>
                            </motion.a>

                            <motion.h1
                                className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                UGC built by creators, <br />
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    ready in seconds
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Turn simple uploads into professional lifestyle visuals 
                                & high-performing short-form videos in seconds—ready for ads, Reels, & commerce.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-5 mb-10"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <PrimaryButton
                                    onClick={handleTryItFree}
                                    className="w-full sm:w-auto py-4 px-8 text-base shadow-xl shadow-indigo-600/30 flex items-center gap-2"
                                >
                                    Try It Free. Start Generating.
                                    <ArrowRightIcon className="size-4" />
                                </PrimaryButton>

                                <GhostButton className="w-full sm:w-auto py-4 px-6 text-base backdrop-blur-xl border border-white/10 hover:bg-white/5 flex items-center gap-2">
                                    <PlayIcon className="size-4" />
                                    Watch Demo
                                </GhostButton>
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-lg"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="flex items-center gap-3">
                                    <ZapIcon className="size-5 text-sky-400" />
                                    <div>
                                        <div>Create Scroll-Stopping</div>
                                        <div className="text-xs text-gray-400">
                                            Social Content Instantly
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block w-px h-8 bg-white/10" />

                                <div className="flex items-center gap-3">
                                    <CheckIcon className="size-5 text-cyan-400" />
                                    <div>
                                        <div>Commercial Rights</div>
                                        <div className="text-xs text-gray-400">
                                            Use Anywhere, No Hassle
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE MOCKUP */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl">
                                <div className="relative aspect-[16/10]">
                                    <img
                                        src={mainImageUrl}
                                        alt="agency-work-preview"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                    <div className="absolute left-6 top-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-xs border border-white/10">
                                        Creator • Content • Growth
                                    </div>

                                    <div className="absolute right-6 bottom-6">
                                        <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition">
                                            <PlayIcon className="size-4" />
                                            <span className="text-xs">Watch How Creators Scale</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery Strip */}
                            <div className="mt-6 flex items-center gap-4">
                                {galleryStripImages.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="w-16 h-12 rounded-xl overflow-hidden border border-white/10 shadow-md"
                                    >
                                        <img
                                            src={src}
                                            alt="project-thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}

                                <div className="text-sm text-gray-400 ml-3 flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                                    </span>
                                    20+ more
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* LOGO MARQUEE */}
            <motion.section
                className="border-t border-white/10 bg-black py-8"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                    <div className="flex gap-16 items-center justify-center animate-marquee whitespace-nowrap">
                        {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                            <span
                                key={i}
                                className="text-gray-500 font-semibold tracking-wider hover:text-gray-300 transition"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    );
}
