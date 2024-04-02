const { model, Schema } = require("mongoose");



const cohortsSchema = new Schema({
 
  cohortSlug: {type: String, unique: true},
  cohortName: {type: String, required:true},
  program: {type : String, enum : ["Web Dev", " Web Dev", "UX/UI","Data Analytics","Cybersecurity"] },
format: { type: String, enum:["Full Time","Part Time"]},
  campus: {type: String, enum: [ "Madrid","Barcelona","Miami","Paris","Berlin","Amsterdam","Lisbon","Remote"]},
  startDate: {type: Date, Default: false},
  endDate: {type: Date},
  inProgress: {type: Boolean, default:false},
  programManager: {type: String, required:true},
  leadTeacher: {type: String, required: true },
  totalHours: {type:Number, Default:360}  
})
const CohortsModel = model("Cohort", cohortsSchema)
module.exports = CohortsModel