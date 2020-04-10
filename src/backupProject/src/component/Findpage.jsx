import React,{Component} from 'react'
import NavbarLogin from './NavbarLogin'
import ModalProfile from './ModalProfile'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../bookStyle.css'

function Findpage (){

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onadd(this.onadd);    
    // }

    // onchange =(e) => {
    //     e.preventDefault();
    //     this.props.onChange(this.onChange);
    // }

   
        return(
            <div>
                <NavbarLogin/>
                <div className = "center" >
                    <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
                    . h o t e l  
                    </div>
                    <div>
                        <form action="" className="form" > 
                            <label className="label"> Type Room : </label>
                            <select className="typeRoom">
                                <option value="Superior">Superior &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Delux">Delux room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Sweet">Sweet room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Suit">Suit room &nbsp;&nbsp; ( 4 people )</option>
                                <option value="Family">Family room &nbsp;&nbsp; ( 4 people )</option>
                            </select>
                            <label className="label"> Check in : </label>
                            <input type="date"  name="checkin" value="2020-04-04" min="2020-04-05" max="2021-12-31"/>
                            <label className="label"> Check out : </label>
                            <input type="date" name="checkout" value="2020-04-05" min="2020-04-05" max="2021-12-31"/>
                            <label className ="label"> Amount : </label>   
                            <input type="number" name="amount" placeholder="0"/>
                            <input type="submit" value="FIND" />    
                        </form>
                    </div>
                </div>
                <div className="col-100findFoot">
                    <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
                    . h o t e l  &nbsp;&nbsp; | &nbsp;&nbsp;
                        <Link to="/About">
                            <button className="footerBtn">
                            a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
                            </button>
                        </Link>
                        
                </div>
            </div>
                
        </div>
    )
}

export default Findpage
