import React, { useReducer, useEffect, useState, useMemo } from 'react';
import { useHistory } from "react-router-dom" ;
import { auth } from "../firebase/firebase";


export const AuthContextProvide = React.createContext() ;

function AuthContext({children}) {
    const [loading , setLoading] = useState(true);
    const history = useHistory();
    const [authData , setAuth] = useState();
    const [loginStatus , setLogin] = useState(false)

    useEffect(()=>{
        auth.onAuthStateChanged(user => {
            setAuth(user.providerData[0]);
            setLoading(false);
            user.email && setLogin(true) ;
            user.email ? history.push("/chat") : history.push("/login") ;
        })
        console.log(authData)
    },[history , loginStatus])

    useEffect(()=>{
        console.log(authData)
    },[authData])

  return (
    <AuthContextProvide.Provider value={{authData , setAuth , setLogin}}>
        {
            children
        }
    </AuthContextProvide.Provider>
  )
}

export default AuthContext