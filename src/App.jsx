import "./App.css";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <h1 className="text-red-500">Hallo World</h1>
    </>
  );
}

export default App;
