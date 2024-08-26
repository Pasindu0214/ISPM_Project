const express = require('express')
const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    loginUser
} = require('../controllers/userControllers')


const router = express.Router() 

//login
router.post('/', loginUser)

//GET all workouts
router.get('/', getUsers)

//GET a single workout
router.get('/:id', getUser)

//POST a new workout
router.post('/', createUser)

//DELETE a workout
router.delete('/:id', deleteUser)

//UPDATE a workout
router.patch('/:id', updateUser)



module.exports = router