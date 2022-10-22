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
  DB.query("SELECT * FROM `user` JOIN place ON user.place_id=place.id WHERE user.account='"+req.body["username"]+"' AND password='"+req.body["password"]+"'", (err, result, fields)=>{
      if(err) throw err;
      if(result.length == 0){
        res.json({"status": "login fail"})
      }else{
        delete result[0].password
        result[0].type="buyer"
        res.json(result[0])
      }
  });
});

app.post("/api/login/seller", (req,res,next)=>{
  DB.query("SELECT * FROM company WHERE account='"+req.body["username"]+"' AND password='"+req.body["password"]+"'", (err, result, fields)=>{
      if(err) throw err;
      if(result.length == 0){
        res.json({"status": "login fail"})
      }else{
        delete result[0].password
        result[0].type="seller"
        res.json(result[0])
      }
  });
});

app.get("/api/product/:id", (req,res,next)=>{
  DB.query("SELECT * FROM item WHERE id="+req.params.id, (err, result, fields)=>{
      if(err) throw err;
      if(result.length == 0){
        res.json({"status": "no value"})
      }else{
        res.json(result[0])
      }
  });
});

app.get("/api/product", (req,res,next)=>{
    DB.query("SELECT * FROM item", (err, result, fields)=>{
        if(err) throw err;
        res.json(result)
    });
});

app.post("/api/buyer/submitOrder",(req,res,next)=>{
  let user_id=req.headers.authorization;
  for(let i=0;i<req.body.length;i++){
    DB.query("INSERT into `order` (item_id,user_id,count,place_id,status) VALUES ("+req.body[i].item_id+","+user_id+","+req.body[i].number+","+req.body[i].place_id+",'ordered')", (err, result, fields)=>{
        if(err) throw err;
    });
  }
  res.json({"status":"success"})
})

app.get("/api/buyer/products",(req,res,next)=>{
  let user_id=req.headers.authorization;
  DB.query("SELECT item.* FROM `user` JOIN company_to_place ON user.place_id=company_to_place.place_id JOIN item ON company_to_place.company_id=item.company_id WHERE user.id = "+user_id, (err, result, fields)=>{
    if(err) throw err;
    res.json(result)
  });
})

app.get("/api/buyer/orders",(req,res,next)=>{
  let user_id=req.headers.authorization;
  DB.query("SELECT * FROM `order` WHERE user_id = "+user_id, (err, result, fields)=>{
    if(err) throw err;
    res.json(result)
  });
})

app.get("/api/buyer/orders/:id",(req,res,next)=>{
  DB.query("SELECT * FROM `order` WHERE id = "+req.params.id, (err, result, fields)=>{
    if(err) throw err;
    if(result.length == 0){
      res.json({"status": "no value"})
    }else{
      res.json(result[0])
    }
  });
})

app.get("/api/seller/orders/:id",(req,res,next)=>{
  DB.query("SELECT * FROM `order` WHERE id = "+req.params.id, (err, result, fields)=>{
    if(err) throw err;
    if(result.length == 0){
      res.json({"status": "no value"})
    }else{
      res.json(result[0])
    }
  });
})

app.listen(3000);
