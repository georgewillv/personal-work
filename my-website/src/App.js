import "./App.css";
import Header from "./components/Header.js";
// import Intro from "./components/Intro.js";
import Footer from "./components/Footer.js";
// import Thumbnails from "./components/Thumbnails.js";
import Data from "./constants.js";

import AboutMe from "./components/pages/AboutMe.js";
import CareerJourney from "./components/pages/CareerJourney";
import Contact from "./components/pages/Contact";
import Education from "./components/pages/Education";
import HomePage from "./components/pages/HomePage.js";
import Mentors from "./components/pages/Mentors";
import PageNotFound from "./components/pages/PageNotFound";
import Skills from "./components/pages/Skills";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header dark={true}>{Data.Name}</Header>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/CareerJourney" element={<CareerJourney />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Mentors" element={<Mentors />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer Name={Data.Name} />
      </BrowserRouter>
    </div>
  );
}

export default App;
