import React from 'react'


const Note = ({title, content, onDelete, id}) => {

  const handleDelete = (event) => {
    // event.preventDefault()
    onDelete(id)
  }
  return (
  <>
      <div className='note'>
      <h1> {title}</h1>
      <p> {content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  </>
    
  )
}

export default Note