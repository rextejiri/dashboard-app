import React from 'react';
import axios from 'axios'
import '../App.css';




const PatientList = (props) => {


  const deletePatient= (event) => {
    axios.delete('http://localhost:3001/patient/' + event.target.value).then((response) => {
      alert('successfully Deleted ')
    })
  }

 return(
   <div className="patientlist">
      <ul>
        <h4 className="plist">Patient List</h4>
        <hr />
        {props.patients.map((patient) => (
          <div className="singlePatient" key={patient._id}        onClick={props.updateCurrentPatient.bind(this, patient)} >
            {patient.firstName} {patient.lastName}
            <div>
              <button value={patient._id} onClick={deletePatient}>X</button>
            </div>
          </div>
        ))}
      </ul>
   </div>
 );
}

export default PatientList;
