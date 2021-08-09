import Navbar from "./components/Navbar";
import "./App.css"
import Hero from "./components/Hero";



function App() {
  return (
    <div>
      <Navbar/>
      <div className="main">
        <Hero/>
      </div>
      
    </div>
  );
}

export default App;
