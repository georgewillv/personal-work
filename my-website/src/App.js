import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import Footer from "./components/Footer.js";
import Data from "./constants.js";

function App() {
  return (
    // <NavBar>

    // </NavBar>

    //Timeline of Career Journey

    <div className="App">
      <Header dark={true}>{Data.Name}</Header>
      <main>
        <Intro Name={Data.Name} Description={Data.Description} />
      </main>
      <Footer Name={Data.Name} />
    </div>
  );
}

export default App;
