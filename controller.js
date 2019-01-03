
const NewUsr = require('./newUsr');
const connection=require('./db');

module.exports={

  async getAllUsr(req,res,next){
      const result=await NewUsr.find({});

      if(result){
        console.log(result);
        res.json(result);

      }else{
        res.send('eror');
      }
 
  },
  async getUsrData(req,res,next){
    const {team=null, status=null} = req.params;
    const result=await NewUsr.find({team,status});

    if(result){
      console.log(result);
      res.json(result);

    }else{
      res.send('eror');
    }
    
},
async setStatusByOpenAndClose(req,res,next){
  const {id=null} = req.params
  const {status=null} = req.body
  const result=await NewUsr.updateOne({id},{status})
  if(result){
    console.log(result);
    res.json(result);

  }else{
    res.send('eror');
  }
}
}