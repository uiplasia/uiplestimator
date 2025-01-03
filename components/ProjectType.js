import React from 'react';

export const projectTypes = [
  { id: 'warmshell', label: 'Warmshell' },
  { id: 'barshell', label: 'Barshell' },
  { id: 'interiorRenovation', label: 'Interior Renovation' },
  { id: 'architecture', label: 'Architecture' },
];

const ProjectType = ({ projectType, setProjectType }) => {
  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
  };

  return (
    <div>
        <label htmlFor='propertyType' className='container-center-label-above-field'>Project Type</label>
      {projectTypes.map((type) => (
        <label key={type.id}>
          <input
            type="radio"
            name="projectType"
            value={type.id}
            checked={projectType === type.id}
            onChange={handleProjectTypeChange}
          />
          {type.label}
        </label>
      ))}
    </div>
  );
};

export default ProjectType;
