import React, {useContext} from 'react'
import {AppContext} from './UseContext'

const UseContextUser = () => {
  const {username} = useContext(AppContext);

  return (
    <div>
      <h1>UseContextUser Example</h1>
      <h2>USER: {username} </h2>
    </div>
  )
}

export default UseContextUser