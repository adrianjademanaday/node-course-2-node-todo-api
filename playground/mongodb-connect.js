
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Adrian Alie', age: 19};
// var{name} = user;
// console.log(name);

// creat connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').insertOne({
        name: 'Salas',
        age: 19,
        completed: true   
    }, (err, result) => { 
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Adrian Jade',
    //     age: 19,
    //     location: 'Philippines'
    // }, (err, result) => {
    //     if (err) {
    //     return console.log('Unable to insert user', err);
    //     }

       

    //     console.log(result.ops[0].name);
    // });

 
    db.close();
}); 