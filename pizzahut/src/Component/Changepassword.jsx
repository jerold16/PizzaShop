import axios from 'axios'
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, InputGroup, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Changepassword = () => {
    let user=JSON.parse(sessionStorage.getItem("user"))
    let navi=useNavigate()
    const [show, setShow] = useState(true);
    const handle = () => {setShow(false)
        navi("/")
        }
    let [newpassword,setnewpassword]=useState("")
    let [confirmpassword , setconfirm]=useState("")
    let change=(e)=>{
        e.preventDefault()
        if(newpassword===confirmpassword){
            axios.put(`http://localhost:8080/changepassword/${user.id}?password=${confirmpassword}`)
            .then((response)=>{
                alert("password has been changed")
                sessionStorage.removeItem("user")
                sessionStorage.removeItem("otp")
                navi("/login")
            })
            .catch((error)=>{
                console.log(error)
                alert("something went wrong")
            })
        }
        else
        alert("Enter the password correctly")

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
        label="New Password"
        className="">
        <Form.Control type="text" onChange={(e)=>{e.preventDefault()
            setnewpassword(e.target.value)}} />
      </FloatingLabel>
      </InputGroup>

      <InputGroup className="mb-3">
            <FloatingLabel
        controlId="floatingInput"
        label="Confirm Password"
        className="">
        <Form.Control type="password" onChange={(e)=>{e.preventDefault()
            setconfirm(e.target.value)}} className="remove-arrow" placeholder="" />
      </FloatingLabel>
      </InputGroup>
      <Button variant="primary" className='mx-10 text-white bg-gray-500 border-gray-500' onClick={change}>
            Change
          </Button>
          
            </Form>
            </Modal.Body>
      </Modal>

    </div>
  )
}

export default Changepassword