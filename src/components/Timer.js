import React, { useEffect } from 'react'

function Timer({dispatch,secondsRemaining}) {
  const min=Math.floor(secondsRemaining/60)
  const sec=secondsRemaining%60
  useEffect(() => {
    const id=setInterval(()=>dispatch({type:"tick"}),1000)

    return ()=>clearInterval(id)
  },[dispatch])
  return (
    <div className='timer'>{min<10 ? `0${min}` : min}:{sec<10 ? `0${sec}` : sec}</div>
  )
}

export default Timer