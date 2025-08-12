import { useContext } from "react";
import { CountContext } from "./CountProvider";

const CountButton = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("CountContext must be used within a CountProvider");
  }

  return (
    <button onClick={() => context.setCount(context.count + 1)}>
      Increment
    </button>
  );
};

export default CountButton;
