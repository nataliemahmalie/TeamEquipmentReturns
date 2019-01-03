const express = require('express');

const ctrl = require('./controller');
const call=require('./call');
app = express();
port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/users',call(ctrl.getAllUsr));
app.get('/users/:team&:status',call(ctrl.getUsrData))
app.post('/users/:id',call(ctrl.setStatusByOpenAndClose))

app.all('*',(req,res,next)=>{
  res.send("you need to write a specific path")
  next()
})

app.listen(port,()=>{
  console.log(`listen on port ${port}`);
});