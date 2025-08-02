import React from 'react'

export default function Contact() {
  return (
    <div className='contact  p-3'>
      <h1 className='text-center'>portfolio component</h1>
        <div className='shape d-flex justify-content-center align-items-center m-3'>
                <div className='line'></div>
                <i className="fa-solid fa-star"></i>
                <div className='line'></div>
        </div>
       <div className='m-auto w-50  justify-content-center align-items-center '>
        <input className='w-100 p-2 m-3' placeholder='userName' type="text" />
        <input className='w-100 p-2 m-3' placeholder='userAge' type="text" />
        <input className='w-100 p-2 m-3' placeholder='userEmail' type="text" />
        <input className='w-100 p-2 m-3' placeholder='userPassowrd' type="text" />
        <button className='m-3 btn btn-' type="sumbit">send Massage</button>
        </div> 
    </div>
  )
}
