import React from 'react'
import Carbon from '../assests/carbon.png'

const FooterText = () => {
  return (
    <div style={{display: 'flex', gap: '10px'}} >
        <img src={Carbon} alt="" style={{height: '16px'}}/>
        <p style={{marginTop: '1px'}}>Carbon neutral since 2007</p>
    </div>
  )
}

export default FooterText



// 

// style={{display: 'flex', gap: '10px',}}