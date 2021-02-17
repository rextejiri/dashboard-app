import mongoose from 'mongoose';
import TestSchema from './test.mjs'


const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  patientImg:{
    type: String,
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  age:{
    type: Number,
  },
  phone:{
    type: Number,
  },
  email:{
    type: String,
  },
  dob: {
    type: String,
  },
  sex:{
    type: String,
    enum: ['Male', 'Female']
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
  },
  docName: {
    type: String,
  },
  docSpecialty: {
    type: String,
  },
  docImg:{
    type: String,
  },
  medOne: {
    type: String,
  },
  medTwo: {
    type: String,
  },
  medThree: {
    type: String,
  },
  medFour: {
    type: String,
  },
  isAllergic: {
    type: String,
    enum: ['Yes', 'No']
  },
  allergyOne:{
    type:String,
  },
  allergyTwo:{
    type:String,
  },
  allergyThree:{
    type:String,
  },
  allergyFour:{
    type: String,
  },
  isImmunized: {
    type: String,
    enum: ['Yes', 'No']
  },
  vOne: {
    type: String,
  },
  vTwo: {
    type: String,
  },
  vThree: {
    type: String,
  },
  vFour: {
    type: String,
  },
  testType1:{
    type: String,
  },
  result1:{
    type: Number,
  },
  flag1:{
    type: String,
    enum: ['High', 'Low', 'Stable']
  },
  unit1:{
    type: String,
  },
  testType2:{
    type: String,
  },
  result2:{
    type: Number,
  },
  flag2:{
    type: String,
    enum: ['High', 'Low', 'Stable']
  },
  unit2:{
    type: String,
  },
  testType3:{
    type: String,
  },
  result3:{
    type: Number,
  },
  flag3:{
    type: String,
    enum: ['High', 'Low', 'Stable']
  },
  unit3:{
    type: String,
  },
  testType4:{
    type: String,
  },
  result4:{
    type: Number,
  },
  flag4:{
    type: String,
    enum: ['High', 'Low', 'Stable']
  },
  unit4:{
    type: String,
  },

  testResults: [TestSchema.schema],

});
