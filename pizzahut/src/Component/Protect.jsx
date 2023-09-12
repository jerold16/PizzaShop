import React from 'react'
import Login from './Login'

const Protect = ({Child}) => {
    let user=localStorage.getItem("user")
    let verify=()=>{
        if(user==null){
            return false
        }
        else{
        return true
    }}
  return (
    <div>
      {
        verify() ? <Child/> : <Login/>
        }
    </div>
  )
}

export default Protect