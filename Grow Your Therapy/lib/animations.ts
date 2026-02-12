// Premium animation variants for therapist website
// All animations feel like "exhale" - slow, gentle, calming

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 10 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0], // Custom ease-out
    }
  }
};

export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.98 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  hover: { 
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export const buttonHover = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: { 
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.98 
  }
};
