import React, { useContext, useEffect, useState } from 'react'
import NavBar from "./NavBar"
import {ChatEngine} from "react-chat-engine"
import { AuthContextProvide } from '../context/AuthContext'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Chat() {
  const userAuth = useContext(AuthContextProvide) ;
  const [loading , setLoading] = useState(true) ;
  const history = useHistory();
  console.log(userAuth)

  useEffect(()=>{
    if(!userAuth.authData){
      history.push("/login");
      return ;
    }
    axios.get("https://api.chatengine.io/users/me" , {
      headers : {
        "project-id" : "04ec53ad-286f-4e02-81b0-5865efc1efad" ,
        "user-name" : userAuth.authData.displayName ,
        "user-secret" : userAuth.authData.uid ,
      }
    })
    .then(resp => setLoading(false))
    .catch(err => {
      let form = new FormData();
      form.append("email" , userAuth.authData.email)
      form.append("username" , userAuth.authData.displayName)
      form.append("secret" , userAuth.authData.uid)
      getImage()
        .then(resp => form.append("avatar" , resp , resp.name))

      axios.post("https://api.chatengine.io/users/" , form , {
        headers : {
          "private-key" : "727b1b23-02bc-4ed4-a13e-aa4d119ae4c2" , 
        }
      })
      .then(resp => setLoading(false))
      .catch(err => console.log(err))
    })
  },[userAuth.authData , history])

  const getImage = async() => {
    const response = await fetch(userAuth.authData.photoURL) ;
    const data = await response.blob();
    console.log(data)
    return new File([data] , "userPhoto.jpg" , {type:"image/jpeg"})
  }

  if(userAuth.authData && !loading){
    return (
      <section className="chat_container">
          <NavBar/>
          <ChatEngine
            className="chatEngine"
            height = "calc(100vh - 40px)"
            projectID = "04ec53ad-286f-4e02-81b0-5865efc1efad"
            userName = {userAuth.authData.displayName}
            userSecret = {userAuth.authData.uid}
          />
      </section>
    )
  }else return "loading ...."
}

export default Chat