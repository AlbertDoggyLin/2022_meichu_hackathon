const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const DB = require("./db/db")

DB.connect();

const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig))
app.use(bodyParser.json())          // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/',(req,res,next)=>{res.json({message:'hello world'})})

app.post("/api/login/buyer", (req,res,next)=>{
  DB.query("SELECT id FROM user WHERE account='"+req.body["username"]+"' AND password='"+req.body["password"]+"'", (err, result, fields)=>{
      if(err) throw err;
      if(result.length == 0){
        res.json({"status": "login fail"})
      }
      result[0].type="buyer"
      res.json(result[0])
  });
});

app.post("/api/login/seller", (req,res,next)=>{
  DB.query("SELECT id FROM company WHERE account='"+req.body["username"]+"' AND password='"+req.body["password"]+"'", (err, result, fields)=>{
      if(err) throw err;
      if(result.length == 0){
        res.json({"status": "login fail"})
      }
      result[0].type="seller"
      res.json(result[0])
  });
});

app.get("/api/product/:id", (req,res,next)=>{
  DB.query("SELECT * FROM item WHERE id="+req.params.id, (err, result, fields)=>{
      if(err) throw err;
      res.json(result[0])
  });
});

app.get("/api/product", (req,res,next)=>{
    DB.query("SELECT * FROM item", (err, result, fields)=>{
        if(err) throw err;
        res.json(result)
    });
});


app.listen(3000);
