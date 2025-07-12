// src/components/AnimatedTitle.jsx
import React from "react";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const AnimatedTitle = ({ text = "SOFTWARE  ENGINEERING" }) => {
  const words = text.split(" ");

  return (
    <div className="text-3xl md:text-5xl font-extrabold text-pink-500 text-center mt-4">
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          className="inline-block mx-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
