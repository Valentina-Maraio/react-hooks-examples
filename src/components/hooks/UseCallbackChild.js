import React, {useEffect} from 'react'

const UseCallbackChild = ({returnComment}) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return (
    <div>
      <h3>UseCallbackChild</h3>
      <p> {returnComment(" and Peke")} </p>
    </div>
  )
}

export default UseCallbackChild