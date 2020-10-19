import React from "react";
import "./css/App.scss";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Redirect to="/home" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
