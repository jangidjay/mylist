import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/Signup";
import AboutUs from "./Components/Pages/Aboutus";
import Account from "./Components/Pages/Account";
import Anime from "./Components/Pages/Anime";
import Movies from "./Components/Pages/Movies";
import Series from "./Components/Pages/Series";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
