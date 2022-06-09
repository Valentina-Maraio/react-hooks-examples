import React, {useEffect, useLayoutEffect, useRef} from 'react'

const UseLayoutEffect = () => {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log(divRef.current.value)
  }, []);

    useEffect(() => {
      divRef.current.value = "Hello "
    }, []);

  return (
    <div className='layout'>
        <h1>UseLayoutEffect Example</h1>
        <input ref={divRef} value="Valentina" />
    </div>
  )
}

export default UseLayoutEffect

    //result in console after reload:
      //UseLayoutEffect è stato chiamato
      //UseEffect è stato chiamato
      //UseLayoutEffect è stato chiamato
      //UseEffect è stato chiamato
    //result in console after a change in the code
      //UseLayoutEffect è stato chiamato
      //UseEffect è stato chiamato