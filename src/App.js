import React from "react";
import Courses from "./components/courses/Courses";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Results from "./components/results/Results";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
      <Courses />
      <Results />
      <Team />
    </div>
  );
}

export default App;
