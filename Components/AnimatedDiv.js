import React from "react";
import { motion } from "framer-motion";

export const animations = {
  bottomToTop: {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  leftToRight: {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  rightToLeft: {
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
};

const Div = ({ children, animationStyle, ...rest }) => {
  const animation = animationStyle ? animationStyle : animations.bottomToTop;

  return (
    <motion.div
      className="container-fluid p-2"
      {...animation}
      transition={{ duration: 0.4 }}
      viewport={{ once: false }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Div;
