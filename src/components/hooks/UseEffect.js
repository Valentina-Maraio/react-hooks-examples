import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Button} from 'primereact/button'

const UseEffect = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    //api call on refresh page
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/2")
        .then((response) => {
            setData(response.data.name)
        })
    }, []);
    
  return (
    <div className='effect'>
        <h1>UseEffect Example</h1>
        <h5>Using an API and Axios</h5>
        <h3>
            {data}
        </h3>

        <h2>Another Example with UseEffect</h2>
        <h3>{data}</h3>
        <p>{count}</p>
        <Button
        onClick={() => {
            setCount(count+1);
        }}
        >Click</Button>
    </div>
  )
}

export default UseEffect