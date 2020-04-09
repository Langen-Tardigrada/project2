import React, { Component } from 'react'
import { Route } from 'react-router-dom'


<div className = "center">{/* ---------------------------------------------------------------- Sign in page */} 
<form action="" className="form" > 
    <div className="col-25">  
        <label className="forms">Name: </label>
    </div>
    <div className="col-75">
        <input type="text" name="fname" placeholder="Jacob"/>
    </div>
    <div className="col-25">
        <label className="forms">Surname: </label>
    </div>
    <div className="col-75">
        <input type="text" name="lname" placeholder="Wilton"/>
    </div>
    <div className="col-25">
        <label className="forms"> Email: </label>
    </div>
    <div className="col-75">
        <input type="email" placeholder="Jacob@example.com"/>
    </div>
    <div className="col-25">
        <label className="forms"> Password: </label>
    </div>
    <div className="col-75">
        <input type="password" />
    </div>  
    <div className="col-25">
        <label className="forms"> Confirm password:</label>
    </div>
    <div className="col-75">
        <input type="password" />
    </div>
    <div className="confirmSigninLabel">
        <label for="confirmSignin" > My information is correct.</label>     
    </div>
    <div className="checkbox" >
        <input type="checkbox" className="confirmSignin" name="confirmSignin"/> 
    </div>
    <div className="col-100">
        <input type="submit" id="submit" value="SIGN IN"/> {/* login */}
    </div>
 </form>  
</div>