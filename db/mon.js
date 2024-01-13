const  mongoose  = require("mongoose");

require('dotenv/config')

const mongoDBURL = process.env.DBURL

const connect = async ()=>{
    try{
        await mongoose.connect(mongoDBURL)
    }catch(error){
        console.log(error);
    }
}

module.exports = connect