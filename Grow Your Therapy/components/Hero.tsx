 



'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, buttonHover } from '@/lib/animations';
import ContactFormWithAPI from '@/components/ContactFormWithAPI';
import { X } from 'lucide-react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-lavender-400/10">

        {/* 🌈 Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-sage-400/20 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-lavender-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* 🔥 Main Content */}
        <div className="relative z-10 container-calm section-padding px-6 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"
          >

            {/* 👤 PROFILE IMAGE */}
          {/* 👤 PROFILE IMAGE */}
<motion.div
  variants={fadeInUp}
  className="w-full lg:w-1/2 flex justify-center lg:justify-start"
>
  <div className="relative">

    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-sage-400 to-lavender-400 blur-3xl opacity-30 scale-110 rounded-full lg:rounded-3xl"></div>

    {/* Image */}
    <img
      src="/imgs/pro.png"
      alt="Vaibhav Chavan"
     className="
  relative
  w-64 h-64
  sm:w-80 sm:h-80
  lg:w-[420px] lg:h-[520px]
  object-cover
  rounded-full
  lg:rounded-3xl
  border-4 border-white
  shadow-2xl
  transition-all duration-500
"

    />
  </div>
</motion.div>


            {/* 📝 TEXT CONTENT */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >

              {/* Badge */}
              <motion.div variants={fadeIn} className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-sage-600 shadow-soft">
                  Full Stack Developer
                </span>
              </motion.div>

<motion.h1 
  variants={fadeInUp}
  className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
    font-extrabold
    tracking-tight
    leading-[1.2]
    text-charcoal-900
    mb-6
  "
>
  Building modern & scalable
  <br className="hidden sm:block" />
  web experiences for{' '}
  <span className="
    bg-gradient-to-r 
    from-blue-600 
    via-purple-600 
    to-pink-600 
    bg-clip-text 
    text-transparent
  ">
    ambitious brands
  </span>
</motion.h1>



              {/* Subtext
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg text-warmGray-600 mb-8 leading-relaxed"
              >
                I design and develop high-performance web applications, focusing on clean architecture, intuitive UI, and scalable backend systems.
              </motion.p> */}

           {/* Buttons */}
<motion.div 
  variants={fadeInUp}
  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
>
<motion.a
 href="/imgs/cv.pdf"

  target="_blank"
  rel="noopener noreferrer"
  variants={buttonHover}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
  className="px-6 py-3 text-sm sm:text-base rounded-full bg-black text-white font-medium shadow-lg hover:bg-gray-800 transition-all duration-300 inline-block text-center"
>
  View My CV
</motion.a>

  <motion.button
    variants={buttonHover}
    initial="rest"
    whileHover="hover"
    whileTap="tap"
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 text-sm sm:text-base rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
  >
    Let's Work Together
  </motion.button>
</motion.div>

              {/* Bottom Text */}
              <motion.div 
                variants={fadeIn}
                className="mt-8 text-xs sm:text-sm text-warmGray-500"
              >
                <p>Crafting scalable digital solutions with performance & precision</p>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* 📩 CONTACT MODAL */}
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
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8"
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
