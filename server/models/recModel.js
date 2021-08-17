const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rectangleSchema = new Schema({
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    color: {type: String, required: true},
    name: {type: String, required: true}
}, {
    timestamps: true,
});

const Rectangle = mongoose.model('Rectangle', rectangleSchema);

module.exports = Rectangle;