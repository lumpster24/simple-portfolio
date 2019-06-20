import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Home, Contact } from './pages'
import Header from './components/navigation/Header'

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route path='/' exact component={Home} />
        <Route path='/contact/' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
