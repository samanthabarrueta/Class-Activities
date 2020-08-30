import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  );
  
}

export default App;
