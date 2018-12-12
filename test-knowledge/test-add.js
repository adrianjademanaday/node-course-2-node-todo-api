// declaring to mongodatabase
const {MongoClient, ObjectID} = require('mongodb');

// creating database connection
MongoClient.connect('mongodb://localhost:27017/TestApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect in Database');
    }  
    console.log('Connected to DB');

    db.collection('TestUsers').insertOne({
        name: 'Salas',
        age: 18,
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('Unable to add new data', err);
        }

        console.log('Successfully Added')
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    




    db.close();

});