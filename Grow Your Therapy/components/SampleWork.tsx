"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    name: "Therapist Profile Website",
    description:
      "A professional therapist portfolio website designed to establish trust and credibility. Includes responsive layouts, service sections, and contact integration.",
    tech: "Next.js • Tailwind CSS • Framer Motion",
    live: "https://maya-therapy.netlify.app",
    github: "https://github.com/Vaibhav-Chavan03/grow-my-therapy/tree/main/therapy-website",
    image: "/imgs/thera.png",
    bg: "#FBF9F1",
  },
  {
    name: "UI/UX Template Clone",
    description:
      "A pixel-perfect responsive UI template clone focused on modern design systems and reusable component architecture.",
    tech: "React • Tailwind CSS • Responsive Design",
    live: "https://lilac-template-ui-clone.netlify.app/",
    github: "https://github.com/Vaibhav-Chavan03/grow-my-therapy/tree/main/clone%20web/lilac-clone/clone-main",
    image: "/imgs/image copy.png",
    bg: "#F5FAF8",
  },
  {
    name: "Blood Donation Awareness Platform",
    description:
      "A web platform built to spread awareness about blood donation with dynamic sections and clean user experience.",
    tech: "Next.js • TypeScript • Tailwind CSS",
    live: "https://blood-donation-awareness-ipy2.vercel.app/",
    github: "https://github.com/Vaibhav-Chavan03/grow-my-therapy/tree/main/clone%20web/lilac-clone/clone-main",
    image: "/imgs/blood.png",
    bg: "#F4ECE8",
  },
];

/* ANIMATIONS */
const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerSlow = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SampleWork() {
  const [active, setActive] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollX = el.scrollLeft;
    const width = el.offsetWidth;
    const index = Math.round(scrollX / width);

    setActiveIndex(index);
    setActive(index);
  };

  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-24 sm:py-28 px-5 sm:px-6 transition-colors duration-700"
      style={{ backgroundColor: projects[active].bg }}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={staggerSlow}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.h2
            variants={fadeUpSoft}
            className="font-serif text-3xl sm:text-5xl text-charcoal-900 tracking-tight mb-4 sm:mb-6"
          >
            Selected Projects
          </motion.h2>

          <motion.p
            variants={fadeUpSoft}
            className="text-base sm:text-lg text-warmGray-600 leading-relaxed"
          >
            A showcase of scalable, performance-focused web applications I’ve built.
          </motion.p>
        </motion.div>

        {/* PROJECT GRID / SCROLL */}
        <motion.div
          ref={scrollRef}
          onScroll={handleScroll}
          variants={staggerSlow}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth
            no-scrollbar -mx-5 px-5
            sm:grid sm:grid-cols-2 lg:grid-cols-3
            sm:gap-6 sm:overflow-visible
            sm:mx-0 sm:px-0
          "
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUpSoft}
              onMouseEnter={() => setActive(i)}
              className="flex-shrink-0 w-full snap-center sm:w-auto"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="
                  rounded-2xl
                  p-5
                  bg-white
                  shadow-lg
                  h-full
                  flex
                  flex-col
                  group
                "
              >
          {/* IMAGE PREVIEW */}
<div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-5 bg-gray-50 flex items-center justify-center">
  <img
    src={project.image}
    alt={project.name}
    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
  />
</div>

                {/* TITLE */}
                <h3 className="font-serif text-lg sm:text-xl text-charcoal-900 mb-2">
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-warmGray-600 leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <p className="text-xs text-sage-600 font-medium mb-5">
                  {project.tech}
                </p>

                {/* LINKS */}
                <div className="flex items-center justify-between text-sm mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-600 inline-flex items-center gap-1 hover:underline"
                  >
                    Live Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-charcoal-700 hover:text-black"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE DOTS */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-6 bg-sage-600"
                  : "w-2 bg-sage-600/30"
              }`}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
}
