import * as motion from "motion/react-client";

const Scale = () => {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 50,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
      }}
    ></motion.div>
  );
};

export default Scale;
