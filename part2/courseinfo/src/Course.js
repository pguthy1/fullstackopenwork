import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}
  
const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => {
      //console.log("sum", sum, part)
      return sum + part.exercises
    }, 0)
    return(
    <p>total of {total} exercises</p>
    ) 
}
  
const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
}
  
const Content = ({ course }) => {
    const parts = course.parts
    return (
      <div>
        {parts.map(part => 
        <Part key={part.id} part={part}/>
        )}
        <Total course={course} />
      </div>
    )
}
const Course = ({courses}) => {
    const new_course_components = courses.map((course) => {
      //console.log(course)
      return (
        <div key={course.id}>
        <Header course={course}/>
        <Content course={course}/>
        </div>
      )
    })
    return (<div>
      {new_course_components}
    </div>) 
}
export default Course