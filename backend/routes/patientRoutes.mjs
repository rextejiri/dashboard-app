import { addNewPatient, getPatient } from '../controllers/patientControllers.mjs';


const routes = (app) => {
  app.route('/patient')
  // get route
  .get(getPatient)
  // post route
    .post(addNewPatient);
}

export default routes;
