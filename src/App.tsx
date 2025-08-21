import { useState } from "react";
import "./App.css";
import Notification from "./animation with motion/Notification/Notification";
import { add, remove } from "./animation with motion/Notification/arr-utils";
import { motion } from "motion/react";
import NotificationContainer from "./animation with motion/Notification/NotificationContainer";

function App() {
  const [notifications, setNotifications] = useState<string[]>([]);
  return (
    <>
      <NotificationContainer style={{ position: "absolute", right: 0 }}>
        {notifications &&
          notifications.map((notification, index) => (
            <Notification
              key={index}
              notification={notification}
              handleClose={() =>
                setNotifications(remove(notifications, notification))
              }
            />
          ))}
      </NotificationContainer>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className="add-button"
        onClick={() =>
          setNotifications(add(notifications, "hello notification"))
        }
      >
        +Stack them up
      </motion.button>
    </>
  );
}

export default App;
