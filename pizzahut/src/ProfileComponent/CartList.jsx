import React, { useState } from 'react'
import { Badge, Button, ListGroup } from 'react-bootstrap'
import { Items } from '../Component/PizzaCard'
import axios from 'axios'
import "../index.css"
import { useNavigate } from 'react-router'
const CartList = () => {
  let bag=Items
  let navi=useNavigate()
  let sum=0
  if(bag.length>0)
  {
    for(let i=0;i<=bag.length-1;i++){
     sum=sum+bag[i].cost;
    }
  }
  let Total=()=>{
    return(
      <div className=" d-flex justify-end my-3 p-2">
            <h3 className='text-black'>Total : {sum}</h3>
        </div>
    )
  }
  let U=JSON.parse(localStorage.getItem("user"))
  let remove=(n)=>{
    for(let i=0;i<=bag.length;i++){
      if(bag[i].name===n){
        bag.splice(i,1)
        navi("/welcome")
        break;
      }
    }
  }
  let order=(e)=>{
    e.preventDefault()
    if(bag.length>0){
    axios.post((`http://localhost:8080/orderall/${U.id}`),bag)
              .then((response)=>{
                alert("order has been placed")
                localStorage.setItem("bag",JSON.stringify(response.data.data))
                bag.splice(0,bag.length)
                navi("/welcome")
              }) 
              .catch((error)=>{
                console.log(error)
                alert("something went wrong")
              })}
              else
                 alert("Add pizzas to the cart")
  }
  
  return (
    <div>
        {
          bag.map((pizza)=>{
            return(
               <div>
                    <ListGroup as="ol" className="" >
                         <ListGroup.Item as="" className="d-flex mb-2 justify-content-between ">
          <div className="ms-2 me-auto d-flex align-items-center">
              <div className="fw-bold">{pizza.name}
                     <div>{pizza.cost}</div>
               </div>    
        </div>
        <div className='d-flex align-items-center justify-end'>
                <Button className='bg-red-600 h-8  border-none text-white' onClick={()=>{remove(pizza.name)}} >Remove</Button>
             </div>
        <Badge bg="primary" pill>
          
        </Badge>
      </ListGroup.Item>
    </ListGroup>
               </div>
            );
          })
        }
        <Total/>
        <div className='d-flex justify-end'>
            <Button onClick={order} className="bg-red-600 text-red-50">Order</Button>
        </div>
    </div>
  )
}

export default CartList