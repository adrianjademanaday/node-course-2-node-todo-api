
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TestApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect in database');
    }
    console.log('Connected to database');

    // deleteOne
    // db.collection('TestUsers').deleteOne({name: 'Salas'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('TestUsers').findOneAndDelete({name: 'Salas'}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany
    // db.collection('TestUsers').deleteMany({completed: false}).then((result) => {
    //     console.log(result);
    // });
    

});