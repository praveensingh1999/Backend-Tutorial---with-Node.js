import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    // defined the schema 
    // define the feild that are allowed
    //define the rule for each and every feild
    //mongoose ha built in validation.
name:{
    type: String,
    required: true
},
age:{
    type: Number,
    min:10,
    max:100
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true,
    minLength:0,
    maxLength:20
},
role:{
    type: String,
    enum:["user","admin","superadmin","quest"],
    default: "user",
    required: true
}

})

const User = mongoose.model("Users", userSchema);



export default User