import axios from 'axios';
import React, { useState } from 'react'
import { Modal,Button,Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import "../index.css"
const Login = () => {
  let navi=useNavigate()
    const [show, setShow] = useState(true);
    const handleClose = () =>{ setShow(false);
    navi("/")}
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
  const signin = (e) =>{
    let check=email.includes("@")
    if(check===true){
      axios.post(`http://localhost:8080/verifyemail?email=${email}&password=${password}`)
      .then((response)=>{
          sessionStorage.setItem("user",JSON.stringify(response.data.data))
          navi("/welcome")
          setShow(false)
      })
      .catch((error)=>{
         alert("something went wrong")
         console.log(error)
      })
    }
    else{
    axios.post(`http://localhost:8080/verifyphone?phone=${email}&password=${password}`)
    .then((response)=>{
        sessionStorage.setItem("user",JSON.stringify(response.data.data))
        navi("/welcome")
        setShow(false)
    })
    .catch((error)=>{
       alert("something went wrong")
       console.log(error)
    })}
  }
  let register=()=>{
    navi("/signup")
    setShow(false)
  }
  return (
    <section 
     className=''>
       <Modal className="m-auto" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>       
            <Form className='p-3'>
            <InputGroup className="mb-3">
            <FloatingLabel
             controlId="floatingInput"
             label="Email address / Phone number"
            className="mb-3">
        <Form.Control type="email" onChange={(e)=>{setEmail(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3 ">
            <FloatingLabel
             controlId="floatingInput"
             label="Password"
            className="mb-3">
        <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>
      <div className="text-end">
      <a href="/ft">Forget password?</a>
      </div>
      <div className="text-center">
      <Button variant="secondary" onClick={signin}>
           Sign In
          </Button></div>
            </Form>   
        <Modal.Footer>
          <Button variant="primary" onClick={register}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
export default Login