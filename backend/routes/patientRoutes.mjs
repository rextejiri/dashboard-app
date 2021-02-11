import { addNewPatient,
   getPatient,
   getPatientWithID,
   updatePatient, deletePatient }
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

}

export default routes;
