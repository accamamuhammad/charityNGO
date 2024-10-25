import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <main className="w-screen bg-mainBg h-screen px-8 py-6 flex flex-col items-start justify-start">
        <Navbar />
      </main>
    </>
  );
}

export default App;
