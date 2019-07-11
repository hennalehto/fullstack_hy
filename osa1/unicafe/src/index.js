import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
	const all = props.bad + props.good + props.neutral
  	const positive = (props.good / all) * 100
  	const average = (props.good*1 + props.bad*(-1)) / all
	if (props.good === 0 && props.bad === 0 && props.neutral === 0)
		return (
			<p>No feedback given</p>
		)
	return (
      	<div>
        	<Statistic text="good" value={props.good} />
        	<Statistic text="neutral" value={props.neutral} />
        	<Statistic text="bad" value={props.bad} />
        	<Statistic text="all" value={all} />
        	<Statistic text="average" value={average} />
        	<Statistic text="positive" value={positive} />
      	</div>
	)
}

const Statistic = ({text, value}) => {
	return (
		<div>
			{text} {value}<br /> 
		</div>
	)
}

const Button = ({setWhich, which, txt}) => (
	<button onClick={() => setWhich(which +1)}>
		{txt}
	</button>
)

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button setWhich={setGood} which={good} txt='good'/>
        <Button setWhich={setNeutral} which={neutral} txt='neutral'/>
        <Button setWhich={setBad} which={bad} txt='bad'/>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)