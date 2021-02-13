import React from 'react';



const PatientList = (props) => {
 return(
   <div>
      <ul>
        <li><h4>Patients</h4></li>
        {props.patients.map((patient) => (
          <div key={patient._id}        onClick={props.updateCurrentPatient.bind(this, patient)} >
            {patient.firstName} {patient.lastName}

          </div>
        ))}
      </ul>
   </div>
 );
}

export default PatientList;
