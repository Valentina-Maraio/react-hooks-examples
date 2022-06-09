import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import {Button} from 'primereact/button'

const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data);
        });
    }, []);
    
    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for(let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log("THIS WAS COMPUTED")

        return longestName;
    };

    //memo
    const getLongestName = useMemo(() => findLongestName(data), [data])
  return (
    <div className='memo'>
        <h1>UseMemo Example</h1>
        <h4>This is the longest comments:</h4>
        <p> {getLongestName} </p>

        <Button
        onClick={() => {
            setToggle(!toggle);
        }}
        >Toggle
        {" "}
        </Button>
        {toggle && <h2> toggle </h2>}
    </div>
  )
}

export default UseMemo