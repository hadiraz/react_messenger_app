import React from 'react'
import logo from "../assets/images/icons8-google.svg"
import firebase from 'firebase/app'
import { auth } from "../firebase/firebase"

function Login() {
    const loginHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider) ;
        
    }

  return (
    <section className="login_container">
        <h3 className="login_title">Welcome to HadiGram</h3>
        <button className="login-btn" onClick={loginHandler}>
            <img src={logo} alt="logo"/>
            Sign in to google
        </button>
    </section>
  )
}

export default Login