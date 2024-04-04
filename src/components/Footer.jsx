import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer__container flexBox'>
        <p>&#169; 2024 Chethan B. All Rights Reserved | </p>
        <a href="https://www.linkedin.com/in/chethan-b-31b58a192/" className='flexBox'><FaLinkedin /> Linkedin</a>
    </div>
  )
}

export default Footer