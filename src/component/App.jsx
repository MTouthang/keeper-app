import React from 'react'
import Footer from './Footer'
import Header from "./Header"
import Note from "./Note"

import { CreateNote } from './CreateNote'

const App = () => {
  return (
    <>
     <Header/>
     <CreateNote/>
     <Note title={"Note Title"} content={"Notes content"}/>
     <Footer/>
    </>
   
  )
}

export default App