const { model, Schema } = require('mongoose');

const artistSchema = new Schema({
    name: String,
    genre: String,
});

module.exports = model('Artist', artistSchema);
