import React from 'react'
import rk from "./CSS/UserHome.module.css"
import { Link, useNavigate } from 'react-router-dom'
const UserHome = () => {

    let n=useNavigate()
    let logout=()=>{
      localStorage.removeItem("user")
      n("/")
    }
    let add=()=>{
    
      n("/addProduct")
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
                    <li><Link to="/addProduct">Add Product</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/viewProfile">Profile</Link></li>
                    <li><Link to="/updateProfile">Update</Link></li>
                    <button onClick={logout} className="white-btn">Logout</button>
                    </section>
             </div>      
            </section>
    
            {/* Body */}
            <section  className={rk.home}>
              <div className={rk.container}>
                <div className={rk.content}>
                      <h1 className={rk.h1}>Never spend your money before you have it</h1>
                      <p>if you spend more than you earn, <br /> it simply means that you might be <br /> having a serious  problem which may be even mental</p> <br /> <br />
                      <span className={rk.span}>__Rohit</span> <br /> <br /> <br />
    
                      <button className="body-btn" onClick={add}>Get Started</button>
                </div>
    
              </div>
    
            </section>
    
        </div>
      )
}

export default UserHome;