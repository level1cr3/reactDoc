import { motion, type Variants } from "motion/react";
import Backdrop from "./Backdrop";

type Props = {
  handleClose: () => void;
  text: string;
};

// variants allows us to define custom animation state.
const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }: Props) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal orange-gradient"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
