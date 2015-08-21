/*
// app/models/todo.js

    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('Todo', {
        text : String,
        done : Boolean
    });
*/
// app/models/todo.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
    name: String,
    price: Number,
    description: String,
    canPurchase: Boolean,
    bought: Number,
    soldOut: Boolean,
    images: {
        full: String,
        thumb: String
    },
    reviews: {
        stars: Number,
        body: String,
        author: String        
    }
});
