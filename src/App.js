import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider"; // Adjust path if necessary
import Home from "./components/home";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider>
      <Router basename="/academic-website">
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
