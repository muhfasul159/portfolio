import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

class App extends React.Component {
  
  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="sticky-top bg" expand='lg'>
            <Navbar.Brand href=''>Michael</Navbar.Brand>
            
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Navbar className='ml-auto'>
                <Link className='nav-link' to='/portfolio'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>

              </Navbar>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path='/portfolio'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/contact'>
              <ContactPage />
            </Route>
          </Switch>

          <Footer />

        </Container>
      </Router>
      );
  }
  
}

export default App;
