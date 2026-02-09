const mongoose = require("mongoose");
const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/taskmanager");
        console.log("mangoDB connected")
    } catch (error) {
        console.error(error);
        process.exit(1);
        
    }
};

module.exports = connectDB;
