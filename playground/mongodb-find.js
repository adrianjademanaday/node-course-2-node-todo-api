//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// creat connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c0f4d9908bfce2744402143')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
 
    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
 
    // FOR THE 'JADE'
    db.collection('Users').find({name: 'Jade'}).toArray().then((docs) => {
        console.log('---');
        console.log('Users with name: Jade');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users');
    });

    // db.collection('Users').find({name: 'Jade'}).count().then((count) => {
    //     console.log(`Users count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch the counts');
    // });


    // FOR THE 'ADRIAN'

    // db.collection('Users').find({name: 'Adrian'}).toArray().then((docs) => {
    //     console.log('---')
    //     console.log('Users with name: Adrian');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch users');
    // });

    // db.collection('Users').find({name: 'Adrian'}).count().then((count) => {
    //     console.log(`Users count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count users record');
    // });

    //db.close();
}); 


