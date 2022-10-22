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

app.get("/api/products", (req,res,next)=>{
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

app.get("/api/seller/orders",(req,res,next)=>{
  let seller_id=req.headers.authorization;
  DB.query("SELECT `order`.* FROM `item` JOIN `order` ON `order`.`item_id`=item.id WHERE company_id = "+seller_id, (err, result, fields)=>{
    if(err) throw err;
    if(result.length == 0){
      res.json({"status": "no value"})
    }else{
      res.json(result[0])
    }
  });
})

app.get("/api/seller/products",(req,res,next)=>{
  for(let i=0;i<req.body.length;i++){
    DB.query("SELECT * FROM item WHERE company_id = "+req.body[i].company_id+" AND name = "+req.body[i].name, (err, result, fields)=>{
      if(err) throw err;
      if(result.length == 0){
        let key_str = "";
        let value_str = "";
        for(let key in req.body[i]){
          key_str += key+",";
          value_str += "'"+req.body[i][key]+"',";
        }
        key_str = key_str.substring(0,key_str.length-1);
        value_str = value_str.substring(0,value_str.length-1);
        DB.query("INSERT into item ("+key_str+") VALUES ("+value_str+")", ()=>{});
      }else{
        let upd_str = "";
        for(let key in req.body[i]){
          if(key != "id" && key != "company_id" && key != "name"){
            upd_str += key+"="+req.body[i][key]+",";
          }
        }
        upd_str = upd_str.slice(0,upd_str.length-1);
        DB.query("UPDATE item SET "+upd_str+" WHERE company_id = "+req.body[i].company_id+" AND name = "+req.body[i].name, ()=>{});
      }
    });
  }
})


app.listen(3000);
