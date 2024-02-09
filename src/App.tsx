import Test from "./components/Test";
import ActionButtons from "./components/ActionButtons";
import Welcome from "./components/Welcome";
import Panel from "./components/Panel";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = () => toast.success("Giriş başarılı.");
  useEffect(() => {
    notify();
  }, []);

  return (
    <>
      <main className="min-h-screen">
        <ToastContainer position="top-right" />
        {/* welcome */}
        <Welcome />

        {/* hero */}
        <Panel />

        {/* tests */}
        <Test />

        {/* action buttons */}
        <ActionButtons />
      </main>
    </>
  );
}

export default App;
