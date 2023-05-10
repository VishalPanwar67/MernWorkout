const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const workoutRoutes = require('./routes/workouts')

//express App
const app = express();

//middlewere
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes
// app.get('/', (req, res) => {
//     res.json({ mssg: 'Welcome to the Workout app' })
// });

//routes
app.use('/api/workouts', workoutRoutes)


//connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log("listening and Connected to DB on port", process.env.PORT)
        });
    })
    .catch((error) => { console.log(error) })
