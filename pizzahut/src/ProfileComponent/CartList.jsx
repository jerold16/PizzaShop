import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup, ListGroup } from 'react-bootstrap'
import { Items} from '../Component/PizzaCard'
import axios from 'axios'
import "../index.css"
import { useNavigate } from 'react-router'
let neworder=[]
const CartList = () => {
  let [code,setcode]=useState("")
  let [discount,setdiscount]=useState(0)
  let bag=Items
  let navi=useNavigate()
  let discount_amnt =0
  let del_time="with in 45 mins"
  let total_amnt=0
  let amnt_paid=0
  let items=[]
  let coupons =JSON.parse(sessionStorage.getItem("coupons"))
  let [show,setshow]=useState(false)
  let [empty,setempty]=useState(true)
  let [invalid,setinvalid]=useState(false)
  let [correct,setcorrect]=useState(false)
  if(bag.length>0)
  {
    for(let i=0;i<=bag.length-1;i++)
    {
      total_amnt=total_amnt+bag[i].cost;
    }
    discount_amnt=total_amnt*(discount/100)
    amnt_paid=total_amnt - discount_amnt
  }
  useEffect(()=>{
        if(total_amnt>0){
          setshow(true)
          setempty(false)
        }
        if(total_amnt===0){
          setshow(false)
          setempty(true)
        }
  },[total_amnt])
  let U=JSON.parse(sessionStorage.getItem("user"))
  let remove=(n)=>{
    for(let i=0;i<=bag.length;i++){
      if(bag[i].name===n){
        bag.splice(i,1)
        navi("/welcome")
        break;
      }
    }
  }
  
  let Total =()=>{
    return(
           <div visibi className=" d-flex justify-end my-3">
          {
              show && <h4 className='text-black' > <pre>Total : {total_amnt}</pre>
              <pre>Discount : {discount}% </pre>
                Amount to pay : {amnt_paid}
                         </h4> 
           }
        </div>
    )
  }
 items=bag
let data={total_amnt,amnt_paid,discount_amnt,del_time,items}

  let order=(e)=>{
    e.preventDefault()
    if(bag.length>0){

    axios.post((`http://localhost:8080/order/${U.id}`),data)
              .then((response)=>{
                alert("order has been placed")
                bag.splice(0,bag.length)
                sessionStorage.setItem("neworder",JSON.stringify(response.data.data))
                let od=(JSON.parse(sessionStorage.getItem("neworder")))
                let id=od.id
                let total_amnt=od.total_amnt
                let discount_amnt=od.discount_amnt
                let amnt_paid=od.amnt_paid
                let items=od.items
                neworder.push({id,total_amnt,discount_amnt,amnt_paid,items})
                setcorrect(false)
                setinvalid(false)
                navi("/welcome")
              }) 
              .catch((error)=>{
                console.log(error)
                alert("something went wrong")
              })}
              else
                 alert("Add pizzas to the cart")
  } 
let checkcoupon =()=>{
  if(discount===0){
    setinvalid(true)
    setcorrect(false)
  }
      coupons.map((card)=>{
           if(card.coupon===code){
            setinvalid(false)
            setcorrect(true)
            setdiscount(card.discount)  
           }
      })
      
}


   // output of regular function
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
      </ListGroup.Item>
    </ListGroup>
               </div>
            );
          })
        }
        <Total show={show}/>
        {
          show && <div className='d-flex justify-end'>
          <Button onClick={order} className="bg-red-600 text-red-50 mx-2">Order</Button>
      </div>
        }
        {
          show && <InputGroup className="my-3">
          <Form.Control
            placeholder="Add the Coupon code"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className=' font-bold text-xl'
            onChange={(e)=>{setcode(e.target.value)}}
          />
          <Button variant="outline-primary" onClick={checkcoupon} className='bg-red-600 px-4 text-white' id="button-addon2">
            ADD
          </Button>
        </InputGroup>
        }
        {
          invalid && <div className='text-red-600 text-center'>
            <p>* Invalid coupon code please check the code</p>
          </div>
        }
        {
          correct && <div className='text-green-600 text-center'>
           <p>* code for the discount activated</p>
          </div>
        }
        {
           empty && <div>
            <h5 className='text-center text-gray-500'> <hr />Empty Cart , hurry up and fill this !!! <hr /></h5>
           </div>
        }
    </div>
  )
}

export  {CartList,neworder}