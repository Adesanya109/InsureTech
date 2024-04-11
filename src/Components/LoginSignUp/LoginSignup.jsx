import React from 'react'
import './LoginSignup.css'



const LoginSignup = () => {
  return (
    <div classname='container'>
        <div classname="header">
            <div classname="text">Sign Up</div>
            <div classname="underline"></div>
        </div>
        <div classname="inputs">
            <div classname="input">
                <img src={user_icon} alt=""/>
                <input type="text"/>
            </div>

            <div classname="input">
                <img src={email_icon} alt=""/>
                <input type="email"/>
            </div>

            <div classname="input">
                <img src={password_icon} alt=""/>
                <input type="password"/>
            </div>


        </div>
        
        
    </div>
  )
}

export default LoginSignup
