const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(cors());
const connection = mongoose.connect("mongodb://localhost:27017/sampledb");

const sampleSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    gender: String
})

const Model = mongoose.model("sampleCollection", sampleSchema);
app.get('/sampleData', (req, res) => {
    Model.find({}).then((sampleData) => {
        res.json(sampleData)
    }).catch((err) => {
        console.log("FAILED", err)
    })
})

app.listen(3001, () => console.log("LISTENING TO 3001"));