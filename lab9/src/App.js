import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './css/App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
