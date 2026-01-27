const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req,res)=> {
    res.send("Server is now running smooth") 
});

app.listen(5001, () => {
    console.log("wow it's working");
})