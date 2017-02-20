var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/meandb';

//connect to MongoDB using mongoose
// no callbacks after DB connection, instead mongoose listens for events
mongoose.connect(dbURI);

// CONNECTION EVENTS
// events: connected, error, disconnected 
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
             process.exit(0);
    });
});
var gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// BRING IN YOUR SCHEMAS
require('./students');
require('./faculty');