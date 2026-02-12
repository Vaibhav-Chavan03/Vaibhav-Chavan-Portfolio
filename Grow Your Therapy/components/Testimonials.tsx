'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "My website finally feels like me—and my clients tell me they feel calmer just visiting it. The booking rate has increased significantly since the redesign.",
    author: "Dr. Sarah Chen",
    credentials: "Licensed Marriage & Family Therapist",
    specialty: "Anxiety & Relationships"
  },
  {
    quote: "I was hesitant to invest in a new website, but this was one of the best decisions for my practice. New clients specifically mention how 'peaceful' my site feels.",
    author: "Michael Thompson",
    credentials: "Clinical Psychologist, Ph.D.",
    specialty: "Trauma & PTSD"
  },
  {
    quote: "The process was gentle and collaborative—exactly what I needed. They understood that my website isn't just about marketing; it's about making people feel safe.",
    author: "Dr. Priya Sharma",
    credentials: "Psychiatrist, MD",
    specialty: "Depression & Mood Disorders"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-lavender-400/5 to-white">
      <div className="container-calm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-semibold text-charcoal-900 mb-4"
          >
            Trusted by Therapists Like You
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-warmGray-600 max-w-2xl mx-auto"
          >
            Hear from mental health professionals who've transformed their online presence
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group"
            >
              <div className="card-calm h-full flex flex-col bg-white relative overflow-hidden">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-sage-500/10 flex items-center justify-center group-hover:bg-sage-500/20 transition-colors duration-500">
                    <Quote className="w-6 h-6 text-sage-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-warmGray-600 leading-relaxed mb-8 flex-grow font-serif text-lg italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-warmGray-500/10 pt-6">
                  <p className="text-charcoal-900 font-semibold mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-warmGray-500 mb-1">
                    {testimonial.credentials}
                  </p>
                  <p className="text-xs text-sage-600 font-medium">
                    Specializing in {testimonial.specialty}
                  </p>
                </div>

                {/* Subtle accent gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lavender-500/5 to-transparent rounded-bl-[100px] pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-soft">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-sage-400 to-lavender-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-warmGray-600">
              Join <span className="font-semibold text-charcoal-900">200+</span> mental health professionals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
