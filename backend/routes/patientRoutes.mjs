import { addNewPatient } from '../controllers/patientControllers.mjs';


const routes = (app) => {
  app.route('/patient')
  // post route
    .post(addNewPatient)
}

export default routes;
