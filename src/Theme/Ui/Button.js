import React from 'react'

function Button({ children, size }) {
  return (
    <button className={`${size} button`}>{children}</button>
  )
}

export default Button