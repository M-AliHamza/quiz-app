import React from 'react'

function FinishScreen({points,maxPossiblePoints,highScore,dispatch}) {
    const precentage=Math.round((points/maxPossiblePoints)*100)
    let emoji;
    if(precentage>=80){
        emoji="🥇"
    }
    else if(precentage>=60 && precentage<80){
        emoji="🥈"
    }
    else if(precentage>=40 && precentage<60){
        emoji="🥉"
    }
    else{
        emoji="😢"
    }
  return (
    <>
    <p className='result'>
    <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} points.({precentage}%)
    </p>
    <p className='highscore'>
    <strong>🏆 High Score {highScore} points</strong>
    </p>
    <button className='btn btn-ui' onClick={() => dispatch({type:"restart"})}>Restart</button>
    </>
  )
}

export default FinishScreen