import React from 'react'

function Container({children , className}) {
  return (
    <div className={`${className} container_ui mx-auto`}>
        {children}
    </div>
  )
}

export default Container