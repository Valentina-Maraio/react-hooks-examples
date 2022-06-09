import React, {useRef} from 'react'
import {Button} from 'primereact/button'
import UseImperativeHandeChild from './UseImperativeHandleChild';

const UseImperativeHandle = () => {
    const ref = useRef(null);

  return (
    <div className='imperative'>
        <h1>UseImperativeHandle Example</h1>
        <p></p>
        <Button 
        onClick={() => {
            ref.current.newToggle()
        }}
        >From Parent</Button>
        <p>Button from Child</p>
        <UseImperativeHandeChild ref={ref}/>
    </div>
  )
}

export default UseImperativeHandle