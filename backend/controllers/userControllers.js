const User = require('../models/userModel.js')
const mongoose = require('mongoose')

//GET all workouts
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

//GET a single workout
const getUser = async (req, res) =>
{   const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){   
        return res.status(404).json({error: 'No Such User'})
    }


    const user = await User.findById(id)
    res.status(200).json(user)

    if(!user){
        return res.status(404).json({error: 'No such User'})
    }

    res.status(200).json(user)

}


//POST a new workout
const createUser = async (req, res) =>
{   const {fname, lname, email, phn, password, role} = req.body
    // add doc to db
    try{

        const user = await User.create({fname, lname, email, phn, password, role})
        res.status(201).json({user})

    } catch (err){
    
        console.log(err) 
        res.status(400).json({error: err.message})       
    }
    
}

//DELETE a workout
const deleteUser = async (req,res) =>
{
const {id} = req.params
if(!mongoose.Types.ObjectId.isValid(id)){   
    return res.status(404).json({error: 'No Such User'})
    }

const user = await User.findByIdAndDelete(id) 

if(!user){
    return res.status(404).json({error: 'No such User'})

    }

    res.status(200).json(user)
}
//UPDATE a workout
const updateUser = async (req, res) =>
{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){   
        return res.status(404).json({error: 'No Such user'})
        }
    
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });

    
    if(!user){
        return res.status(404).json({error: 'No such User'})
    
        }
    
        res.status(200).json(user)
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}