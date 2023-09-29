import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import "../index.css"
import axios from 'axios'
import { useNavigate } from 'react-router'
import "../css/mystyle.css"
const Profiled = () => {
  let user =JSON.parse(sessionStorage.getItem("user"))
  let password=user.password
  let id=user.id
  let navi=useNavigate()
  let [name,setname]=useState(user.name)
  let [email,setemail]=useState(user.email)
  let [phone,setphone] =useState(user.phone)
  let [ndisable,setndisable]=useState(true)
  let [edisable,setedisable]=useState(true)
  let [pdisable,setpdisable]=useState(true)
  let back=()=>{
    navi("/welcome")
  }
let update=(e)=>{
e.preventDefault()
       let User={name,email,phone,password,id}

       axios.put((`http://localhost:8080/user`),User)
       .then((response)=>{
        sessionStorage.setItem("user",JSON.stringify(response.data.data))
        alert("User updated")
       })
       .catch((error)=>{
        console.log(error)
        alert("something went wrong")
       })
}
  return (
    <div className="d-flex justify-center align-items-center h-screen">

      <Form className="w-1/2 min-w-max  border border-3 p-4 rounded">
     <InputGroup className="mb-3 h-14">
            <InputGroup.Text id='basicaddon1'>
            Name :
            </InputGroup.Text>
            <Form.Control id="input" disabled={ndisable} onChange={(e)=>{setname(e.target.value)}} value={name}/>
            <InputGroup.Text className='border border-x-0'><button onClick={(e)=>{e.preventDefault();setndisable(!ndisable)}} className='border-none bg-inherit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg> </button></InputGroup.Text>
     </InputGroup>
     <InputGroup className="mb-3 h-14">
            <InputGroup.Text id='basicaddon1'>
            Email :
            </InputGroup.Text>
            <Form.Control id="input" disabled={edisable} onChange={(e)=>{setemail(e.target.value)}} value={email}/>
            <InputGroup.Text className='border border-x-0'><button onClick={(e)=>{e.preventDefault();setedisable(!edisable)}} className='border-none bg-inherit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg> </button></InputGroup.Text>
     </InputGroup>
     <InputGroup className="mb-3 h-14">
            <InputGroup.Text id='basicaddon1'>
            Phone :
            </InputGroup.Text>
            <Form.Control id="input" disabled={pdisable} onChange={(e)=>{setphone(e.target.value)}} value={phone}/>
            <InputGroup.Text className='border border-x-0'><button onClick={(e)=>{e.preventDefault();setpdisable(!pdisable)}} className='border-none bg-inherit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg> </button></InputGroup.Text>
     </InputGroup>
     <Button onClick={update} className='float-right text-white'>Set Changes</Button>
     <Button onClick={back} className='text-white float-right mx-3'>Back</Button>
      </Form>
    </div>
  )
}

export default Profiled