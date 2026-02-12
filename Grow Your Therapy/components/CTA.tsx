'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonHover } from '@/lib/animations';
import { ArrowRight, Calendar, Mail, X } from 'lucide-react';
import ContactFormWithAPI from '@/components/ContactFormWithAPI';

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-gradient-to-br from-sage-500/10 via-white to-lavender-500/10 relative overflow-hidden">

        {/* Soft Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-20 w-56 h-56 bg-sage-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-20 w-56 h-56 bg-lavender-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl text-center px-6 sm:px-10 py-12 sm:py-16">

              {/* Heading */}
              <motion.h2
                variants={fadeInUp}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-serif
                  font-semibold
                  text-charcoal-900
                  leading-tight
                  mb-5
                "
              >
                Let’s Build Something Meaningful Together
              </motion.h2>

              {/* Subtext */}
              <motion.p
                variants={fadeInUp}
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-warmGray-600
                  max-w-xl
                  mx-auto
                  mb-8
                  leading-relaxed
                "
              >
                No pressure. No rush. Just thoughtful collaboration and clean, scalable solutions tailored to your vision.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              >
                {/* <motion.button
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="
                    px-5 sm:px-6
                    py-2.5 sm:py-3
                    text-sm sm:text-base
                    rounded-full
                    bg-black
                    text-white
                    inline-flex items-center gap-2
                    transition-all duration-300
                    hover:bg-gray-800
                  "
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </motion.button> */}

                <motion.button
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setIsOpen(true)}
                  className="
                    px-5 sm:px-6
                    py-2.5 sm:py-3
                    text-sm sm:text-base
                    rounded-full
                    border border-black
                    text-black
                    inline-flex items-center gap-2
                    transition-all duration-300
                    hover:bg-black hover:text-white
                  "
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </motion.button>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-warmGray-500 hover:text-charcoal-900 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <ContactFormWithAPI />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
