import React from 'react'

function Progress({index,numQuestions,points,maxPossiblePoints}) {
  return (
   <header className='progress'>
    <progress value={index} max={numQuestions}/>
    <p><strong>{index+1 }</strong>/{numQuestions}</p>
    <p><strong>{points }</strong>/{maxPossiblePoints}</p>
    </header>
  )
}

export default Progress