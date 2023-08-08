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

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header dark={true}>{Data.Name}</Header>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/career_journey" element={<CareerJourney />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page_not_found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page_not_found" />} />
        </Routes>

        <Footer Name={Data.Name} />
      </BrowserRouter>
    </div>
  );
}

export default App;
