import React from 'react';
import '../App.css'
import Example from '../Patient/PatientChart.js'
import BasicTable from '../Patient/BasicTable.js'


const PatientSingle = (props) => {
  const patient = props.patient
  const name = patient.firstName + " " + patient.lastName
  const address = patient.city + " " + patient.state + ", " + patient.country
  const allergies = patient.allergyOne + ", " + patient.allergyTwo + ", " + patient.allergyThree

  // console.log(testResults);
  return(
    <div className="patientContainer">
      <div className="info">
        <div>Name: {name}</div>
        <div>DOB: {patient.dob}</div>
        <div>Sex: {patient.sex}</div>
        <div>Age: {patient.age}</div>
      </div>
      <div className="info">
        <div>Allergic: {patient.isAllergic}</div>
        <div>Allergies:  {allergies}</div>
      </div>
      <div className="info"> 
        <div>Address: {address}</div>
        <div>Email: {patient.email}</div>
        <div>Phone: {patient.phone}</div>
      </div>
      <div className="chartContainer">
        <div><Example  /></div>
        <div><BasicTable patient={props.patient} /></div>
      </div>
    </div>
  )
}

export default PatientSingle;
