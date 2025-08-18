import * as motion from "motion/react-client";

const Hover = () => {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: "tomato",
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileFocus={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95, rotate: -5 }}
      onHoverStart={() => console.log("hover started!")}
    ></motion.div>
  );
};

export default Hover;
