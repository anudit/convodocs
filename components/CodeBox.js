import React from 'react'
import copyToClipboard from '../utils/clipboard'

const CodeBox = ({children}) => {

  return (
      <div style={{position:"relative", display: "block"}}>
        <button
            className='copybutton'
            onClick={(e)=>{ copyToClipboard(e.currentTarget.nextElementSibling.innerText, e.currentTarget) }}
        >
            COPY
        </button>
        {children}
      </div>
  )
}

export default CodeBox
