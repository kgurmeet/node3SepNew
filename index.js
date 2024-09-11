const express=require('express');
const employee=require('./routes/employee')
const app=express();
app.use(employee);
app.listen(3000,(err)=>{
    if(err){
        console.log("err");
        
    }else{
        console.log("server is running on port 3000");
        
    }
})