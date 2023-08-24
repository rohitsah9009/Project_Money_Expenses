import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import UserHome from './Components/UserHome';
import ViewProfile from './Components/ViewProfile';
import UpdateProfile from './Components/UpdateProfile';
import { AddProduct } from './Components/AddProduct';
import Products from './Components/ViewProducts';
import UpdateProduct from './Components/UpdateProduct';
import ViewProducts from './Components/ViewProducts';
import Protect from './Components/Protect';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}> </Route>
                <Route path="/login" element={ < Login/>}> </Route>
                <Route path="/signUp" element={<SignUp/>}> </Route>
                <Route path="/userhome"  element={<Protect Child={UserHome}/>}> </Route>
                <Route path="/viewProfile" element={< Protect Child= {ViewProfile}/>}> </Route>
                <Route path="/updateProfile" element={< Protect Child= {UpdateProfile}/>}> </Route>
                <Route path="/addProduct" element={< Protect Child= {AddProduct}/>}> </Route>
                <Route path="/products" element={< Protect Child= {ViewProducts}/>}> </Route>
                <Route path="/updateProduct" element={< Protect Child= {UpdateProduct}/>}> </Route>
            
    </Routes>
    </BrowserRouter>
  )
}

export default App