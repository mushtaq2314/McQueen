const Mongoose = require('mongoose')

const Purchases = new Mongoose.Schema({
    Email:{type:String, required:true},
    Phone:{type:String, required:true},
    Name:{type:String, required:true},
    Token:{type:String, required:true},
    CarData:{type:String, required:true},
    ImgUrl:{type:String, required:true},
},
{collection:'purchases'}
)

const model = Mongoose.model('Purchases',Purchases)

module.exports = model