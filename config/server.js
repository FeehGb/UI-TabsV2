const express = require('express');
const app = express()
const path = require('path');


app.use(express.static("src"));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../src/index.html'));
    //__dirname : It will resolve to your project folder.
  });


module.exports = app;  
