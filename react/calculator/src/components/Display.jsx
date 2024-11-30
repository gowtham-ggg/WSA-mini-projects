import React from 'react'

const Display = ({input, result}) => {
  return (
    <>
     <div className="output-field-container">
        <input type="text" className="output-field" id="display" value={result}readOnly />
        <input type="text" className="input-field" placeholder="0"  value={input} id="input-screen" readOnly />
    </div>
    </>
  )
}

export default Display
