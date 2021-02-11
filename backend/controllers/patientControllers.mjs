import mongoose from 'mongoose';
import { PatientSchema } from '../models/patient.mjs';

const Patient = mongoose.model('Patient', PatientSchema);


console.log(Patient);

// =================== create new patient

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
// ==================find all patients

export const getPatient = (req, res) => {
  Patient.find({}, (err, foundPatients) => {
    if (err) {
      res.send(err);
    }
    res.json(foundPatients);
  });
};

// ================== find and show one patient

export const getPatientWithID = (req, res) => {
    Patient.findById(req.params.PatientId, (err, foundPatient) => {
        if (err) {
            res.send(err);
        }
        res.json(foundPatient);
    });
}

// ================== find and update one patient

export const updatePatient = (req, res) => {
    Patient.findByIdAndUpdate(req.params.PatientId,
      req.body, {new: true},
      (err, updatedPatient) => {
        if (err) {
            res.send(err);
        }
        res.json(updatedPatient);
    });
}
