import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
const Order = () => {
  let user=JSON.parse(localStorage.getItem("user"))
  let previousor=[]
  previousor=user.orders
  let userid=user.id
  let bag=[]
  try{
    bag = Object.values(JSON.parse(localStorage.getItem("bag")))
  }
  catch(error){
    console.log(bag)
  }
  let [show,setshow]=useState(true)
  let [orderss,setorder]=useState(false)
  let [showprevious,setshowprevious] =useState(false)
  let [showhistory,sethistory]=useState(true)
  useEffect(()=>{
     if( bag.length>0){
      setshow(false)
      setorder(true)
     }
     if(previousor.length>0){
      setshowprevious(true)
      sethistory(false)
     }
  },[])
  let navi=useNavigate()
   let currentid=[]
   let cancel=()=>{
      currentid.map((id)=>{
      remove(id)
      console.log(id)
      })
      setshow(true)
      setorder(false)
      localStorage.removeItem("bag")
   }
  let remove=(id)=>{
    axios.delete(`http://localhost:8080/order/${id}`)
    .then(()=>{
      navi("/welcome")  
    })
    .catch((error)=>{
      alert("something went wrong")
      console.log(error)
    })
  }
let clearhistory =()=>{
  previousor.map((pizza)=>{
      remove(pizza.id)
      console.log(pizza.id)
  })
  sethistory(true)
  setshowprevious(false)
  getuser(userid)
}
let getuser=(id)=>{
  axios.get(`http://localhost:8080/user/${id}`)
  .then((response)=>{
    localStorage.setItem("user",JSON.stringify(response.data.data))
  })
  .catch((error)=>{
    alert("something went wrong")
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
              currentid.push(pizza.id)
              return(
                <div>
                     <h3>{pizza.name}</h3> <p>{pizza.cost}</p> <hr /> 
                </div>
              )
            })
          }
          <div className='d-flex justify-end'>
       <Button className='text-white' onClick={cancel}>Cancel</Button>
          </div>
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
                     <div className='d-flex justify-between mx-4'>
                        <h5>{pi.name}</h5><p>Cost : {pi.cost}</p></div>
                        <hr />
                  </div>

                )
          })
        }<div className='d-flex justify-end'>
        <button className='bg-slate-700 border-none text-white h-9 rounded' onClick={clearhistory}>Clear history</button>
           </div>
        </div>
       }
        </div>
    </div>
  )
}

export default Order