import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Count from "./Propdrilling and Context/challenge/Count";
import CountButton from "./Propdrilling and Context/challenge/CountButton";
import CountProvider from "./Propdrilling and Context/challenge/CountProvider";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <CountProvider>
          <Count />
          <CountButton />
        </CountProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
