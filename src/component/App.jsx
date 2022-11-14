import React, { useState } from 'react'
import Footer from './Footer'
import Header from "./Header"
import Note from "./Note"

import CreateNote  from './CreateNote'



const App = () => {
  

  const [notes, setNotes] = useState([])

  /** note add function -- */
  function addNote(note){
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        note
      ]
    })
  }

  /** note delete */
  function noteDelete(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !==id
      })
    })
  }

  return (
    <>
     <Header/>
     <CreateNote onAdd={addNote}/>
     {
      notes.map((note, index) => {
        return (
          <Note id={index} key={index}
          notes={notes} onDelete={noteDelete} title={note.title} content={note.content} />
        )
      })
     }
    
     <Footer/>
    </>
   
  )
}

export default App