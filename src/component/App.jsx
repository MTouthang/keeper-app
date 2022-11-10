import React, { useState } from 'react'
import Footer from './Footer'
import Header from "./Header"
import Note from "./Note"

import CreateNote  from './CreateNote'



const App = () => {
  const [notes, setNotes] = useState([])


  return (
    <>
     <Header/>
     <CreateNote notes={notes} setNotes={setNotes}/>
     <Note notes={notes}/>
     <Footer/>
    </>
   
  )
}

export default App