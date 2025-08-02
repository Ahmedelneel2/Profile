import React from 'react'
import img from "./../../images/imgi_1_avataaars (1).svg"
export default function Home() {
  return (
    <>
    <div className='home  p-3  d-flex justify-content-center align-items-center'>
    <div className='homecontant row p-5'>
      <div className='pt-5'>
        <img className='w-100 mt-5' src={img} alt="" />
        <h1 className='pt-3 text-light'>start Framework</h1>
           <div className='shape d-flex justify-content-center align-items-center m-3'>
                <div className='line'></div>
                <i className="fa-solid fa-star"></i>
                <div className='line'></div>
        </div>
        <p className='text-center p-1  text-light'>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </div>
    </div>
    </>
  )
}
