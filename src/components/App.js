
import { useEffect, useReducer } from 'react';
import Headers from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error'; 
import StartScreen from './StartScreen';
import Questions from './Questions';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';

const SEC_PER_QUESTION = 30

const initialState = {
  questions:[],
  status:'loading',
  index:0,
  answer:null,
  points:0,
  highScore:0,
  secondsRemaining:0
}
function reducer(state,action){
  switch(action.type){ 
    case "dataRecieved":
      return {...state,questions:action.payload,status:'ready'}
    case "dataFailed":
    return {...state,status:'failed'}
    case "start":
    return {...state,status:'active' ,secondsRemaining:state.questions.length*SEC_PER_QUESTION}
    case "newAnswer":
    const question=state.questions.at(state.index)
    return {
      ...state,
      answer:action.payload,
      points:action.payload===question.correctOption ? state.points+question.points : state.points
      }
    case "nextQuestion":
    return {...state,index: state.index + 1 ,answer:null}
    case "finish":
    return {...state,status:'finish',highScore:state.points>state.highScore ? state.points : state.highScore}
    case "restart":
    return {...initialState,status:'ready',questions:state.questions}
    case "tick":
    return {...state,secondsRemaining:state.secondsRemaining-1,status:state.secondsRemaining===1 ? "finish" : state.status}
    default:
     throw new Error("Action Unknown")

  }
}

function App() {
  const [{questions,status,answer,index,points,highScore,secondsRemaining},dispatch]=useReducer(reducer,initialState)
  const numQuestions = questions.length
  const maxPossiblePoints = questions.reduce((pre,curr) => pre + curr.points,0)
  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then(res => res.json())
      .then(data => dispatch({type:"dataRecieved",payload:data}))
      .catch(err => dispatch({type:"dataFailed"}))
  },[])
  return (
    <div className='app'>
   <Headers/>
   
   <Main>
    {status==="loading" && <Loader/>}
    {status==="failed" && <Error/>}
    {status==="ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
    {status==="active" &&
    <>
    <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
     <Questions question={questions[index]} dispatch={dispatch} answer={answer}/>
     <Footer>
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
     <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
     </Footer>
     
    </>
    }
    {status==="finish" && 
    <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highScore={highScore} dispatch={dispatch}/>}
   </Main>
   </div>
  );
}

export default App;
