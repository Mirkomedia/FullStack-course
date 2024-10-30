import { useState } from 'react'

const Button = (props) =>{
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}
const StatisticsLine = (props) =>{

  return(
    <td>
      <p>{props.text} {props.value}</p>
    </td>
  )
}

const Statistics = (props) =>{
  if(props.all === 0){
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }else{
    
return(

<div>
  <h1>statistics</h1>
  <table>
    <tbody>
  <tr><StatisticsLine text="good" value={props.good}/></tr>
  <tr><StatisticsLine text="neutral" value={props.neutral}/></tr>
  <tr><StatisticsLine text="bad" value={props.bad}/></tr>
  <tr><StatisticsLine text="all" value={props.all}/></tr> 
  <tr><StatisticsLine text="average" value={props.average}/></tr> 
  <tr><StatisticsLine text="positive" value={props.positive + '%'}/></tr> 
  </tbody>
  </table>
</div>)
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const totalScores = (good * 1) + (neutral * 0) + (bad*-1) 

  const average = all > 0 ? totalScores / all : 0

  const positive = (all) > 0  ? (good / (all)*100) : 100
  return (
    <div>
     <h1>give feedback</h1>
     <div style={{ display: 'inline-flex' }}>
       <Button text='good' handleClick={() => setGood(good +1)} />
       <Button text='neutral' handleClick={() => setNeutral(neutral +1)} />
       <Button text='bad' handleClick={() => setBad(bad +1)} />
    </div>
     <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
 
    </div>
  )
}

export default App