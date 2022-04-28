const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeddingSchema = new Schema({
    wedding_item: String,
    wedding_price: String,
    description: String,

});

module.exports = mongoose.model('wedding_website', WeddingSchema);

