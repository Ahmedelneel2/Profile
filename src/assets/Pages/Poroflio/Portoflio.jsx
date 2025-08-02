import React, { useState } from 'react'
import img1 from "./../../../assets/images/imgi_1_poert1.png"
import img2 from "./../../../assets/images/imgi_2_port2.png"
import img3 from "./../../../assets/images/imgi_3_port3.png"


export default function Portoflio() {
  const images = [img1,img2,img3,img1,img2,img3]
  const [clickedImg ,setClickedImg ]= useState(null)
  return (
    <>
    
     <div className='portflio mt-5   row  p-5 g-3 d-flex justify-content-center align-items-center '>
      
      <h1 className='text-center pt-5'>portfolio component</h1>
        <div className='shape d-flex justify-content-center align-items-center m-3'>
                <div className='line'></div>
                <i className="fa-solid fa-star"></i>
                <div className='line'></div>
        </div>
   {images.map((img , index)=><div onClick={()=>{setClickedImg(img)}} key={index} className='position-relative col-md-6 col-lg-4 d-flex justify-content-center'>
        <img  className='w-75 position-relative' src={img} alt="" />
      <div className='plus  position-absolute top-0 bottom-0   d-flex justify-content-center align-items-center '>
          <i className="w-75 fa-solid fa-plus"></i>
      </div>
      </div>
   )}
    {clickedImg ? <div  className='layerImg d-flex justify-content-center align-items-center'>
      <img className='w-50 m-auto position-absolute top-0 bottom-0 start-0 end-0 ' src={clickedImg} alt="" />
    </div> : ""}
      
     

    </div>
    </>
   
  )
}
