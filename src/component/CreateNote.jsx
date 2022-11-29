import React, {useContext, useState} from 'react'
import { notesContext } from '../context/notesContext'


const CreateNote = () => {

  /** constant to track of title and content*/

  const {addNote} = useContext(notesContext)
  const [note, setNote] = useState({
    title: "",  
    content: ""
  })

  // handling the change value of title and content
  const handleChange = (event) => {
    const {name, value} = event.target
    // setNote({
    //     ...note,
    //     [name]: value
    // } )

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
   
  }
  
 /** Pass the new note back to the app */
  const submitNote = (event) => {
    event.preventDefault()
    addNote(note)
    setNote({
      title:"",
      content: ""
    })
  }
  return (
    <div>
         <form>
            <input 
            type="text" 
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder='Title' />
                
            <textarea 
            type="text"
            name="content" 
            value={note.content}
            onChange={handleChange}
            placeholder='Take a note...' 
            rows="3"/>
            <button onClick={submitNote}>Add</button>
            </form>
    </div>
  )
}

export default CreateNote