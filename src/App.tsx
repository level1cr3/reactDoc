import { useState } from "react";
import "./App.css";
import MyCountContext from "./Propdrilling and Context/Context/MyCountContext";
import PropDrilling from "./Propdrilling and Context/PropDrilling";

function App() {
  const [count] = useState(77);

  return (
    <>
      <MyCountContext.Provider value={count}>
        <PropDrilling count={count} />
      </MyCountContext.Provider>
    </>
  );
}

export default App;
