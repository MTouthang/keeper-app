import React from 'react'


const Note = ({title, content}) => {
  return (
  <>
    <div className='note'>
      <h1> {title}</h1>
      <p> {content}</p>
      <button>Delete</button>
    </div>
  </>
    
  )
}

export default Note