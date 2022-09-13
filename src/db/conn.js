const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://localhost:27017/employees").then(()=>console.log("Successful")).catch((err)=>console.log(err));

const myschema = mongoose.Schema({
    fullname:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    city:{
        type:String,
    }
})

const Employees = new mongoose.model("employeesrecord",myschema);
module.exports = Employees;