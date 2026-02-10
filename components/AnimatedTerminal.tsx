"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function AnimatedTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="terminal-wrapper"
    >
      <div className="terminal">
        <div className="terminal-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-body">
          <TypeAnimation
            sequence={[
              "$ npm install",
              800,
              "$ npm run build",
              1000,
              "✔ Build successful",
              800,
              "✔ Performance optimized",
              800,
              "✔ Ready for production 🚀",
              1500,
              () => {},
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            cursor={true}
            className="terminal-text"
            style={{ display: "block", whiteSpace: "pre" }}
          />
        </div>
        <div className="scanlines" />
      </div>
    </motion.div>
  );
}
