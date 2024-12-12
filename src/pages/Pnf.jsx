import React from 'react'
import { Link } from 'react-router-dom'
import pnfImg from '../assets/404-error-removebg.png'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      {/* <h1 style={{fontSize:'80px'}}>404</h1> */}
      <img className='img-fluid' src={pnfImg} alt="" />
      <h1>Look Like You're Lost</h1>
      <p>The page you're looking for is not available!</p>
      <Link to={'/'} className='btn btn-warning'>Go To Home</Link>
    </div>
  )
}

export default Pnf