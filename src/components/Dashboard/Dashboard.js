import React from 'react'
import Navbar from '../Navbar/Navbar'
import Breadcrumlink from '../Breadcrum/Breadcrumlink'
import Supplies from '../Supplies/Supplies'
import Tabel from '../Tabel/Tabel'

function Dashboard() {
  return (
    <div className='pb-5'>
        <Navbar />
        <Breadcrumlink />
        <div className='bac-color pt-5'>
        <Supplies />
        <Tabel />
        </div>
    </div>
  )
}

export default Dashboard