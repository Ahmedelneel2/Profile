import React from 'react'

export default function About() {
  return (
   
    <div className='about d-flex justify-content-center align-items-center p-3 vh-100'> 
    <div className='aboutContent text-light'>
    <h1 className='text-light text-center'>About component</h1>
     <div className='d-flex justify-content-center align-items-center'>
                <div className='line'></div>
                <i className="fa-solid fa-star"></i>
                <div className='line'></div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <p className='me-3'> Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, <br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p>
          <p className='ms-3' >Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, <br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p>
        </div>
    </div>
    </div>
  
  )
}
