import * as motion from "motion/react-client";

const Rotate = () => {
  return (
    <>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#98c379",
          borderRadius: 5,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear" }}
      />
    </>
  );
};

export default Rotate;

// css style integers are px by default if i don't mention unit.
