import React, { useState } from 'react'

const PersonForm = ({handleSubmit, input1_info, input2_info, button_info}) => {

  return(
    <form onSubmit={handleSubmit}>
      <div> {input1_info.text} <input value={input1_info.state} onChange={input1_info.eventHandler} /></div>
      <div> {input2_info.text} <input value={input2_info.state} onChange={input2_info.eventHandler}/></div>
      <div> <button type={button_info.type}> {button_info.text} </button> </div>
    </form>
  )
}

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

  const input1_details = {
    text: "name:",
    state: newName,
    eventHandler: handleNameChange
  }

  const input2_details = {
    text: "number: ",
    state: newPhoneNumb,
    eventHandler: handlePhoneNumbChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input type="text" value={filterPattern} onChange={handleFilterChange} /></div>
      <Filter persons={persons} filterPattern={filterPattern} />

      <h2> Add a new </h2>
      <PersonForm handleSubmit={addContact} input1_info={input1_details} input2_info={input2_details} button_info={{type: "submit", text: "add"}}/>

      <h2>Numbers</h2>
      <Contacts persons={persons}/>
    </div>
  )
}

export default App
