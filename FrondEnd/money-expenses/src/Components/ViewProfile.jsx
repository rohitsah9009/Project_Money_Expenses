import React from 'react'
import rk from "./CSS/viewProfile.module.css"
import { Link, useNavigate } from 'react-router-dom'
const ViewProfile= () => {

    let  u=JSON.parse(localStorage.getItem("user"))

    let n=useNavigate()
    let logout=()=>{
      localStorage.removeItem("user")
      n("/")
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
                    <li><Link to="/updateProfile">Update</Link></li>
                    <button onClick={logout} className="white-btn">Logout</button>
                    </section>
             </div>      
            </section>
    
            {/* Body */}
            <section  className={rk.home}>
              <div className={rk.container}>
              <table className={rk.content}>
          <tr>
          <td>Id:{u.id}</td> <br />
          <td>Name:{u.name}</td> <br />
          <td>Email:{u.email}</td> <br />
          <td>Address:{u.address}</td> <br />
          <td>Phone:{u.phone}</td> <br />
          </tr >
        </table>
    
              </div>
    
            </section>
    
        </div>
      )
}

export default ViewProfile;