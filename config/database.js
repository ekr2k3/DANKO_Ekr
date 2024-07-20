var mongoose = require('mongoose');

module.exports.connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://hoangnam12a2003km2:ed7yqfgVtFVsTmBO@cluster0.b9k6zv6.mongodb.net/NEWS");
        console.log("success")
    }
    catch(error){
        console.log(error);
    }
}

// có những lúc kết lối lâu quá --> MongoNetworkError: connect ETIMEDOUT 16.163.89.16:27017 hoặc MongooseError: Operation `news.find()` buffering timed out after 10000ms
// npm start chạy lại server là đc



