import { motion } from "framer-motion";

export default function Terms() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0b0f19] via-[#0e1322] to-black text-gray-300 py-24 px-6">
            <div className="max-w-4xl mx-auto">

                <motion.h1
                    className="text-4xl font-bold text-white mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Terms of Service
                </motion.h1>

                <div className="space-y-8 text-sm leading-relaxed">

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using this platform, you agree to comply with these Terms
                            of Service and all applicable laws.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Use of Platform</h2>
                        <p>
                            You agree to use the platform only for lawful purposes and not to misuse
                            generated content or infringe on intellectual property rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Content Ownership</h2>
                        <p>
                            You retain ownership of your uploaded content. Generated outputs are
                            subject to the commercial usage rights outlined in your subscription plan.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Payments & Subscriptions</h2>
                        <p>
                            Subscription fees are billed according to your selected plan.
                            All payments are non-refundable unless required by law.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
                        <p>
                            We are not liable for indirect, incidental, or consequential damages
                            arising from your use of the platform.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
