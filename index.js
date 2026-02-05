const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];


app.get("/tasks", (req,res)=> {

res.json(tasks); +

});

app.tasks("/task",(req,res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
    }
})



app.listen(5001, () => {
    console.log("wow it's working");
})