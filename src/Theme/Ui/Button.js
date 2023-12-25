import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Button({ children, size, className }) {
  return (
    <button className={`${size} button ${className}`}>{children} <span className="mx-2 "><FaArrowRightLong /></span></button>
  )
}

export default Button