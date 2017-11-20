import React, { Component } from 'react';
import {NavLink,  Redirect } from 'react-router-dom';
import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from './actions'
import './App.css';


const Login  = ({successLogin}) => {
    return (
      <div className="App">
         {
            successLogin  && <Redirect to = "/home" />
         }
         <h1> Login</h1>
         <form onSubmit = {
            e => {
               e.preventDefault();
               signIn ( this.emailInputRef.value,  this.passwordInputRef.value)
            }
         }>
            <input  placeholder="email"  ref = { e => this.emailInputRef = e}/>
            <input   type="password" placeholder="password"  ref = { e => this.passwordInputRef = e}/>
            <button type = "submit" > 
               Login 
            </button>
         </form>
      </div>
    );
} 
 const mapToProps = ({successLogin})  => ({successLogin}) 
 export default connect(mapToProps)(Login) ;
 