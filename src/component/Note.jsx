import React, { useContext } from 'react'
import { notesContext } from '../context/notesContext'


const Note = ({id, note}) => {

  const {noteDelete} = useContext(notesContext)
  const handleDelete = () => {
   
    noteDelete(id)
  }
  return (
  <>
      <div className='note'>
      <h1> {note.title}</h1>
      <p> {note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  </>
    
  )
}

export default Note