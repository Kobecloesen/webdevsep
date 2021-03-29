import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar, Nav, } from 'react-bootstrap'


class BootstrapNavbar extends React.Component {
render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="light" variant="light" expand="lg" sticky="top" >
                <a className="navBar-brand" href="/adopt"><img src="images/logo_happytails.png"  className="logoclass"/></a>
                <Navbar.Brand className="test"  >
                  <b>Happytails</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/adopt">Adopt</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/aboutus">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    
                  </Nav>
                  
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                </Route>
                <Route path="/adopt">
                </Route>
                <Route path="/blog">
                </Route>
                <Route path="/aboutus">
                </Route>
                <Route path="/contact">
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
       
      </div>


    )

  }

}
export default BootstrapNavbar;





