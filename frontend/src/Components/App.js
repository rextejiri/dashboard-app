import React from 'react';
import axios from 'axios'
import './App.css';
import PatientList from './Patient/PatientList.js'
import PatientForm from './Patient/PatientForm.js'
import PatientSingle from './Patient/PatientSingle.js'



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      patients: [],
      currentPatient: {},
    }
    this.updateCurrentPatient = this.updateCurrentPatient.bind(this)
  }

  componentDidMount (){
    const url = 'http://localhost:3001/patient';

    axios.get(url)
    .then((response) => {
      // console.log(response.data);
      this.setState({
        patients: response.data,
      })
    })
    .catch((error) => {
    });
  };

  updateCurrentPatient(updatedPatient){
    this.setState({
      currentPatient: updatedPatient,
    })
    document.querySelector(".patientContainer").style.display = "flex"
  }



  render () {
    return (
      <div className="container">
        <div> <PatientForm /></div>
        <div className="single_list_container">
          <div className="patientListApp"><PatientList deletePatient={this.state.deletePatient} patients={this.state.patients} updateCurrentPatient={this.updateCurrentPatient}/></div>
          <div className="patientSingleApp"> <PatientSingle patient={this.state.currentPatient}  /></div>
        </div>

      </div>
    );
  }
}

export default App;
