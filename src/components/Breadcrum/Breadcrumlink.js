import React from 'react'
import { Container } from 'react-bootstrap'
import "./Breadcrumlist.scss"

function Breadcrumlink() {
  return (
    <div className='breadcrum card-bac-color'>
    <Container className='py-2 '>
    <div>
        <p>Orders &nbsp; &nbsp; &gt; &nbsp; <span className='border-bottom'>Order32457ABC</span></p>
    </div>
    <div className='d-flex justify-content-between pt-2'>
        <h4>Order&nbsp;32457ABC</h4>
        <div>
            <button className='btn rounded-pill px-3 btn-border me-2'>Back</button>
            <button className='btn rounded-pill px-3 border-bac text-white'>Apporve Order</button>
        </div>
    </div>
</Container>
</div>
  )
}

export default Breadcrumlink