import React from 'react'

function Progress({index,numQuestions,points,maxPossiblePoints,answer}) {
  return (
   <header className='progress'>
    <progress value={index + Number(answer !== null)} max={numQuestions}/>
    <p><strong>{index+1 }</strong>/{numQuestions}</p>
    <p><strong>{points }</strong>/{maxPossiblePoints}</p>
    </header>
  )
}

export default Progress