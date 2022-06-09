import React, {useState, useReducer} from 'react'
import { Button } from 'primereact/button'

const UseReduce = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

    //function
    const reducer = (state, action) => {
      switch(action.type){
        case "INCREMENT":
          return {countRed: state.countRed + 1,  showTextRed: state.showTextRed}
        case "toggleShowTextRed":
          return {countRed: state.countRed, showTextRed: !state.showTextRed}
        default:
          return state;
      }
    }
  //esempio con useReducer
  const [state, dispatch] = useReducer(reducer, {
    countRed: 0,
    showTextRed: true
  })
  return (
    <div className='reducer'>
        <h1>Example SENZA useReducer</h1>
        <h4> {count} </h4>
        <Button
        onClick={() => {
          setCount(count+1);
          setShowText(!showText);
        }}>
          Click
        </Button>

        {showText && <p>This is my text</p>}

        <h1>Example CON useReducer</h1>
        <h4> {state.countRed} </h4>
        <Button
        onClick={() => {
          dispatch({ type: "INCREMENT"})
          dispatch({ type: "toggleShowTextRed"})
        }}>
          Click
        </Button>

        <p>{state.showTextRed && <p>This is my text</p>}</p>
    </div>
  )
}

export default UseReduce