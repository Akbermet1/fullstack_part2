import React, { useState } from 'react'

const Contacts = ({persons}) => {
  return(
    <div>
      {persons.map(person => <p key={person.name}> {person.name} {person.phoneNumb} </p>)}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phoneNumb: '706881177' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newPhoneNumb, setNewPhoneNumb ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName) === undefined)
    {
      const nameObject = {
        name: newName,
        phoneNumb: newPhoneNumb
      }
  
      console.log("obj that's adde to the persons state", nameObject)
      setPersons(persons.concat(nameObject))
      // setNewName("")
    }
    else
    {
      alert(`${newName} is already added to the phonebook`)
    }

    setNewName("")
    setNewPhoneNumb("")
  }

  const handlePhoneNumbChange = (event) => {
    console.log(event.target.value)
    setNewPhoneNumb(event.target.value)
  }

  // const addPhoneNumb = (event) => {
  //   event.preventDefault()
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newPhoneNumb} onChange={handlePhoneNumbChange}/></div>
        <div> <button type="submit">add</button> </div>
      </form>

      <h2>Numbers</h2>
      <Contacts persons={persons}/>

      <div>debug: {newName} {newPhoneNumb} </div>,
      {console.log(persons)}
    </div>
  )
}

export default App
