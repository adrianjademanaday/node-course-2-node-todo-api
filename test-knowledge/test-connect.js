// declaring to mongodatabase
const {MongoClient, ObjectID} = require('mongodb');

// creating 
MongoClient.connect('mongodb://localhost:27017/TestApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect in Database');
    }  
    console.log('Connected to DB');


    db.close();

});