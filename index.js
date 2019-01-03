const express = require('express'),
bodyparser = require('body-parser'),
func = require('./controller'),
app = express(),
port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.all('*',(req,res,next)=>{
  func.connect();
  console.log(`logged to database`);
  next();
});

app.get('/getAllUsr',(req,res)=>{
    // res.status(200).json({"allUsers":func.getAllUsr()});
    res.status(200).send(func.getAllUsr());
});

app.post('/getUsrData',(req,res)=>{
    var id = req.body.id;
  res.status(200).json(func.getUsrData(id));
});

app.get('/getStatusByOpenAndClose/:open/:close',(req,res)=>{
  var open = req.params.open,
  close = req.params.close;
  res.json(func.getStatusByOpenAndClose(open,close));
});

app.all('/getStatusByOpenAndClose/',(req,res)=>{
  var open = req.body.open,
  close = req.body.close;
  res.json(func.getStatusByOpenAndClose(open,close));
});

app.all('*',(req,res)=>{
  res.sendfile(`${__dirname}/api.html`);
});

app.listen(port,()=>{
  console.log(`listen on port ${port}`);
});