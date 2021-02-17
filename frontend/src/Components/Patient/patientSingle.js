import React from 'react';
import '../App.css'
import Example from '../Patient/PatientChart.js'


const PatientSingle = (props) => {

  // console.log(testResults);
  return(
    <div>
    <div><Example /></div>
      <div>{props.patient.dob}</div>
      <div>{props.patient.city}</div>
      <div>{props.patient.state}</div>
      <div>{props.patient.country}</div>
      <div>{props.patient.lastName}</div>
      <div>{props.patient.email}</div>
      <div>{props.patient.age}</div>
      <div>{props.patient.phone}</div>
    </div>
  )
}

export default PatientSingle;
