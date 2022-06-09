import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
 
const UseState = () => {
    //variabile con l'hook
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');

    //funzione con set
    const increment = () => {
        setCounter(counter + 1);
    }
    let changeValue = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
  return (
    <div className='state'>
        <h1>UseState example</h1>
        <h4>Simple Counter</h4>
        <p>{ counter }</p>
        <Button onClick={increment}>Increment</Button>
    <div>
        <h4>Input Example</h4>
        <InputText  placeholder='Insert Value' onChange={changeValue} />
        <p>{ inputValue }</p>
    </div>
    </div>
  )
}

export default UseState