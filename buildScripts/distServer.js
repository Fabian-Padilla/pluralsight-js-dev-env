//  this code originally comes from srvServer.js, but now lets remove all refered to webpack

import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){

  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users',function(req,res){

  //  Hardcodign for simplicity, Pretends this heats a real Database
  res.json([
    {"id": 1,"firstName": "Bob", "lastName": "Smith", "email" : "bob@gmail.com"},
    {"id": 2,"firstName": "Tammy", "lastName": "Norton", "email" : "tnorton@gmail.com"},
    {"id": 3,"firstName": "Tina", "lastName": "Lee", "email" : "lee.tina@gmail.com"}

  ]);
});

app.listen(port, function(err){

  if(err){
    console.log(err); // eslint-disable-line no-console
  }
  else {
    open("http://localhost:" + port);
  }
});
