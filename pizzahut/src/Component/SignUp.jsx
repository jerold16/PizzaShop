import axios from 'axios';
import React, { useState } from 'react'
import { Modal,Button,Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [show, setShow] = useState(true);
    let [email,setEmail]=useState("")
    let [name,setName]=useState("")
    let [phone,setPhone]=useState("")
    let [password,setPassword]=useState("")
    let navi=useNavigate()
    const handle = () =>{ setShow(false);
      navi("/")}
  const handleClose = (e) =>{
    e.preventDefault()
    let User={name,email,phone,password}
    axios.post((`http://localhost:8080/user`),User)
    .then((response)=>{
        sessionStorage.setItem("user",JSON.stringify(response.data.data))
        alert("registeration is Successfull")
        navi("/")
        setShow(false)
    })
    .catch((error)=>{
       alert("something went wrong")
       console.log(error)
    })
  }
  return (
    <div>
<Modal className="m-auto" show={show} onHide={handle}>
        <Modal.Header closeButton >
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>       
            <Form className='p-3'>
            <InputGroup className="mb-3">
            <FloatingLabel
             controlId="floatingInput"
             label="Name"
            className="mb-3">
        <Form.Control type="text" onChange={(e)=>{setName(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>
            <InputGroup className="mb-3">
            <FloatingLabel
             controlId="floatingInput"
             label="Email address"
            className="mb-3">
        <Form.Control type="email" onChange={(e)=>{setEmail(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
            <FloatingLabel
             controlId="floatingInput"
             label="Password"
            className="mb-3">
        <Form.Control type="text" onChange={(e)=>{setPassword(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
            <FloatingLabel
             controlId="floatingInput"
             label="Phone"
            className="mb-3">
        <Form.Control  type="text" onChange={(e)=>{setPhone(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>
      
      <div className="text-center">
      <Button variant="primary"  onClick={handleClose}>
            Register
          </Button></div>
            </Form>   
        
      </Modal>
    </div>
  )
}

export default SignUp