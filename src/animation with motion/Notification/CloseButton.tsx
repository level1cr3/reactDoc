import { motion } from "motion/react";

type Props = {
  handleClose: () => void;
};

const Path = (prop: { d: string }) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="black"
      strokeLinecap="round"
      {...prop}
    />
  );
};

const CloseButton = ({ handleClose }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onClick={handleClose}
      className="close"
    >
      <svg width={18} height={18} viewBox="0 0 23 23">
        <Path d="M 3 16.5 L 17 2.5" />
        <Path d="M 3 2.5 L 17 16.346" />
      </svg>
    </motion.div>
  );
};

export default CloseButton;
