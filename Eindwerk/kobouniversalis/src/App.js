


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './index.css';

import Navbar from './NavBar';
import Home from './Home'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
        <Route exact path='/' component={Home} />
      
        

        </Switch>
    <div><Footer/></div>
      </Router>        
    
    </div>
  );
}

export default App;
