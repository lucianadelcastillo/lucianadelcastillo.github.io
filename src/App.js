import './App.css';
import Home from "./components/home";
import {Route, Switch, NavLink, useLocation} from 'react-router-dom'
import Portfolio from "./components/portfolio";
import FashionStyling from "./components/fashionStyling";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";

import {
    TransitionGroup,
    CSSTransition
} from 'react-transition-group';
import {Router} from "react-router";
function App() {
    const location = useLocation();
    return (
        <div className="App">
            <div id="navbar">
                <NavLink className="navbar-link" to='/home' exact classname='navbar-links'>Home</NavLink>
                <NavLink className="navbar-link" to='/portfolio' exact classname='navbar-links'>Portfolio</NavLink>
                <NavLink className="navbar-link" to='/fashion-styling' exact classname='navbar-links'>Fashion Styling</NavLink>
                <NavLink className="navbar-link" to='/projects' exact classname='navbar-links'>Projects</NavLink>
                <NavLink className="navbar-link" to='/about' exact classname='navbar-links'>About</NavLink>
                <NavLink className="navbar-link" to='/contact' exact classname='navbar-links'>Contact</NavLink>
            </div>
            <Switch location={location}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route exact path='/fashion-styling' component={FashionStyling}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
        </div>
    );
}

export default App;
