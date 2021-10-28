import React from 'react'

const Part = ({name, numberOfExercises}) => {
  return (
    <div>
      <p> {name} {numberOfExercises} </p>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div> 
      {parts.map(part => <Part name={part.name} numberOfExercises={part.exercises}/>)}
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App