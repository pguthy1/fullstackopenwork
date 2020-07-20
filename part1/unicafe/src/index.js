import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({text,  statemod}) => {
  return (
    <>
    <button onClick={statemod}>{text}</button>
    </>
  )
}
/*
const Total = ({good, neutral, bad}) => {
  const total = good + neutral  + bad
  return (
  <p>all {total}</p>
  )
}

const Avg = ({good, neutral, bad}) => {
  const avg = (good - bad) / (good + bad + neutral)
  return (
  <p>average {avg}</p>
  )
}

const Positives = ({good, neutral, bad}) => {
  const positive_rate = 100.0 * (good / (good + bad + neutral))
  return (
  <p>positive {positive_rate}</p>
  )
}
*/
const Statistic = ({text, value}) => {
  return (
    <>
    <tr>
      <td>{text} </td>
      <td> {value}</td>
    </tr>
    </>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if ((good + neutral + bad) === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const avg = (good - bad) / (good + bad + neutral)
  const positive_rate = 100.0 * (good / (good + bad + neutral))
  return (
    <>
    <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic text='good' value={good}/>
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='all' value={good + bad + neutral}/>
            <Statistic text='average' value={avg}/>
            <Statistic text='positive' value={positive_rate}/>
          </tbody>
        </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <>
        <h1>give feedback</h1>
        <Button text='good' statemod={handleGood}/>
        <Button text='neutral' statemod={handleNeutral}/>
        <Button text='bad' statemod={handleBad}/>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)