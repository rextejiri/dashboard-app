import React from 'react';

const PatientSingle = (props) => {

  // console.log(testResults);
  return(
    <div>
      <div>{props.patient.dob}</div>
      <div>{props.patient.city}</div>
      <div>{props.patient.state}</div>
      <div>{props.patient.country}</div>
      <div>{props.patient.lastName}</div>
      <div>{props.patient.vaccinations}</div>
      <div>{props.patient.immunoglobulin}</div>
    </div>
  )
}

export default PatientSingle;
