import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>
			{props.course}
		</h1>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part part={props.part[0].name} exercise={props.part[0].exercises} />
			<Part part={props.part[1].name} exercise={props.part[1].exercises} />
			<Part part={props.part[2].name} exercise={props.part[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	return (
		<>
			{props.exercise}
		</>
	)
}

const Part = (props) => {
	return (
		<p>
			{props.part} <Total exercise={props.exercise} />
		</p>
	)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    	<Header course={course.name} />
    	<Content part={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
