//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// creat connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   // deleteMany
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });
   // deleteOne 
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

   // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result);
        // });


//EXERCISES
    // FOR DELETE MANY
    db.collection('Users').deleteMany({name: 'Jade'}).then((result) => {
        console.log(result);
    });

    // FOR DELETE USING FINDONEANDELETe USING THE _ID
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c0f7f5c1ab14092dc54ffea') 
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });








    //db.close();
}); 


