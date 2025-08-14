import { useState } from "react";
import "./App.css";
import ArtistPage from "./Suspense/ArtistPage";

function App() {
  const [show, setShow] = useState(false);

  if (show) {
    return <ArtistPage name="The Beatles" slug="the-beatles" />;
  }

  return (
    <button onClick={() => setShow(!show)}>Open the beatles artist page</button>
  );
}

export default App;
