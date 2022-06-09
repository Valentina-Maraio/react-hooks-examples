import React, {useContext} from 'react'
import {InputText} from 'primereact/inputtext'
import {AppContext} from './UseContext'

const UseContextLogin = () => {
  const {setUsername} = useContext(AppContext);

  return (
    <div>
      <h1>UseContextLogin Example</h1>
      <InputText 
      onChange={(event) => {
        setUsername(event.target.value)
      }} />
    </div>
  )
}

export default UseContextLogin