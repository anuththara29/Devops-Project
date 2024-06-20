require('dotenv').config()
const express = require('express')
const app = express()
const createHttpError = require('http-errors')
const UserRouter = require('./routes/user')
const weatherapp = require('./weatherapp')

app.use('/public/pets', express.static('public/pets'))

//cors
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use('/api/v1/user', UserRouter);


app.get('/weather', async (req, res) => {
    if (!req.query.address) {
        return res.status(400).json({
            error: "Address term is compulsory"
        });
    }

    try {
        const data = await weatherapp(req.query.address);
        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching weather data."
        });
    }
});


app.use((err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(500).send({ message: err.message })
    }
    //error unknown
    res.status(500).send({ message: "Error Unknown" })
})

module.exports = app;