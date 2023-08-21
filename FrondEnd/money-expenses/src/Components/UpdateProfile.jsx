import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import "../global.css"
import rk from "./CSS/update.module.css"
import axios from "axios";

const UpdateProfile = () => {

    let  u=JSON.parse(localStorage.getItem("user"))

    let [id,setId]=useState(u.id);
    let [name ,setName]=useState(u.name);
    let [phone ,setPhone]=useState(u.phone);
    let [email,setEmail]=useState(u.email);
    let [address ,setAddress]=useState(u.address);
    let [password ,setPassword]=useState(u.password);

    let   navigate=useNavigate()
    
    let onClick=(e)=>{
        e.preventDefault()
        let user={id,name,phone,email, address,password}
        axios.post("http://localhost:8080/users",user).then((response)=>{
            alert("Account Updated Successfully")
            localStorage.setItem("user",JSON.stringify(response.data.data))
            // console.log(response)
            navigate("/viewProfile")
        })
    }
    let logout=()=>{
        localStorage.removeItem("user")
        navigate("/")
    }

  return (
    <div>
         {/* Navbar */}
    
         <section className={rk.navBar}>
    
    <div className={rk.navContainer}>
     {/*NavLeft */}
           <section className={rk.navLeft}>
               <h1>Money Expenses</h1>
              
           </section>

           {/* NavRight */}
           <section className={rk.navRight}>
               <li> <Link to="/userhome">Home</Link></li>
           <li><Link to="/addProduct">Add Product</Link></li>
           <li><Link to="/products">Products</Link></li>
           <li><Link to="/viewProfile">Profile</Link></li>
           <button onClick={logout} className="white-btn">Logout</button>
           </section>
    </div>      
   </section>

   {/* Body */}
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
            
            </div>
        </section>
        </div>

        </div>
   
  )
}

export default UpdateProfile;