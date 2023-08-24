import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
// import "../global.css"
import rk from "./CSS/login.module.css"
import axios from "axios";
const Login = () => {
    let [email,setEmail]=useState();
    let [password ,setPassword]=useState();
    let navigate=useNavigate();
    let onClick=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/users/verifyByEmail?email=${email}&password=${password}`).then((response)=>{
            localStorage.setItem("user",JSON.stringify(response.data.data))
            
            console.log(response.data.message)
            // alert(response.data.message)
            navigate("/userhome")
        }).catch(()=>{
            alert("Invalid Phone and Password")
            navigate("/login")
        })
    }

  return (
    <div>
        <section className={rk.navBar}>
            <h1 className={rk.h1}>Money Expenses</h1>
            <li><Link to="/">Home</Link></li>
        </section>
    <div className={rk.body}>
        {/* <section></section> */}
        <section className={rk.container}>
            <div className={rk.content} >
            <form action="" onSubmit={onClick} >
                <label htmlFor="">Email</label> <br />
                <input className={rk.input} type="email" placeholder="abc@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /> <br />
                <label htmlFor="">Password</label> <br />
                <input className={rk.input} type="password" placeholder="*****" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />
                <button className='main-btn'>Login</button> <br /> <br />
            </form>
            <span className={rk.span}>Not a member ? <Link to="/signUp" > Create Account</Link></span>
            </div>
        </section>
        </div>
   </div>
  )
}

export default Login