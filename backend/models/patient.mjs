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
  contact:{
    phone:{
      type: Number,
    },
    email:{
      type: String,
    }
  },
  dob: {
    type: String,
  },
  sex:{
    type: String,
    enum: ['Male, Female']
  },
  city: {
    type: String,
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
  prevMed: {
    one: {
      type: String,
    },
    two: {
      type: String,
    },
    three: {
      type: String,
    },
    four: {
      type: String,
    },
  },
  isAllergic: {
    type: String,
    enum: ['Yes', 'No']
  },
  allergies: {
    one:{
      type:String,
    },
    two:{
      type:String,
    },
    three:{
      type:String,
    },
    four:{
      type: String,
    }
  },
  isImmunized: {
    type: String,
    enum: ['Yes', 'No']
  },
  vaccinations: {
    one: {
      type: String,
    },
    two: {
      type: String,
    },
    three: {
      type: String,
    },
    four: {
      type: String,
    }
  },
  prescriptions: {
    one: {
      type: String,
    },
    two: {
      type: String,
    },
    three: {
      type: String,
    },
    four: {
      type: String,
    },
    five: {
      type: String,
    },
  },
  test1:{
    testType:{
      type: String,
    },
    result:{
      type: Number,
    },
    flag:{
      type: String,
      enum: ['High', 'Low', 'Stable']
    },
    unit:{
      type: String,
    }
  },
  test2:{
    testType:{
      type: String,
    },
    result:{
      type: Number,
    },
    flag:{
      type: String,
      enum: ['High', 'Low', 'Stable']
    },
    unit:{
      type: String,
    }
  },
  test3:{
    testType:{
      type: String,
    },
    result:{
      type: Number,
    },
    flag:{
      type: String,
      enum: ['High', 'Low', 'Stable']
    },
    unit:{
      type: String,
    }
  },
  test4:{
    testType:{
      type: String,
    },
    result:{
      type: Number,
    },
    flag:{
      type: String,
      enum: ['High', 'Low', 'Stable']
    },
    unit:{
      type: String,
    }
  },

  testResults: [TestSchema.schema],

});
