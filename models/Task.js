const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        
    },

});

module.export = mongoose.model("Task",taskSchema)