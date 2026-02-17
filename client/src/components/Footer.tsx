import { assets } from '../assets/assets';
import { footerLinks } from '../assets/dummy-data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <motion.footer
            className="relative overflow-hidden bg-gradient-to-b from-[#0b0f19] via-black to-[#070a12] border-t border-white/10 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Ambient Glow */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-16 pb-16 border-b border-white/10">

                    {/* Brand Section */}
                    <div className="max-w-md">
                        <img src={assets.logo} alt="logo" className="h-9" />

                        <p className="mt-6 text-sm leading-relaxed text-gray-400">
                            From viral UGC to powerful digital campaigns, we equip brands 
                            & creators to engage audiences, grow faster, & leave a lasting impression.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full md:w-auto">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-white text-base mb-4 tracking-wide">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    {section.links.map(
                                        (link: { name: string; url: string }, i) => (
                                            <li key={i}>
                                                {link.url.startsWith("/") ? (
                                                    <Link
                                                        to={link.url}
                                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                                                    >
                                                        {link.name}
                                                    </a>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">

                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()}{" "}
                        <a
                            className="underline underline-offset-4 hover:text-indigo-400 transition"
                            href="https://kibutujr.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-indigo-400 font-medium">KibutuJR</span>
                        </a>
                        . All rights reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy"
                            className="underline underline-offset-4 hover:text-indigo-400 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms"
                            className="underline underline-offset-4 hover:text-indigo-400 transition"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
        </motion.footer>
    );
}
