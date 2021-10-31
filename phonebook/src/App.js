import React, { useState } from 'react'

const Contacts = ({persons}) => {
  return(
    <div>
      {persons.map(person => <p key={person.name}> {person.name} </p>)}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }

    console.log("obj that's adde to the persons state", nameObject)
    setPersons(persons.concat(nameObject))
    setNewName("")
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons}/>

      <div>debug: {newName} </div>,
      {console.log(persons)}
    </div>
  )
}

export default App
