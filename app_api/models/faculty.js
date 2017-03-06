var mongoose = require('mongoose');

// parent schema
var facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialty: String,
    courses: [String],
    institution: { 
        type: String,
        "default": "Mills"  
    }
});

// model name, schema name, collection name (optional)
// collection name will be lower case and plural 
// collection name will be Students by default 
mongoose.model('Faculty', facultySchema, 'faculty');