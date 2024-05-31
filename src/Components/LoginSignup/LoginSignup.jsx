import React, { useState } from 'react'
import './LoginSignup.css'
import User from '../Assets/person.png'
import User_email from '../Assets/email.png'
import user_password from '../Assets/password.png'

const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
      <div className="title">
        <h1 className="text">{action}</h1>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={User} alt="" />
            <input type="text" placeholder='Name' />
        </div>}
        <div className="input">
            <img src={User_email} alt="" />
            <input type="text" placeholder='Email id' />
        </div>
        <div className="input">
            <img src={user_password} alt="" />
            <input type="text" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="lost">Lost password?<span>click here!</span></div>}
      <div className="submit">
        <button className={action==="Login"?"submit-btn gray":"submit-btn"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
        <button className={action==="Sign Up"?"submit-btn gray":"submit-btn"} onClick={()=>{setAction("Login")}}>Login</button>
      </div>
    </div>
  )
}

export default LoginSignup
