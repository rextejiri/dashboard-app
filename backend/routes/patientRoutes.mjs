import { addNewPatient,
   getPatient,
   getPatientWithID,
   updatePatient, deletePatient, createTestResults }
   from '../controllers/patientControllers.mjs';


const routes = (app) => {
  // ======================
  app.route('/patient')
  // get route
    .get(getPatient)
  // post route
    .post(addNewPatient);
  // =======================
    app.route('/patient/:PatientId')
    // show route
    .get(getPatientWithID)
    // update route
    .put(updatePatient)
    // delete route
    .delete(deletePatient)
    // post test result routes
    .post(createTestResults)

}

export default routes;
