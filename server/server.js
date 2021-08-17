const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const rectangleRouter = require('./routes/recRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/rectangles', rectangleRouter);

// const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://mongo:27017', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection successful!");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});