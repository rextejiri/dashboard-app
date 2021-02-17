import mongoose from 'mongoose'


const Schema = mongoose.Schema;

export const TestSchema = new Schema({

 testType: {
   type:String
 },
 result: {
   type: String
 },
 date: {
   type: String
 }
})
const Test = mongoose.model('Test', TestSchema);

export default Test
