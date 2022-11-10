import React from 'react'


const Note = ({notes}) => {
  return (
  <>
  {notes.map((note, id) => {
    return (
      <div className='note' key={id}>
       {console.log(note.title)}
      <h1> {note.title}</h1>
      <p> {note.content}</p>
      <button>Delete</button>
    </div>
    )
  })}
    
  </>
    
  )
}

export default Note