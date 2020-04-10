import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Home from './component/Home'
import TableList from './component/TableList'
// import Room from './component/Room'
import firebase from './firebase/firebase'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Findpage from './component/Findpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './component/Profile'
import Signin from './component/Signin'
import About from './component/About'

export default class App extends Component {
  //**********For Add Firebase************/
  state = {
    test: []
  }

  findData = () => {
    firebase.firestore().collection('Room').orderBy('type').onSnapshot(doc => {
      const data = []
      doc.forEach(item => {
        data.push({
          prize:item.data().prize,
          type:item.data().type,
          room:item.data().room,
          amount:item.data().amount,
         
        })
    })
    this.setState( {  test: data.reverse() })
   })
  }

  // validateForm = (name) => {
  //   if (!name) {
  //     window.alert('Please fill in ALL data fields.');
  //     return false;
  //   } else if ( !isNaN(name)) {
  //     window.alert('Please fill only TEXT detail in transaction name.');
  //     return false;
  //   }
  //     return true;
  // }

  addData = () => {

    const newData = {
        room: "R001",
        type: "Delux",
        amount: 2,
        prize: 2000,
        name: "",
        surname: "",
        ID: "",
        status: false,
          
    }
    
    firebase.firestore().collection('Room').add(newData)
    this.state.test.unshift(newData);
    // this.setState( { test: this.state.test } );
  }
  

  render() {
    return (
      // <Home/>
      <Router>
      <div className="container mt-4 mb-5">

        <Route exact path="/" render={ props => (
          <div>
          <Home addData = {this.addData} 
                findData = {this.findData}/>
          <TableList
              test={this.state.test} />
          </div>
        )} />
         
         <Switch>
            <Route path="/Findpage">
              <Findpage />
            </Route>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Signin">
              <Signin />
            </Route>
            <Route path="/About">
              <About />
            </Route>
         </Switch>
         </div>
      </Router>
    )
  }
}


