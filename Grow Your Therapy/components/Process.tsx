'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  Heart, 
  Palette, 
  Code, 
  Rocket, 
  Shield 
} from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Understand Your Practice",
    description: "We start with a gentle conversation about your approach, your ideal clients, and what makes your practice unique.",
    icon: Heart,
    color: "sage"
  },
  {
    number: "02",
    title: "Design with Emotional Safety",
    description: "We create a design that feels warm, professional, and perfectly aligned with your therapeutic style.",
    icon: Palette,
    color: "lavender"
  },
  {
    number: "03",
    title: "Build with Clarity",
    description: "Every element is crafted to reduce anxiety and guide clients smoothly toward booking their first session.",
    icon: Code,
    color: "sage"
  },
  {
    number: "04",
    title: "Launch with Confidence",
    description: "We handle every technical detail so you can focus on what matters—your clients and your practice.",
    icon: Rocket,
    color: "lavender"
  },
  {
    number: "05",
    title: "Support After Launch",
    description: "Ongoing care, updates, and support to ensure your website continues to serve you and your clients well.",
    icon: Shield,
    color: "sage"
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-cream-50">
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
            A Gentle, Collaborative Process
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-warmGray-600 max-w-2xl mx-auto"
          >
            No rush. No pressure. Just thoughtful work, done with care.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="flex gap-8 items-start">
                    {/* Left side - Icon and line */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-16 h-16 rounded-soft flex items-center justify-center shadow-calm
                          ${step.color === 'sage' ? 'bg-sage-500' : 'bg-lavender-500'}
                          group cursor-default`}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </motion.div>
                      
                      {/* Connecting line */}
                      {!isLast && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-warmGray-500/30 to-warmGray-500/10 mt-4" />
                      )}
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-grow pt-2 pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-mono font-semibold text-warmGray-500">
                          {step.number}
                        </span>
                        <div className="h-px flex-grow bg-gradient-to-r from-warmGray-500/20 to-transparent" />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-warmGray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Timeline note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-white rounded-soft shadow-soft">
            <p className="text-sm text-warmGray-600">
              <span className="font-semibold text-sage-600">Typical timeline:</span>{' '}
              4-6 weeks from start to launch
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
