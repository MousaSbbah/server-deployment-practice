'use strict';

const express = require('express');
const app = express();
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');






app.get('/',(req,res)=>{
  res.send('welcome to Home Page');
});

app.get('/wrong',(req,res)=>{
  throw new Error('Something went wrong');
});

app.use('*',notFound);
app.use(errorHandler);



function start(port){
  app.listen(port,()=>{
    console.log('listening on port '+ port)
  })
}
module.exports ={
  app: app,
  start: start
}



