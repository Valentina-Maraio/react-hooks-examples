import React, {useRef} from 'react'
import {Button} from 'primereact/button'
import { InputText } from 'primereact/inputtext'

const UseRef = () => {

    //access and modify DOM element
    const inputValue = useRef(null);

    const onClick = () => {
        //go straight to the input field on button click
        inputValue.current.focus();
        //clears the input
        inputValue.current.value = "";
    }
  return (
    <div className='ref'>
        <h2>UseRef Input Example</h2>
        <InputText ref={inputValue} />
        <p></p>
        <Button onClick={onClick}>Change Name</Button>
    </div>
  )
}

export default UseRef