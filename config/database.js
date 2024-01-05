const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://longphamk2kk:longpham1808@cluster0.n7lku4j.mongodb.net/learn_nodejs?retryWrites=true&w=majority")
        console.log("connect DB success");
    } catch(error){
        console.log(error.message);
    }
}
module.exports = connectDB;