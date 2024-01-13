const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')


const userRoleSchema = new Schema({
    name:{
        type:String,
        require:[true, 'must provide a name'],
        trim:true
    },
    email:{
        type:String,
        require:[true, 'email is require'],
        unique : true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    profession:{
        type:String,
        require:[true, 'role is require']
    },

    gender:{
        type:String,
        enum:['Male','Female'],
        require:[true,'select a gender']
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true})

const USER_ROLE = mongoose.model('user', userRoleSchema);
module.exports = USER_ROLE