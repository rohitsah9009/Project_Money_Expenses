import React, { useState } from 'react'
import rk from "./CSS/addProduct.module.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddProduct = () => {

    let [name,setName]=useState("");
    let [cost,setCost]=useState("");
    let [comment,setComment]=useState("");
  

    

    let add=(e)=>{
        let user=JSON.parse(localStorage.getItem("user"))
        e.preventDefault()
    
        let product ={name,cost,comment}
        axios.post(`http://localhost:8080/products/${user.id}`,product).then((response)=>{
          alert("product added successfully")
          window.location.reload(true);
        }).catch(()=>{
          alert("something is wrong")
        })
      }
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
               {/* <li><Link to="/login">Add Product</Link></li> */}
               <li><Link to="/products">Products</Link></li>
               <li><Link to="/viewProfile">Profile</Link></li>
               <button onClick={logout} className="white-btn">Logout</button>
               </section>
        </div>      
       </section>
        <div className={rk.body}>
         
            <section className={rk.container}>
                <div className={rk.content} >
                <form action="" onSubmit={add}>
    
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
    
            </div>
       
      )
  
}
export default AddProduct;
