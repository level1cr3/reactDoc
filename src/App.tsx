import "./App.css";
import ErrorBoundry from "./Error Boundary/ErrorBoundry";
import InsideErrorBoundry from "./Error Boundary/InsideErrorBoundry";
import OutSideErrorBoundry from "./Error Boundary/OutSideErrorBoundry";

function App() {
  return (
    <>
      <OutSideErrorBoundry />
      <ErrorBoundry fallback={<h2> something went wrong.</h2>}>
        <InsideErrorBoundry />
      </ErrorBoundry>
    </>
  );
}

export default App;
