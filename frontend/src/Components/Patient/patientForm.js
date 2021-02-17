import React from 'react';
import axios from 'axios'



class PatientForm extends React.Component {
  submitPatient(event){
    event.preventDefault();

    axios.post('http://localhost:3001/patient', {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      dob: this.refs.dob.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      country: this.refs.country.value
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitPatient.bind(this)}>
          <div>
            <input type="text" ref="firstName"  id="firstName"/>
            <label htmlFor="firstName">first name</label>
          </div>
          <div>
            <input type="text" ref="lastName"  id="lastName"/>
            <label htmlFor="lastName">Last Name </label>
          </div>
          <div>
            <input type="text" ref="dob"  id="dob"/>
            <label htmlFor="dob">DOB</label>
          </div>
          <div>
            <input type="text" ref="city"  id="city"/>
            <label htmlFor="city">city</label>
          </div>
          <div>
            <input type="text" ref="state"  id="state"/>
            <label htmlFor="state">state</label>
          </div>
          <div>
            <input type="text" ref="country"  id="country"/>
            <label htmlFor="country">country</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default PatientForm;
