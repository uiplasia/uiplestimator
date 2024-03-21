import React from 'react'
import './ComponentMainStyle.css'

const ClientName = ({clientName,setClientName}) => {
  return (
    <div className='container-center-label-above-field'>
      <label htmlFor='clientName'>Client Name</label>
      <input
      id='clientName'
      type='text'
      value={clientName}
      onChange={(e)=>setClientName(e.target.value)}
      />
    </div>
  )
}

export default ClientName