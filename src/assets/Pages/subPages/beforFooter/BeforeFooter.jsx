import React from 'react'

export default function BeforeFooter
() {
  return (
    <div className='row BefFooter  '>
        <div className='inner container p-5 d-flex justify-content-center '>
            <div className='col-sm-4 p-5 text-light text-center '>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
            </div>
            <div className='col-sm-4 p-5 text-light text-center '>
            <h3>AROUND THE WEB</h3>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='border border-1 border-light rounded-circle p-1 me-2'><i className=" fa-brands fa-facebook-f"></i></div>
                <div className='border border-1 border-light rounded-circle p-1 me-2'><i className=" fa-brands fa-twitter"></i></div>
                <div className='border border-1 border-light rounded-circle p-1 me-2'><i className=" fa-brands fa-linkedin"></i></div>
                <div className='border border-1 border-light rounded-circle p-1 me-2'><i className=" fa-solid fa-earth-americas"></i></div>
            </div>
            </div>
            <div className='col-sm-4 p-5 text-light text-center '>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme <br></br> <br />created by Route</p>
            </div>
        </div>
    </div>
  )
}
