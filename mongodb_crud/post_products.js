const express = require("express");
const module2 = express.Router();
module2.post("/",(req,res)=>{
    const record = {
        "e_id" : req.body.e_id,
        "e_name" : req.body.e_name,
        "e_sal" : req.body.e_sal
    };
            const connection = req.db;    
            const db = connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME).insertOne(record,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"msg":"record inserted successfully !!!"})
                }
            })
      
});
module.exports = module2;