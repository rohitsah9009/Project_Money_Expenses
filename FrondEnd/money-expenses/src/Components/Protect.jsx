import React from 'react'
import Home from './Home';

const Protect = ({Child}) => {  
    let verify=()=>{
let user=localStorage.getItem("user")
if(user==null){
return false;
}
else{
return true;
}
    }
  return (
  
       <>

            {
            verify() ? <Child/> :<Home/>}
        </>             
   
  )
}

export default Protect
