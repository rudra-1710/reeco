import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.scss"
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='header py-2'>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link><p>Recco</p></Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='px-3 mobile-nav'>
                    <Link><p>Store</p></Link>
                </div>
                <div className='px-3 mobile-nav'>
                <Link><p>Orders</p></Link>
                </div>
                <div className='px-3 mobile-nav'>
                <Link><p>Analytics</p></Link>
                </div>
                <div className='d-flex'> 
                <div>
                <button type="button" class="btn position-relative ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" className=' theme-color cart text-white' height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
  <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success">
    4+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
                </div>
                
            </div>
        </Offcanvas.Body>
      </Offcanvas>
        <Container className='d-flex justify-content-between align-items-center '>
            <div className='d-flex align-items-center' >
                <div className='px-3 text-white'><h1>Reeco</h1></div>
                <div className='px-3 text-white d-md-block d-none'>
                <Link className='text-white re-line'>Store</Link>
                </div>
                <div className='px-3 text-white d-md-block d-none'>
                    <Link className='text-white re-line'>Orders</Link>
                </div>
                <div className='px-3 text-white d-md-block d-none'>
                    <Link className='text-white re-line'>Analytics</Link>
                </div>
            </div>
            <div className='d-md-flex d-none'> 
                <div>
                <button type="button" class="btn position-relative text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" className='cart text-white' height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
  <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success">
    4+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
                </div>
                <div className='d-flex align-items-center text-white ps-3'>
                    <p>hello, james</p>
                </div>
            </div>
            <div className='d-block d-md-none'>
            <div variant="primary" onClick={handleShow}>
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class=" text-white bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar