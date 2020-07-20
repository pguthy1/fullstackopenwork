import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({text,  statemod}) => {
  return (
    <>
    <button onClick={statemod}>{text}</button>
    </>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const anec_num = 6
  
  const [points, setPoints] = useState(Array.apply(null, new Array(anec_num)).map(Number.prototype.valueOf,0))
  const [max, setMax] = useState(0)

  const updateMax = () => {
    var max = points[0]
    var maxIndex = 0
    for(var i = 0; i < anec_num; i++){
      if(points[i] > max) {
        maxIndex = i;
        max = points[i];
      }
    }
    console.log("New max is index", maxIndex)
    setMax(maxIndex)
  }
  const newAnecdote = () => {
    const newSelected = Math.floor(Math.random() * Math.floor(anec_num))
    console.log("New index of anecdotes array is", newSelected)
    setSelected(newSelected)
  }
  const updatePoints = () => {
    const copy = [...points]
    // increment the value in position 2 by one
    copy[selected] += 1  
    console.log("New value of current anecdote's points is ", copy[selected]) 
    setPoints(copy)
    updateMax();
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button text="vote" statemod={updatePoints} />
      <Button text="next anecdote" statemod={newAnecdote} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
      <p>has {points[max]} votes</p>
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)