import "./App.css";
import Home from "./Home";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Home />
        <Bio />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
