import React,{Component} from 'react'
import '../bookStyle.css'
import Home from './Home'
import { Link } from 'react-router-dom';
import Profile from './Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'



function NavbarLogin(props) {
   return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
           <Link to="/Profile"> <button id = "navName" className="button-is-light" type = "button" onClick={props.fname}>
                Sun
            </button>
            </Link>  
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <Link to="/Home"> <button className="button-is-light" type="button" onClick={props.logout}>
                                Logout
                            </button>
                            </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </nav>
 
   )
}
 
export default NavbarLogin
