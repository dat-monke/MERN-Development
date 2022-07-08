const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

// Create Schema 
// A schema are the fields 
const ItemSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

// This allows the model to be exported and be drawn into other files
module.exports = Item = mongoose.model('item', ItemSchema);