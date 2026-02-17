import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0b0f19] via-[#0e1322] to-black text-gray-300 py-24 px-6">
            <div className="max-w-4xl mx-auto">

                <motion.h1
                    className="text-4xl font-bold text-white mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Privacy Policy
                </motion.h1>

                <div className="space-y-8 text-sm leading-relaxed">

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, including account details,
                            uploaded content, payment information, and communication data. We may also
                            collect technical data such as device type, IP address, and usage activity.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                        <p>
                            We use your information to operate the platform, generate content,
                            process payments, improve performance, and ensure security.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Data Protection</h2>
                        <p>
                            We implement industry-standard security measures to protect your data.
                            However, no system can guarantee absolute security.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
                        <p>
                            We may use third-party providers for analytics, hosting, and payment
                            processing. These providers operate under their own privacy policies.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
                        <p>
                            You may request access, correction, or deletion of your personal data
                            by contacting us.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
