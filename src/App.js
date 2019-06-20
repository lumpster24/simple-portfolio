import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
