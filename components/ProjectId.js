import React from 'react'
import './ComponentMainStyle.css'

const ProjectId = ({projectId,setProjectId, username}) => {
    return (
      <div className='container-center-label-above-field'>
        <label htmlFor='projectId'>Project Id</label>
        <input
        id='projectId'
        type='text'
        value={projectId}
        readOnly
        onChange={(e)=>setProjectId(e.target.value)}
        />
      </div>
    )
  }

export default ProjectId