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
