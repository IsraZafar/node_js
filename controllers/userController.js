const mongoose = require('mongoose')
const User = require("../models/user");
const getUsers = async(req,res)=>{
    const users = await User.find();
    res.send(users);
}
const addUsers=async(req,res)=>
{
    const users=new User({
        firstName :"Isra",
        lastName :"IsraZafar",
        email :"Israzafariqbal@gmail.com",
       password :"12434568",

    });
    const addusers =await User.create(users);
    res.send(adduser);

}
module.exports={getUsers,addUsers};