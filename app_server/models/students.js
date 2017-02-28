var mongoose = require('mongoose');

// nested schema, one student may be looking into many opportunities
// declare before parent schema
var opportunitySchema = new mongoose.Schema({
    title: {    // could be Google 
        type: String,
        required: true
    },
    type: String,   //  could be intern, full time etc
    startingDate: Date,     
    //[Number] looks like  [longitude, latitude]
    location: {type: [Number], index: '2dsphere'}, 
    
});

// parent schema
var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    courses: [String],
    yearEnter: Number,
    institution: { 
        type: String,
        "default": "Mills"  
    },
    //[Number] looks like  [longitude, latitude]
     coords: {type: [Number], index: '2dsphere'}, 
    
    // Add nested schema, reference as an array 
    opportunity:  [opportunitySchema]
});

// model name, schema name, collection name (optional)
// collection name will be Students by default 
mongoose.model('Student', studentSchema, 'students');