//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// creat connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // For Update Using findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c108dbaafc177a63cc83f4d')
    },  { 
        $set: {
        name: 'Adrian',
        location: 'STRIDE'
        } , 
        $inc: {
        age: 4
    }
    }, { 
        returnOriginal: false 
    }).then((result) => {
        console.log(result);
    }); 


    db.close();
}); 


