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

const Courses = ({courses}) => {
  return(
    <div> 
      {courses.map(course => <Course course={course}/>)}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses}/>
  // return <Course course={course} />
}

export default App