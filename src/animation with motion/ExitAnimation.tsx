import { motion, AnimatePresence } from "motion/react";
import { useState, type CSSProperties } from "react";

const ExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div style={container}>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <button style={button} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ExitAnimation;

/*
==================== Styles ==================
*/

const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 160,
  position: "relative",
};

const box: CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: "#FF5449",
  borderRadius: 10,
};

const button: CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#FF5449",
  color: "#000000",
  borderRadius: 10,
};
