import React, { useState } from 'react'
import { Button, FloatingLabel, Form, InputGroup, Modal } from 'react-bootstrap'
import "../index.css"
import axios from 'axios';
import { useNavigate } from 'react-router';
const Forgot = () => {
    let [email,setEmail]=useState("")
    let [otp,setOtp] =useState("")
    const [show, setShow] = useState(true);
  let navi =useNavigate()
  let eotp=Math.floor(Math.random()*(9999-1000)+1000)
  console.log(eotp)
    const Generate = (e) => {
        e.preventDefault()
        if(email.includes("@")){
            sessionStorage.setItem("otp",eotp)
            axios.get(`http://localhost:8080/verifyemail?email=${email}&otp=${eotp}`)
        .then((response)=>{
           sessionStorage.setItem("user",JSON.stringify(response.data.data))
        })
        .catch((error)=>{
            alert("Email ID not Found")
            navi("/ft")
        })
        }
        else
        {
        alert("Enter the Correct Email")}
    }
    let verify=(e)=>{
         e.preventDefault()
         let num =sessionStorage.getItem("otp")
         if(num===otp)
         {
           navi("/cp")  
         }
         else
         {
             alert("Enter the Correct Otp")
         }
    }
    const handle = () => {setShow(false)
    navi("/")
    }
  return (
    <div>
       <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <InputGroup className="mb-3">
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="">
        <Form.Control type="email" onChange={(e)=>{
            e.preventDefault() 
            setEmail(e.target.value)}} placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>

      <InputGroup className="mb-3">
            <FloatingLabel
        controlId="floatingInput"
        label="Enter the OTP "
        className="">
        <Form.Control type="number" onChange={(e)=>{e.preventDefault()
            setOtp(e.target.value)}} className="remove-arrow" placeholder="" />
      </FloatingLabel>
      </InputGroup>
      <div className="d-flex justify-end">
      <Button variant="primary" className='mx-10 text-white bg-gray-500 border-gray-500' onClick={Generate}>
            Generate OTP
          </Button>
          <Button variant="primary" className='text-white bg-gray-500 border-gray-500' onClick={verify}>
            Verify
          </Button></div>
            </Form>
            </Modal.Body>
      </Modal>
    </div>
  )
}

export default Forgot