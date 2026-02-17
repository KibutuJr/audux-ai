// import { Check } from 'lucide-react';
// import { PrimaryButton, GhostButton } from './Buttons';
// import { plansData } from '../assets/dummy-data';
// import { motion } from 'framer-motion';
// import { useRef } from 'react';
import Title from './Title';
import { PricingTable } from '@clerk/clerk-react';

export default function Pricing() {
    
    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                title="Pricing"
                heading="Simple, Flexible Pricing"
                description="Clear, transparent plans designed to scale with you.
                 Choose the perfect plan & start creating high-impact content in seconds."
                />


                <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto">

                   {/*} {plansData.map((plan, i) => (
                        <motion.div
                            key={i}

                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-500", "hover:scale-102");
                                }
                            }}
                            className={`relative p-6 rounded-xl border backdrop-blur ${plan.popular
                                ? 'border-indigo-500/50 bg-indigo-900/30'
                                : 'border-white/8 bg-indigo-950/30'
                                }`}
                        >
                            {plan.popular && (
                                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-md text-xs">
                                    Most popular
                                </p>
                            )}

                            <div className="mb-6">
                                <p>{plan.name}</p>
                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-extrabold">{plan.price}</span>
                                    <span className="text-sm text-gray-400">
                                        / {plan.credits}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mt-2">
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feat, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-sm text-gray-300"
                                    >
                                        <Check className="w-4 h-4 text-indigo-400" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <div>
                                {plan.popular ? (
                                    <PrimaryButton className="w-full">
                                        Buy Now
                                    </PrimaryButton>
                                ) : (
                                    <GhostButton className="w-full justify-center">
                                        Buy Now
                                    </GhostButton>
                                )}
                            </div>
                        </motion.div>
                    ))} */}

                    <PricingTable
                    appearance={{
                        variables: {
                            colorBackground: 'none'
                        },
                        elements: {
                            pricingTableCardBody: 'bg-white/6',
                            pricingTableCardHeader: 'bg-white/10',
                            switchThumb: 'bg-white'
                        }
                    }} />
                </div>
            </div>
        </section>
    );
};