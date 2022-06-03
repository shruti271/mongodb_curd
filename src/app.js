const express = require("express");
require("./db/conn");
const res = require("express/lib/response");


const app = express();
const students= require("./models/students");

app.use(express.json);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello from get function");
})
app.post("/Students", (req, res) => {
    console.log(req.body);
    const user=new students(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        console.log(e);
        res.send(e);
    })
  res.send("hello world");
})

app.listen(port, () => {
  console.log("welcome in listen port functipon");
});
