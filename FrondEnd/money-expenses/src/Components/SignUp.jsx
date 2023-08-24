import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import "../global.css"
import rk from "./CSS/signUp.module.css"
import axios from "axios";
const SignUp = () => {
    let [name ,setName]=useState();
    let [phone ,setPhone]=useState();
    let [email,setEmail]=useState();
    // let [gender ,setGender]=useState();
    let [address ,setAddress]=useState();
    let [password ,setPassword]=useState();

    let   navigate=useNavigate()
    
    let onClick=(e)=>{
        e.preventDefault()
        let user={name,phone,email, address,password}
        axios.post("http://localhost:8080/users",user).then(()=>{
            alert("Account Created Successfully")
            navigate("/login")
        }).catch(()=>{
            alert("Something is Wrong")
        })
    }

  return (
    <div>
        <section className={rk.navBar}><h1 className={rk.h1}>Money Expenses</h1></section>
    <div className={rk.body}>
     
        <section className={rk.container}>
            <div className={rk.content} >
            <form action="" onSubmit={onClick} >

                <label htmlFor="">Full Name</label> <br />
                <input className={rk.input} type="text" placeholder="Abc" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br /> <br />

                <label htmlFor="">Phone</label> <br />
                <input className={rk.input} type="tel" placeholder="123456789" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/> <br /> <br />

                <label htmlFor="">Email</label> <br />
                <input className={rk.input} type="email" placeholder="abc@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /> <br />

                    <textarea name="" id="" cols="55" rows="10" value={address} placeholder='address' onChange={(e)=>{setAddress(e.target.value)}}></textarea> <br /> <br />

                <label htmlFor="">Password</label> <br />
                <input className={rk.input} type="password" placeholder="*****" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />

                <button className='main-btn'>Submit</button> <br /> <br />
            </form>
            <span className={rk.span}>Already have an Account ? <Link to="/login">Login</Link></span>
            </div>
        </section>
        </div>

        </div>
   
  )
}

export default SignUp;