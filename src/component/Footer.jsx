import React from 'react'

const Footer = () => {
  const date = new Date()

  console.log(date)
  

  return (
    <footer>
       <p> copywrite © {date.getFullYear()}</p>
    </footer>
   
  )
}

export default Footer