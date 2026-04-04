import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  // Hardback cover opening (from / to /content)
  coverEnter: {
    rotateY: -90,
    opacity: 0,
  },
  coverCenter: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  coverExit: {
    rotateY: -90,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },

  // Forward page flip (from /content to a subpage)
  pageEnterForward: {
    rotateY: -90,
    opacity: 0,
  },
  pageCenter: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  pageExitForward: {
    rotateY: 90,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },

  // Backward page flip (from subpage back to /content)
  pageEnterBackward: {
    rotateY: 90,
    opacity: 0,
  },
  pageExitBackward: {
    rotateY: -90,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const PageWrapper = ({ children, isCover, action }) => {
  // Determine which variant to use based on action
  let initial = 'pageEnterForward';
  let animate = 'pageCenter';
  let exit = 'pageExitForward';

  if (isCover) {
    initial = 'coverEnter';
    animate = 'coverCenter';
    exit = 'coverExit';
  } else if (action === 'backward') {
    initial = 'pageEnterBackward';
    exit = 'pageExitBackward';
  }

  return (
    <motion.div
      className="page-container"
      style={{
        transformOrigin: 'left center', // Hinge point for the flip
        willChange: 'transform, opacity',
      }}
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
