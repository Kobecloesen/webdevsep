import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Blog from './pages/Blog';
import Navbar from './components/Navibar';
import Aboutus from './pages/Aboutus';
import Contact, { MyForm } from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/adopt' component={Adopt} />
        <Route path='/blog' component={Blog} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    
    
      
      
      
    </div>
  );
}

export default App;



