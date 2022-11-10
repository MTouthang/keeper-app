import React, {useState} from 'react'


const CreateNote = ({notes, setNotes}) => {

  

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const [note, setNote] = useState({
  //   title: "",  
  //   content: ""
  // })

  // const handleChange = (event) => {
  //   // const {name, value} = event.target
  //   // setNote({
  //   //     ...note,
  //   //     [name]: value
    

  //   // } )

    // setTitle(event.target.title)
    
   
  // }
  
  const handleAddButton = (event) => {
    event.preventDefault()
    setNotes([...notes, {title, content}])
  //  notes.push(note)
    console.log(notes)
  
   setTitle("")
   setContent("")
  
  }
  
  
  
  return (
    <div>
         <form>
            <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
            placeholder='Title' />
                
            <textarea 
            name="content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Take a note...' 
            rows="3"/>
            <button onClick={handleAddButton}>Add</button>
            </form>
    </div>
  )
}

export default CreateNote