import React from 'react';
import App from '../App.js'



const PatientList = (props) => {
 return(
   <div>
      <ul>
        <li><h4>Patients</h4></li>
        {props.patients.map((patient) => (
          <div key={patient._id}>
            {patient.firstName}{patient.lastName}
          </div>
        ))}
      </ul>
   </div>
 );
}

export default PatientList;
