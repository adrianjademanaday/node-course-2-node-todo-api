// declaring to mongodatabase
const {MongoClient, ObjectID} = require('mongodb');

// creating database connection
MongoClient.connect('mongodb://localhost:27017/TestApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect in Database');
    }  
    console.log('Connected to DB');

    // find the user with completed: false
    db.collection('TestUsers').find({completed: false}).toArray().then((docs) => {
        console.log('---');
        console.log('Data with completed: false');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('Unable to fetch data');
    });

    // count the numbers
    db.collection('TestUsers').find({completed: false}).count().then((count) => {
        console.log(`Total Count of the user: ${count}`);
    }, (err) => {
        return console.log('Unable to fetch data');
    });


    db.close();

});