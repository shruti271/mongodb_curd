const { default: mongoose } = require("mongoose");
const express = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test_db",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("successfully connected");
}).catch((e)=>{
    console.log("no connection" + e);
});