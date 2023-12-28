import React from 'react'
import Container from './Ui/Container'

function PageNotFound() {
  return (
     <Container>
    <div className='construction'>

     <h2>404 - Page Not Found</h2>
      <p>Oops! It seems like this page doesn't exist.</p>
      <p>Please make sure you've entered the correct URL or go back to the <a href="/">home page</a>.</p>
    </div>

     </Container>
  )
}

export default PageNotFound