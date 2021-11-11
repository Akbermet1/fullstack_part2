import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({country_list}) => {
  let totalOfMatches = country_list.length
  console.log("totalOfMatches:", totalOfMatches)

  if(totalOfMatches === 1)
  {
    const country = country_list[0]
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

  if(totalOfMatches > 1 && totalOfMatches <= 10)
  {
    return(
      <div>
        {country_list.map(country => <p> {country.name.common} </p>)}
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

      <Countries country_list={matchedCountries}/>
    </div>
  )
}

export default App