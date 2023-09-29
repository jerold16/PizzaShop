import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { neworder } from './CartList'
const Order = () => {
  let user=JSON.parse(sessionStorage.getItem("user"))
  let previousor= user.orders
  console.log(previousor);
  let userid=user.id
  let bag
  try{
      bag=neworder
    }
  catch{

      }
      console.log(bag)
  let [show,setshow]=useState(true)
  let [orderss,setorder]=useState(false)
  let [showprevious,setshowprevious] =useState(false)
  let [showhistory,sethistory]=useState(true)
  useEffect(()=>{
     if(bag.length>0){
      setshow(false)
      setorder(true)
     }
     if(previousor.length>0){
      setshowprevious(true)
      sethistory(false)
     }
  },[])
  let navi=useNavigate()
  let remove=(id)=>{
      for(let i=0;i<=bag.length;i++){
        if(bag[i].id===id){
          cancel(id)
          bag.splice(i,1)
          navi("/welcome")
          break;
        }
      }
      if(bag.length===0){
        setshow(true)
        setorder(false)
       }
  }
   
  let erase=(id)=>{
    axios.delete(`http://localhost:8080/order/${id}`)
    .then(()=>{
      console.log("done"); 
      getuser()
    })
    .catch((error)=>{
      alert("something went wrong")
      console.log(error)
    })
  }
  let cancel=(id)=>{
    axios.delete(`http://localhost:8080/order/${id}`)
    .then(()=>{
      console.log("done"); 
    })
    .catch((error)=>{
      alert("something went wrong")
      console.log(error)
    })
  }
let clearhistory =()=>{
  previousor.map((item)=>{
    erase(item.id)
   })
  sethistory(true)
  setshowprevious(false)
}
let getuser=(e)=>{
  axios.get(`http://localhost:8080/user/${userid}`)
   .then((response)=>{
    sessionStorage.setItem("user",JSON.stringify(response.data.data))
    console.log("user changed")
      })
  .catch((error)=>{
    console.log(error)
  })
}
  return (
    <div>
      <div id='current_order'>
        <h3 className='mb-3'>Current orders</h3>
        {
          show && <h4 className='text-center text-gray-500'> <hr />no orders placed <hr /></h4> 
        }
        {
          orderss && <div>
          {
            bag.map((pizza)=>{
              let id= pizza.id
              console.log(pizza.items)
              let item=[]
             item=pizza.items
              return(
                <div>
                  <hr />
                  <h4>Order ID :{pizza.id}</h4>
                     <div>
                               {item.map((items)=>{
                              return(
                                <div className='d-flex justify-between'>
                                  <h5> {items.name} </h5>
                                  Price : {items.cost}
                                </div>
                              )
                                })}
                        </div>
                        <div className='d-flex justify-end'>
                        <h5> Total amnt : {pizza.total_amnt}</h5>
                        </div>
                        <div className='d-flex justify-end'>
                        <h5> Discount amnt : {pizza.discount_amnt}</h5>
                        </div>
                        <div className='d-flex justify-end'>
                        <h5> Amount paid : {pizza.amnt_paid}</h5>
                        </div>
                        <div className='d-flex my-3 justify-end'>
       <Button className='text-white' onClick={()=>{remove(id)}}>Cancel</Button>
          </div>
                    </div>
              )
            })
          }
          
          <hr />
        </div>
        }

        </div>
      <div id='Previous_order' className='mt-5'>
        <h3 className='text-red-600 mb-3'>Previous orders</h3>
        {
          showhistory && <h4 className='text-center text-gray-500'> <hr />No Privous orders <hr /></h4> 
        }
       {
        showprevious && <div>
           {
          previousor.map((pi)=>{
                return (
                  <div>
                     <div className='d-flex flex-column justify-between mx-4'>
                     <h5>Order Id : {pi.id}</h5> <div id='Items'>
                               {pi.items.map((item)=>{
                              return(
                                <div className='d-flex justify-between'>
                                  <h5> {item.name} </h5>
                                  Price : {item.cost}
                                </div>
                              )
                                })}
                           </div>
                          
                           <div className='d-flex justify-end'>
                        <h5> Total amnt : {pi.total_amnt}</h5>
                        </div>
                           <div className='d-flex justify-end'>
                        <h5> Discount amnt : {pi.discount_amnt}</h5>
                        </div>
                        <div className='d-flex justify-end'>
                        <h5> Amount paid : {pi.amnt_paid}</h5>
                        </div>
                       
                        </div>
                        <hr />
                  </div>

                )
          })
        }
        <div className='d-flex justify-end'>
        <button className='bg-slate-700 border-none text-white h-9 rounded' onClick={clearhistory}>Clear history</button>
           </div>
        </div>
       }
        </div>
    </div>
  )
}

export default Order