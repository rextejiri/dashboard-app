import React from 'react';
import './App.css';
import PatientList from './Patient/patientList.js'
import PatientForm from './Patient/patientForm.js'
import PatientSingle from './Patient/patientSingle.js'



class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        <div> PatientList</div>
        <div> PatientSingle</div>
        <div> PatientForm</div>
      </div>
    );
  }
}

export default App;
