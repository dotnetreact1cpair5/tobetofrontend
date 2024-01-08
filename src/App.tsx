import Test from "./components/Test";
import ActionButtons from "./components/ActionButtons";
import Welcome from "./components/Welcome";
import Panel from "./components/Panel";

function App() {
  return (
    <>
      <main className="min-h-screen">
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
