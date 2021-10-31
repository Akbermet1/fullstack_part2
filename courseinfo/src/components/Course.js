import React from 'react'

const Part = ({name, numberOfExercises}) => {
    return (
      <div>
        <p> {name} {numberOfExercises} </p>
      </div>
    )
}
  
const Content = ({parts}) => {
    const totalOfExercises = parts.reduce((prevPart, currentPart) => {
      return prevPart + currentPart.exercises
    }, 0)
  
    return (
      <div> 
        {parts.map(part => <Part name={part.name} numberOfExercises={part.exercises}/>)}
        <p> total of {totalOfExercises} exercises </p>
      </div>
    )
}
  
const Header = ({courseTitle}) => {
    return (
      <h1> {courseTitle} </h1>
    )
}
  
const Course = ({course}) => {
    return (
      <div>
        <Header courseTitle={course.name}/>
        <Content parts={course.parts}/>
      </div>
    )
}

export default Course