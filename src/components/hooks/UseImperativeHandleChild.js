import React, { useState, forwardRef, useImperativeHandle } from 'react'
import {Button} from 'primereact/button'

const UseImperativeHandeChild = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        newToggle() {
            setToggle(!toggle)
        }
    }))
  return (
    <div>
        <Button>From Child</Button>
        <p></p>
        <p>
            {toggle && <span>Toggle</span>}
        </p>
    </div>
  )
});

export default UseImperativeHandeChild