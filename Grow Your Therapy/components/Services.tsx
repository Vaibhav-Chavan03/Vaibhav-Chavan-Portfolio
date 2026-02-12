'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';
import { 
  Layout, 
  RefreshCw, 
  Search, 
  Calendar,
  Wrench,
  Palette
} from 'lucide-react';

const services = [
  {
    title: "Website Design",
    icon: Layout,
    description: "Calm, professional websites that feel like your therapy practice",
    color: "from-sage-400 to-sage-500"
  },
  {
    title: "Website Redesign",
    icon: RefreshCw,
    description: "Transform your existing site into a safe, welcoming space",
    color: "from-lavender-500 to-lavender-400"
  },
  {
    title: "SEO for Therapists",
    icon: Search,
    description: "Help aligned clients find you through thoughtful optimization",
    color: "from-sage-500 to-lavender-500"
  },
  {
    title: "Booking Optimization",
    icon: Calendar,
    description: "Make scheduling simple and reassuring for new clients",
    color: "from-lavender-400 to-sage-400"
  },
  {
    title: "Ongoing Care",
    icon: Wrench,
    description: "Website maintenance so you can focus on your clients",
    color: "from-sage-400 to-sage-600"
  },
  {
    title: "Brand Identity",
    icon: Palette,
    description: "Visual identity that reflects your therapeutic approach",
    color: "from-lavender-500 to-sage-500"
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-cream-50">
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
            How We Help You Connect
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-warmGray-600 max-w-2xl mx-auto"
          >
            Every service is designed to reduce anxiety and build trust with your ideal clients
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
              >
                <motion.div 
                  variants={cardHover}
                  className="card-calm h-full flex flex-col group cursor-default overflow-hidden relative"
                >
                  {/* Subtle gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-soft bg-gradient-to-br from-sage-500/10 to-lavender-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-sage-600" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-warmGray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-warmGray-600 mb-6">
            All services can be customized to your practice's unique needs
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-sage-500 text-white rounded-soft font-medium hover:bg-sage-600 transition-colors duration-300 shadow-soft hover:shadow-calm"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
