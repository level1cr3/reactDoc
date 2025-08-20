import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import { useState } from "react";
import Modal from "./animation with motion/animated modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <motion.button
        className="save-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setModalOpen(!modalOpen)}
      >
        Launch modal
      </motion.button>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={true}
        /*
        Determines how to handle entering and exiting elements.
        "sync": Default. Elements animate in and out as soon as they're added/removed.
        "popLayout": Exiting elements are "popped" from the page layout, allowing sibling elements to immediately occupy their new layouts.
        "wait": Only renders one component at a time. Wait for the exiting component to animate out before animating the next component in.
        */
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal handleClose={() => setModalOpen(false)} text="hello Modal" />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
