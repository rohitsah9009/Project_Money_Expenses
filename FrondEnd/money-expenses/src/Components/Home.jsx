import React from 'react'
import "../global.css"
import rk from "./CSS/home.module.css"
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
let n=useNavigate();

let login=()=>{
    
  n("/login")
}
  return (
    <div>

        {/* Navbar */}

        <section className={rk.navBar}>

         <div className={rk.navContainer}>
          {/*NavLeft */}
                <section className={rk.navLeft}>
                    <h1 className={rk.logo}>Money Expenses</h1>
                </section>

                {/* NavRight */}
                <section className={rk.navRight}>
                <li><Link to="/login">Add Product</Link></li>
                <li><Link to="/login">Products</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signUp">Sign Up</Link></li>
                </section>
         </div>      
        </section>

        {/* Body */}
        <section  className={rk.home}>
          <div className={rk.container}>
            <div className={rk.content}>
                  <h1 className={rk.h1}>Save money Save reputation</h1>
                  <p>Spending money may be fun,  <br />but these saving money quotes will show you <br />just how important it is to save..</p> <br /> <br />
                  <span className={rk.span}>__Rohit</span> <br /> <br /> <br />

                  <button className="body-btn" onClick={login}>Get Started</button>
            </div>

          </div>

        </section>

    </div>
  )
}

export default Home