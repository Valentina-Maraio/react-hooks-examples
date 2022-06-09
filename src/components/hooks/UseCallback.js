import React, {useState, useCallback} from 'react'
//import axios from 'axios'
import UseCallbackChild from './UseCallbackChild'
import {Button} from 'primereact/button'

const UseCallback = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hello Valentina");

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

  return (
    <div className='callback'>
        <h1>UseCallback Example</h1>
        <UseCallbackChild returnComment={returnComment} />
        <Button
        onClick={() => {
            setToggle(!toggle);
        }}
        > {" "} Click
        </Button>
        {toggle && <h3> toggle </h3>}
    </div>
  )
}

export default UseCallback