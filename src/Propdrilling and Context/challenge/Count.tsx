import { useContext } from "react";
import { CountContext } from "./CountProvider";

const Count = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("CountContext must be used within a CountProvider");
  }

  return <h3>{context.count}</h3>;
};

export default Count;
