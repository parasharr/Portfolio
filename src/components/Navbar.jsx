import React from 'react'
import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img 
         className=' mx-2 w-20'
         src={logo} 
         alt="PranjeetGoswami logo" />
      </div>
      <div className='flex m-8 items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/pranjeetgoswami/"><FaLinkedin /></a>
        <a href="https://github.com/parasharr"><FaGithub /></a>
      </div>
    </nav>
  )
}

export default Navbar
