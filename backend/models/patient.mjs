import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a fisrt name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  dob: {
    type: Date,
    default: Date.now
  },
  address: {
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
    }
  },
  demographics: {
    race: {
      type: String,
      enum: ['Hispanic', 'Black African American', 'White']
    },
    religion: {
      type: String,
      enum: ['Christian', 'Muslim', 'Budhist']
    },
    occupation: {
      type: String,
      default: 'Web Developer'
    }
  },
  currentDoc:{
    name: {
      type: String,
      default: 'Johnny Bravo'
    },
    specialty: {
      type: String,
      enum: ['Family medicine', 'Pedriatrics']
    }
  },
  prevDoc:{
    type: Array,
    default: []
  },
  onMed: {
    type: Boolean,
    default: false
  },
  currentMed: {
    type: Array,
    default: ['Tylenol', 'Xanax', 'Azithromycin']
  },
  prevMed: {
    type: Array,
    default: []
  },
  isAllergic: {
    type: Boolean,
    default: false
  },
  allergies: {
    type: Array,
    default: ['Dairy','Cats']
  },
  isImmunized: {
    type: Boolean,
    default: false
  },
  immunizationRec:{
    vaccinations: {
      type: Array,
      default:['Corona', 'Malaria', 'Chicken Pulse']
    },
    immunoglobulin: {
      type: Array,
      default: ['M', 'G', 'A', 'E']
    }
  },
  isIll: {
    type: Boolean,
    default: false
  },
  currentIllness: {
    type: Array,
    default: ['Corona virus', 'Alzhemers Disease']
  },
  prevIllness: {
    type: Array,
    default: ['Ebola virus', 'Alzhemers Disease', 'Syhillis']
  },
  testResults: {
    type: Array,
    default: []
  },
  prescriptions: {
    type: Array,
    default: []
  },
});
