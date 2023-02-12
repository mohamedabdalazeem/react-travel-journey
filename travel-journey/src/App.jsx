import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import JournalEntry from './components/JournalEntry'
import data from '../data'

function App() {
  const [count, setCount] = useState(0)

  const journalData = data.map(data => {
    return(
      <JournalEntry 
        key = {data.id}
        data = {data}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {journalData}
    </div>
  )
}

export default App
