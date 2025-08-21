import { motion, type Variants } from "motion/react";
import CloseButton from "./CloseButton";

type Props = {
  notification: string;
  handleClose: () => void;
};

const notificationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.2,
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { ease: "easeOut", duration: 0.15 },
  },
  hover: { scale: 1.05, transition: { duration: 0.1 } },
};

const Notification = ({ notification, handleClose }: Props) => {
  return (
    <motion.li
      variants={notificationVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ backgroundColor: "tomato" }}
    >
      <h3 className="notification-text">{notification}</h3>
      <CloseButton handleClose={handleClose} />
    </motion.li>
  );
};

export default Notification;
