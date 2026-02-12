'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';
import { 
  Code2, 
  Globe, 
  Database, 
  Server, 
  GitBranch,
  Rocket,
  Layout,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const professionals = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Building responsive, modern UI using React, Next.js, Tailwind CSS and TypeScript."
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Designing scalable APIs and server logic using Node.js and Express."
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Structuring efficient data models and managing MongoDB databases."
  },
  {
    title: "REST API Integration",
    icon: Globe,
    description: "Developing and consuming RESTful APIs for seamless system communication."
  },
  {
    title: "Version Control",
    icon: GitBranch,
    description: "Collaborative development using Git and structured workflow strategies."
  },
  {
    title: "Performance Optimization",
    icon: Rocket,
    description: "Improving speed, SEO, and scalability for production-grade applications."
  },
  {
    title: "Clean Code Architecture",
    icon: Code2,
    description: "Writing maintainable, modular and scalable application structures."
  },
  {
    title: "Security & Authentication",
    icon: ShieldCheck,
    description: "Implementing JWT authentication, protected routes, and secure backend practices."
  }
];

export default function WhoItsFor() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="section-padding bg-white">
      <div className="container-calm">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal-900 mb-4"
          >
            My Technical Expertise
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg text-warmGray-600 max-w-2xl mx-auto"
          >
            Focused on building scalable, high-performance web applications with clean architecture and modern technologies.
          </motion.p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {professionals.map((professional, index) => {
            const Icon = professional.icon;

            // Hide extra items ONLY on mobile when collapsed
            const hideOnMobile = !showAll && index >= 2;

            return (
              <motion.div
                key={professional.title}
                variants={fadeInUp}
                className={hideOnMobile ? "hidden sm:block" : ""}
              >
                <motion.div 
                  variants={cardHover}
                  className="card-calm h-full flex flex-col items-start group"
                >
                  <div className="w-12 h-12 rounded-soft bg-sage-500/10 flex items-center justify-center mb-4 group-hover:bg-sage-500/20 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-sage-600" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-charcoal-900 mb-2">
                    {professional.title}
                  </h3>

                  <p className="text-sm text-warmGray-500 leading-relaxed">
                    {professional.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* SHOW MORE BUTTON – MOBILE ONLY */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sage-600 font-medium text-sm transition"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-warmGray-500 text-sm sm:text-base italic">
            Continuously learning, improving, and building production-ready digital solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
