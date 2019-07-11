import React from 'react'

const Header = (props) => {
	return (
		<h2>
			{props.course}
		</h2>
	)
}

const Content = (props) => {
	const { part } = props
	console.log(part)

	return (
		<div>
			{part.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)}
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

const Totals = (props) => {
	const { courses } = props
	const amounts = courses.map((i) => i.exercises)
	console.log(amounts)
	const amount = amounts.reduce((sum, previous) => {
		return sum + previous
	}, 0)

	return (
		<b>
			total of {amount} exercises
		</b>
	)
}

const Course = (props) => {
	return (
		<div>
			<Header course={props.course.name} />
			<Content part={props.course.parts} />
			<Totals courses={props.course.parts} />
		</div>
	)
}

export default Course