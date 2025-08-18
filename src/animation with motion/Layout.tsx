import * as motion from "motion/react-client";
import { useState, type CSSProperties } from "react";

const Layout = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      className="toggle-container"
      style={{
        ...contaner,
        justifyContent: isOn ? "flex-start" : "flex-end",
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: "rgb(66, 153, 225)",
        }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      ></motion.div>
    </button>
  );
};

export default Layout;

/*
================ Styles ===================
*/

const contaner: CSSProperties = {
  width: 100,
  height: 50,
  backgroundColor: "var(--hue-3-transparent)",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};
