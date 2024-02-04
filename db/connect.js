const mongoose = require("mongoose");

// uri = "mongodb+srv://rajat:Rajat@3944@cluster0.pv92mgy.mongodb.net/Cluster0?retryWrites=true&w=majority"
// uri = "mongodb+srv://rajat:Rajat@3944@cluster0.pv92mgy.mongodb.net/?retryWrites=true&w=majority"
// const uri = "mongodb+srv://rajat:Rajat%403944@cluster0.pv92mgy.mongodb.net/Cluster0?retryWrites=true&w=majority";


const connectDB = (uri) => {
    console.log("connect db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;