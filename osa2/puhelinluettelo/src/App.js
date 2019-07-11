import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import personService from './services/persons'

const AddNumber = ( { newNumber, handleNumberChange} ) => {
  return (
    <div>
      number: <input 
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>
  )
}

const AddName = ( { newPerson, handlePersonChange } ) => {
  return (
    <div>
      name: <input
        value={newPerson}
        onChange={handlePersonChange}
      />
    </div>
  )
}

const PersonForm = ({ addPerson, newPerson, handlePersonChange, newNumber, handleNumberChange}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <AddName newPerson={newPerson} handlePersonChange={handlePersonChange} />
        <AddNumber newNumber={newNumber} handleNumberChange={handleNumberChange} />
          <div>
            <button type="submit">add</button>
          </div>
          </form>
        </div>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const deleteThisPerson = id => {
    const url = `http://localhost:3001/persons/${id}`
    const person = persons.find(n => n.id === id)
    const testi = persons.filter(function(i) {
          return i !== person
      })
    console.log(testi)

    const result = window.confirm(`Delete ${person.name}?`)
    if (result) {
    	axios.delete(url, testi).then(response => {
    		setPersons(testi)
    	})
    }
  }

  const rows = () => persons.map(person =>
    <Person
      key={person.id}
      person={person}
      deletePerson={() => deleteThisPerson(person.id)}
    />
  )

  const addPerson = (event) => {
    event.preventDefault()
    const duplicates = persons.filter(function(person) {
      return person.name === newPerson
    })
    console.log(duplicates)

    if (duplicates.length === 0) {
      const personObject = {
        name: newPerson,
        number: newNumber,
        id: persons.length + 1
      }

      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewPerson('')
        })

      setPersons(persons.concat(personObject))
      setNewPerson('')
      setNewNumber('')
    }
    else {
      alert(`${newPerson} is already added to the phonebook`)
    }
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <PersonForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      
      <h1>Numbers</h1>

      <div>
        {rows()}
      </div>
      
    </div>
  )
}

export default App