import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContextProvide } from '../context/AuthContext'
import { auth } from "../firebase/firebase"
function NavBar() {
  // const userAuth = useContext(AuthContextProvide) ;
  const history = useHistory()

  const logout = async() => {
    await auth.signOut() ;
    history.push("/login")
  }
  return (
    <section className="navbar_container">
        <div className="logo_container">
        <h5 className="login_title">HadiGram</h5>
        </div>
        <nav>
          <button className="login-btn" onClick={logout}>Logout</button>
        </nav>
    </section>
  )
}

export default NavBar