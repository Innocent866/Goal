const USER_ROLE = require('../model/userRoleModel');

// post users, C -- for create

const create_user =  async(req,res)=>{
    try{
        await USER_ROLE.create(req.body);
        res.status(201).json({msg:"user crated successfully"})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

// post users, R -- for read
const getAll_users = async(req,res)=>{
    try{
       const users = await USER_ROLE.find({})
       if(users.length < 1) return res.json({msg:"no user found"})
        res.status(200).json({users})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

// update users, U -- for Update
const update_user = async(req,res)=>{
    try{
        const {id:userId} = req.params
        await USER_ROLE.findOneAndUpdate({_id:userId},
        req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({msg:"User updated successfully"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}


// delete users, D -- for Delete
const delete_user = async(req,res)=>{
    try{
       const {id:userId} = req.params
       await USER_ROLE.findOneAndDelete({_id:userId})
        res.status(200).json({msg:"User deleted successfully"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

// single user, S 
const single_user = async(req,res)=>{
    try{
        const {id:userId} = req.params
        const user = await USER_ROLE.findOne ({_id:userId})
        res.status(200).json({user})


    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})

    }
}

module.exports ={
    create_user,
    getAll_users,
    update_user,
    delete_user,
    single_user
}