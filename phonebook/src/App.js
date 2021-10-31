import React, { useState } from 'react'

const Filter = ({persons, filterPattern}) => {
  const filtering = (contact) => {
    const contactName = contact.name.toLowerCase()
  
    if(contactName.indexOf(filterPattern.toLowerCase()) !== -1 && filterPattern !== "")
    {
      return true
    }
  }

  const filteredContactList = persons.filter(filtering)
  console.log("filtered: ", filteredContactList)

  return(
    <Contacts persons={filteredContactList}/>
  )
}

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
  const [filterPattern, setFilterPattern ] = useState('')

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

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterPattern(event.target.value)
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input type="text" value={filterPattern} onChange={handleFilterChange} /></div>
      <Filter persons={persons} filterPattern={filterPattern} />

      <h2> add a new </h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newPhoneNumb} onChange={handlePhoneNumbChange}/></div>
        <div> <button type="submit">add</button> </div>
      </form>

      <h2>Numbers</h2>
      <Contacts persons={persons}/>
    </div>
  )
}

export default App
