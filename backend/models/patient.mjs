import mongoose from 'mongoose';
import TestSchema from './test.mjs'


const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  dob: {
    type: String,
  },
  city: {
    type: String,
    required: 'Enter city name'
  },
  state: {
    type: String,
    required: 'NY'
  },
  country: {
    type: String,
    required: 'Enter country'
  },
  demographics: {
    race: {
      type: String,
      enum:['Hispanic', 'Black', 'White']
    },
    religion: {
      type: String,
      enum: ['Christian', 'Muslim', 'Budhist']
    },
    occupation: {
      type: String,
    }
  },
  currentDoc:{
    name: {
      type: String,
    },
    specialty: {
      type: String,
    },
    docImg:{
      type: String,
    }
  },
  prevDoc:{
    type: Array,
    default: []
  },
  onMed: {
    type: Boolean,
  },
  currentMed: {
    type: Array,
    default: []
  },
  prevMed: {
    type: Array,
    default: []
  },
  isAllergic: {
    type: Boolean,
  },
  allergies: {
    type: Array,
    default: ['Dairy','Cats']
  },
  isImmunized: {
    type: Boolean,
  },
  vaccinations: {
    type: String,
    enum:['Corona', 'Malaria', 'Chicken Pulse']
  },
  immunoglobulin: {
    type: String,
    enum: ['M', 'G', 'A', 'E']
  },
  isIll: {
    type: Boolean,
  },
  currentIllness: {
    type: Array,
    default: ['Corona virus', 'Alzhemers Disease']
  },
  prevIllness: {
    type: Array,
    default: ['Ebola virus', 'Alzhemers Disease', 'Syhillis']
  },
  testResults: [TestSchema.schema],
  prescriptions: {
    type: Array,
  },
});
