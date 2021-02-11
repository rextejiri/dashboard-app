import mongoose from 'mongoose';
import { PatientSchema } from '../models/patient.mjs';

const Patient = mongoose.model('Patient', PatientSchema);


console.log(Patient);
export const addNewPatient = (req, res) => {
  // new instance of patient model
  let newPatient = new Patient(req.body);

  newPatient.save((err, savedPatient) => {
    if (err) {
      res.send(err);
    }
    res.json(savedPatient);
  });
};
