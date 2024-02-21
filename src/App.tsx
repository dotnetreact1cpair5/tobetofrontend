import Test from "./components/Test";
import ActionButtons from "./components/ActionButtons";
import Welcome from "./components/Welcome";
import Panel from "./components/Panel";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  return (
    <>
      <main className="min-h-screen">
        <Welcome />

        <Panel />

        <Test />

        <ActionButtons />
      </main>
    </>
  );
}

export default App;
