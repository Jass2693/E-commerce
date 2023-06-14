import React from 'react'

export const Footer = () => {
  return (
    <div className='d-flex justify-content-center row mt-4'>
      <div  className='mb-1'>
        <i className="fa-brands fa-instagram fa-2xl m-2 instagram_icon" style={{cursor:  "pointer"}}></i>
        <i className="fa-brands fa-facebook fa-2xl m-2 facebook_icon" style={{cursor:  "pointer"}}></i>
        <i className="fa-brands fa-twitter fa-2xl m-2 twitter_icon" style={{cursor:  "pointer"}}></i>
       

      </div>
      
      <div>

        <span
          style={{fontWeight: "bolder"}}
        >&copy;Copyright</span>
      </div>
       
    </div>
  )
}
