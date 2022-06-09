import React, {useState, createContext} from 'react'
import UseContextLogin from './UseContextLogin'
import UseContextUser from './UseContextUser'


//collection of states
export const AppContext = createContext(null);

const UseContext = () => {
    const [username, setUsername] = useState("");

  return (
    <div className='context'>
        <AppContext.Provider
        value={{username, setUsername}}
        >
            <h1>UseContext Example</h1>
            <UseContextLogin  />
            <UseContextUser  />
        </AppContext.Provider>
    </div>
  )
}

export default UseContext