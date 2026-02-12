'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-cream-100 border-t border-warmGray-500/10">
      <div className="container-calm section-padding">

        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">
              Vaibhav Chavan
            </h3>

            <p className="text-warmGray-600 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              Full Stack Developer focused on building scalable, high-performance
              web applications using modern technologies and clean architecture.
            </p>

            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://github.com/Vaibhav-Chavan03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmGray-600 hover:text-black transition"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/vaibhav-chavan-33a4663a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmGray-600 hover:text-black transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wide mb-6">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-sm text-warmGray-600">
                <Mail className="w-4 h-4 text-black flex-shrink-0" />
                <a
                  href="mailto:vaibhav@example.com"
                  className="hover:text-black transition"
                >
                  Vaibhavvv003@gmail.com
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3 text-sm text-warmGray-600">
                <Phone className="w-4 h-4 text-black flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-black transition"
                >
                  +91 9175518905
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3 text-sm text-warmGray-600">
                <MapPin className="w-4 h-4 text-black flex-shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-8 border-t border-warmGray-500/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warmGray-500 text-center md:text-left">
            <p>
              © {currentYear} Vaibhav Chavan. All rights reserved.
            </p>

            <p className="text-xs md:text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
