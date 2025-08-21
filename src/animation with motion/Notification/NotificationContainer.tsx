import { AnimatePresence } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style: CSSProperties;
};

const NotificationContainer = ({ children, style }: Props) => {
  return (
    <ul className="container" style={style}>
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </ul>
  );
};

export default NotificationContainer;
