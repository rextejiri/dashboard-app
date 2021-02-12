import React from 'react';

const PatientSingle = (props) => {
  return(
    <div>
      <div>{props.patient.dob}</div>
      <div>{props.patient.city}</div>
      <div>{props.patient.state}</div>
      <div>{props.patient.country}</div>
    </div>
  )
}

export default PatientSingle;
