import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Items } from './PizzaCard';
import "../index.css"
import { Offcanvas } from 'react-bootstrap';
import CartList from '../ProfileComponent/CartList';
const HomeNav = () => {
  let num =Items.length
  
  const [show, setShow] = useState(false);
  const[cartshow,setcart]=useState(false)
 let user=JSON.parse(localStorage.getItem("user"))
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showcart=()=>setcart(true)
  const closecart=()=>setcart(false)
  let navi=useNavigate()
  let Logout=()=>{
       navi("/")
       localStorage.removeItem("user")
  }
  let profo=()=>{
    navi("/profile")
  }
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary my-0">
    <Container fluid>
      <Navbar.Brand href="#home" className=" mx-5"> 
        <img src={require('../image/sym.png')} 
        className=" w-20 bg-contain bg-transparent" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <Nav.Link href="#home" className="text-black">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#mustry">Must try </Nav.Link>
          <Nav.Link href="#us">Contact us </Nav.Link>
          <Nav.Link href="" onClick={handleShow} className=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>  </Nav.Link>

          <Nav.Link className="text-black position-relative" onClick={showcart}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg> <span class="position-absolute top-1 start-99 translate-middle badge rounded-pill bg-danger">
    {num}
  </span> </Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
           <h3 className=' text-red-950'>{user.name}</h3> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          <button onClick={profo} className="border-none bg-transparent text-decoration-none text-xl text-black">Profile</button>
          </div><div><button className="border-none bg-transparent text-decoration-none text-xl text-black">Orders</button>
          </div><div><button className="border-none bg-transparent text-decoration-none text-xl text-black">Contact us</button>
</div>
<div><button onClick={Logout} className="border-none bg-transparent text-decoration-none text-xl text-black">Log out</button>
</div>
        </Offcanvas.Body>
      </Offcanvas>
     
      <Offcanvas show={cartshow} placement={'end'} onHide={closecart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
           <h2 className=' text-red-950'> Cart </h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <CartList/>
        </Offcanvas.Body>
      </Offcanvas>
  </div>
  )
}

export default HomeNav