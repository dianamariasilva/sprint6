import React, { Component } from 'react';
import {connect} from 'redux-zero/react'

import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp} from './actions'
import './App.css';


const App  = ({successLogin, user}) => {
    return (
      <div className="App">
         {
            !successLogin  && <Redirect to = "/login" />
         }
         <h1> TRELLO </h1>
         <button onClick = {signOut}>
            SignOut
         </button>   
            <div>
                 {user.email} - {user.fullname} - {user.survey} -  {user.question} - {user.options} 
            </div>
      </div>
    );
} 
const mapToProps = ({successLogin,user})  => ({successLogin, user}) 
export default connect(mapToProps)(App) ;
