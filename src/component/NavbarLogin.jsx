import React from 'react'
import '../bookStyle.css'
import Edit from './Edit'
 
function NavbarLogin(props) {
   return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <button id = "navName" className="button-is-light" type = "button" onClick={props.fname}>
                Sun
            </button>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button-is-light" type="button" onClick={props.logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
 
   )
}
 
export default NavbarLogin
