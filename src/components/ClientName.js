import React from 'react'
import './ComponentMainStyle.css';
import {motion} from 'framer-motion';

const ClientName = ({clientName,setClientName}) => {
  return (
    <motion.div whileHover={{scale:1.1}} className='container-center-label-above-field'>
      <label htmlFor='clientName'>Client Name</label>
      <input
      id='clientName'
      type='text'
      value={clientName}
      onChange={(e)=>setClientName(e.target.value)}
      />
    </motion.div>
  )
}

export default ClientName