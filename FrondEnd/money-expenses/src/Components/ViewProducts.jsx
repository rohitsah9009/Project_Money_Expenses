import React, { useEffect, useState } from 'react'
import rk from "./CSS/viewProduct.module.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const ViewProducts=() => {

  let navigate=useNavigate();

  let logout=()=>{
    localStorage.removeItem("user")
    navigate("/")
  }

  let editProduct=((id)=>{
      axios.get(`http://localhost:8080/products/${id}`).then((response)=>{
          localStorage.setItem("product",JSON.stringify(response.data.data))
      
          navigate("/updateProduct")
      }).catch(()=>{
          alert("something is wrong")
      })
  })

let deleteProduct=((id)=>{
  axios.delete(`http://localhost:8080/products/${id}`).then((response)=>{
    //   alert(response.data.message)
      window.location.reload(true);
  }).catch(()=>{
      alert("something is wrong")
  })
})

 let [products,setProducts]=useState([]);
  let u =JSON.parse(localStorage.getItem('user'));
useEffect(()=>{
    let fetchData=()=>{
        axios.get(`http://localhost:8080/products/user_id/${u.id}`)
        .then((response)=>{
            setProducts(response.data.data)
        })
        .catch(()=>{
            alert("Not a good Request")
        })
    }
    fetchData()
},[])


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
        
           <li><Link to="/viewProfile">Profile</Link></li>
           <button onClick={logout} className="white-btn">Logout</button>
           </section>
    </div>      
   </section>

 {/* Body */}
  <div className={rk.home}>
    <div className={rk.container}>
      <table  className={rk.table}>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Comment</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
          {
              products.map((p)=>{
                  return(
                      <tr>
                          <td>{p.id}</td>
                          <td>{p.name}</td>
                          <td>{p.cost}</td>
                          <td>{p.comment}</td>
                          <td><button className="white-btn" onClick={()=>{editProduct(p.id)}}>edit</button></td>
                          <td><button className="white-btn" onClick={()=>{deleteProduct(p.id)}}>delete</button></td>
                      </tr>
                  )
              })
          }
         
      </table>
      </div>
  </div>
  </div>
)
}

export default  ViewProducts