import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import rk from "./CSS/update.module.css"
import axios from 'axios'

const UpdateProduct=()=> {

  let p =JSON.parse(localStorage.getItem("product"))
 
  let [name,setName]=useState(p.name)
  let [cost,setCost]=useState(p.cost)
  let [comment,setComment]=useState(p.comment)
  let [id,setId]=useState(p.id)


  let n=useNavigate()

  let up=(e)=>{
    let user=JSON.parse(localStorage.getItem("product"))
    e.preventDefault()

    let product ={id,name,cost,comment}
    axios.put(`http://localhost:8080/products/${user.id}`,product).then(()=>{
      
      // alert("Product Updated successfully")
      n("/products")
    }).catch(()=>{
      alert("something is wrong")
      // n("/viewProducts")
    })
  }
  
  
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
           <li><Link to="/viewProfile">Profile</Link></li>
           <button onClick={logout} className="white-btn">Logout</button>
           </section>
    </div>      
   </section>

      {/* Add Product */}

      <section className={rk.body}>
        <div className={rk.container}>
            <form onSubmit={up}>
            <label htmlFor="">Product Name</label> <br />
                    <input className={rk.input} type="text" placeholder="Abc" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br /> <br />
    
                    <label htmlFor="">Cost</label> <br />
                    <input className={rk.input} type="number" placeholder="1234" value={cost} onChange={(e)=>{setCost(e.target.value)}}/> <br /> <br />
    
                        <textarea name="" id="" cols="55" rows="10" value={comment} placeholder='comment' onChange={(e)=>{setComment(e.target.value)}}></textarea> <br /> <br />

                    <button className='main-btn'>Submit</button> <br /> <br />
                    </form>
        </div>
      </section>


    </div>
  )
}

export default UpdateProduct;