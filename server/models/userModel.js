const Mongoose = require('mongoose')

const User = new Mongoose.Schema({
    FirstName:{type:String, required:true},
    LastName:{type:String, required:true},
    Email:{type:String, required:true, unique:true},
    Password:{type:String, required:true},
    Phone:{type:String, required:true},
    City:{type:String, default:''},
    Address:{type:String, default:''},
    Zipcode:{type:String, default:''},
    State:{type:String, default:''},
    Country:{type:String, default:''},
},
{collection:'user-data'}
)

const model = Mongoose.model('UserData',User)

module.exports = model