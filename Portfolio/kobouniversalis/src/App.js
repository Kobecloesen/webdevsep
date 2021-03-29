

import Navbar from './NavBar';
import Home from './Home'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
