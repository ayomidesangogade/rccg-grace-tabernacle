import { motion } from "framer-motion";

function AboutSection() {
  return (
        <section className="py-20 px-6 md:px-16 text-center overflow-hidden">
            <motion.h2
                className="text-3xl md:text-4xl font-heading text-primary mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Our Heartbeat
            </motion.h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-500"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-heading text-primary mb-4">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        To make heaven and to take as many people as possible with us —
                        through salvation, worship, teaching, and the transformative power of
                        God's grace.
                    </p>
                    <div className="mt-6 w-16 h-1 mx-auto bg-gold rounded-full"></div>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-500"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-heading text-primary mb-4">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        To see a world transformed by the message of grace —
                        where people from every nation, race, and culture encounter Jesus
                        and walk in the light of His love.
                    </p>
                    <div className="mt-6 w-16 h-1 mx-auto bg-accent rounded-full"></div>
                </motion.div>
            </div>

            <motion.div
                className="mt-20 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <p className="text-lg md:text-xl italic text-gray-600 leading-relaxed">
                    “Jesus Christ the same yesterday, and to day, and for ever”
                </p>
                <p className="mt-4 font-semibold text-primary text-sm md:text-base">
                    — Hebrews 13:8 (KJV)
                </p>
            </motion.div>
        </section>
    );
}

export default AboutSection;