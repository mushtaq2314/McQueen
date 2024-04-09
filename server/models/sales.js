const Mongoose = require('mongoose')

const Sales = new Mongoose.Schema({
    Email:{type:String, required:true},
    Phone:{type:String, required:true},
    Name:{type:String, required:true},
    SellerName:{type:String, required:true},
    Year:{type:String, required:true},
    ImgUrl:{type:String, required:true},
},
{collection:'sales'}
)

const model = Mongoose.model('Sales',Sales)

module.exports = model