import React from 'react';
import axios from 'axios'



const PatientList = (props) => {


  const deletePatient= (event) => {
    axios.delete('http://localhost:3001/patient/' + event.target.value).then((response) => {
      alert('successfully Deleted ')
    })
  }

 return(
   <div>
      <ul>
        <li><h4>Patients</h4></li>
        {props.patients.map((patient) => (
          <div key={patient._id}        onClick={props.updateCurrentPatient.bind(this, patient)} >
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
