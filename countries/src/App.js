import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
  console.log("in Country")
  return(
    <div> 
        <h1> {country.name.common} </h1>
        <p>capital: {country.capital} </p>
        <p>population: {country.population} </p>

        <h2> languages </h2>
        <or>
          {Object.entries(country.languages).map(([key, value]) => <li> {value} </li>)}
        </or>
        <br />
        <img src={country.flags.png} alt={`the flag of ${country.name.common}`}/>
    </div>
  )
}

const Countries = ({country_list, handleShow}) => {
  let totalOfMatches = country_list.length
  console.log("totalOfMatches:", totalOfMatches)

  if(totalOfMatches === 1)
  {
    const country = country_list[0]
    return(
      <Country country={country}/>
    )
  }

  if(totalOfMatches > 1 && totalOfMatches <= 10)
  {
    return(
      <div>
        {country_list.map(country => {
          return(
            <div>
              <span> {country.name.common} </span>
              <button onClick={() => (handleShow(country.name.common))}> show </button>
            </div>
          )
        })}
      </div>
    )
  }
  
  return(
    <div> too many matches, specify another filter </div>
  )
}

const App = () => {
  const [country, setCountry] = useState("")
  const [matchedCountries, setMatchedCountries] = useState([])
  console.log("state matchesCountries:", matchedCountries)

  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  const findCountries = (event) => {
    event.preventDefault()
  }

  const handleButtonShow = (country_name) => {
    console.log("in the handleButtonShow")
    setCountry(country_name)
  }

  useEffect(() => {
    console.log("in the effect hook")

    const eventHandler = (response) => {
    
      console.log("in the event handler");
      console.log("countries found:", response.data)
      
        const matches = [...response.data]
        setMatchedCountries(matches)
    }

    console.log(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`)
    const promise = axios.get(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`).then(eventHandler)
  }, [country])

  return (
    <div>
      <form>
        <div> find countries <input value={country} onChange={handleCountryChange}/> </div>
      </form>

      <Countries country_list={matchedCountries} handleShow={handleButtonShow}/>
    </div>
  )
}

export default App