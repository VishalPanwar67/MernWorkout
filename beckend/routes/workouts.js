const { json } = require('express');
const express = require('express');
const Workout = require('../models/workoutModels')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router();

//Get all Workouts
router.get('/', getWorkouts);

//Get a single workout
router.get('/:id', getWorkout);

//Post a new workout
// router.post('/', (req, res) => {
//     res.json({ mssg: 'Post a new workout' })
// });

//Post a new workout
router.post('/', createWorkout);


//Delete a new workout
router.delete('/:id', deleteWorkout);

//update a new workout
router.patch('/:id', updateWorkout);


module.exports = router;
