const consts = require('./consts'),
newUsrSchema = require('./newUsr'),
sleep = require('system-sleep');
const mongoose = require('mongoose');
var newUsri;


const { MLAB_URL, DB_USER, DB_PASS } = consts
const url = MLAB_URL
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: DB_USER,
    pass: DB_PASS
}

const connect = mongoose.createConnection(url, options)

connect.on('connected', () => console.log('mongoose connected'))
connect.on('error', (err) => console.error(err))

mongoose.connect(url, options)

module.exports = connect
module.exports={
  getAllUsr: () => {
    newUsrSchema.findOne({},(err,newUsr)=>{
      console.log(newUsr.newUsr);
      newUsri = newUsr.newUsr;
    });
    sleep(1000);
    return newUsri;
  },
  getUsrData: (id) => {
    newUsrSchema.findOne({'new User':'by id'},{'equipment':{$elemMatch:{'id':id}}},(err,newUsr)=>{
      if(newUsr.newUsr[0] == null)
      newUsri = {'ERROR':'ID not found'}
      else newUsri = newUsr.newUsr[0];
    });
    sleep(1000);
    return newUsri;
  },
 
  getStatusByOpenAndClose: (open,close) => {
    var specUsr = []
    newUsrSchema.findOne({},(err,newUsr)=>{
      var myUsr = newUsr.newUsr ;
      for(let i in myUsr){
        if(myUsr[i].status <= open)
        specUsr.push(myUsr[i]);
        if(myUsr[i].status<=close)
        specUsr.push(myUsr[i]);
      }
    });
    sleep(2000);
    if(specUsr.length == 0)
    return {"ERROR":'no result for your query'};
    return specUsr;
  }
};