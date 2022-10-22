const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

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

app.listen(3000);
