'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Business Administration in Computer Applications (BBA-CA)",
    institution: "Savitribai Phule Pune University",
    year: "2022 – 2025",
    description:
      "Focused on computer fundamentals, programming, databases, and web technologies. Built strong foundation in software development and system design."
  },
  {
    degree: "Master of Computer Applications (MCA) – (Planned)",
    institution: "Targeting Advanced Specialization",
    year: "Upcoming",
    description:
      "Aiming to deepen knowledge in scalable systems, advanced computing concepts, and enterprise-level application development."
  }
];

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Deepstambh Foundation",
    year: "June 2023 – November 2023 (6 Months)",
    description:
      "Contributed to real-world web development projects, building responsive user interfaces and assisting in backend API development using modern JavaScript technologies. Strengthened practical development and teamwork skills."
  },
  {
    role: "Web Development Trainee",
    company: "Future Ready Foundation",
    year: "November 2024 – January 10, 2025 (2 Months)",
    description:
      "Completed an intensive training program focused on frontend and backend fundamentals, real-world project implementation, and deployment practices. Gained hands-on experience in building scalable web applications."
  }
];

export default function WhyItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-calm">

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal-900 mb-4"
          >
            Education Background
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg text-warmGray-600 max-w-2xl mx-auto"
          >
            Building a strong academic foundation in computer applications and advanced systems.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 sm:p-8 rounded-3xl shadow-lg border border-sage-500/10 bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-sage-500/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-sage-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-semibold text-charcoal-900 mb-2">
                {item.degree}
              </h3>

              <p className="text-sm text-sage-600 font-medium mb-1">
                {item.institution}
              </p>

              <p className="text-xs text-warmGray-500 mb-4">
                {item.year}
              </p>

              <p className="text-warmGray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= EXPERIENCE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal-900 mb-4"
          >
            Professional Experience
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg text-warmGray-600 max-w-2xl mx-auto"
          >
            Applying knowledge through real-world projects and practical development experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 sm:p-8 rounded-3xl shadow-lg border border-sage-500/10 bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-sage-500/10 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-sage-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-semibold text-charcoal-900 mb-2">
                {item.role}
              </h3>

              <p className="text-sm text-sage-600 font-medium mb-1">
                {item.company}
              </p>

              <p className="text-xs text-warmGray-500 mb-4">
                {item.year}
              </p>

              <p className="text-warmGray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
