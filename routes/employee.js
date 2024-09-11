const express=require('express');
const Users = require('../Users.json')
const router=express.Router();
router.use(express.json());
router.get('/Users',(req,res)=>{
    res.json(Users);
})
router.post('/add/Users',(req,res)=>{
    console.log(req.body);
    //req.body.id=parseInt(31);
    Users.push(req.body);
    fs.writeFile('Users.json',JSON.stringify(Users),(err)=>{
        if(err){
            console.log("error");
            
        }else{
            console.log("data added successfully");
            
        }

    });
    res.end("add successfully");
    
})
router.get('/Users/:id',(req,res)=>{
    let id=req.params.id;
    let user=Users.find((user)=>user.id===parseInt(id));
    res.json(user);
})
//localhost:3000/Users/Update/30
router.put('/Users/Update/:id',(req,res)=>{
    let id=req.params.id;
    console.log(id);
    let index=Users.findIndex((User)=>User.id==parseInt(id))
    console.log(index + "index");
    Users[index].first_name="Mohan";
        fs.writeFile('Users.json',JSON.stringify(Users),(err)=>{
        if(err){
            console.log("error");
            
        }else{
            console.log("data added successfully");
            
        }

    });
    res.end("updated successfully");
    

})
router.delete('/Users/delete/:id',(req,res)=>{
    let id=req.params.id;
    let index=Users.findIndex((User)=>User.id==parseInt(id))
    if(index>-1){
    console.log(index + "index");
    Users.splice(index,1);
    fs.writeFile('Users.json',JSON.stringify(Users),(err)=>{
        if(err){
            console.log("error");
            
        }else{
            console.log("data added successfully");
            res.end("deleted successfully")
            
        }

    });
}else{
    res.end("data not found");
}

})

module.exports=
    router
