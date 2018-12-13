const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/User');

var userId = '6c10a3adae44ed4833aa4a28';

// User.find({
//     _id: userId
// }).then((users) => {
//     console.log('Users', users);
// });

// User.findOne({
//     _id: userId
// }).then((user) => {
//     console.log('User', user);
// });

// User.findById(userId).then((user) => {
//     if (!userId) {
//         return console.log('User not found');
//     }
//     console.log('User find by ID', user);
// });

// CHALLENGE ACCEPTED
User.findById('5c10a3adae44ed4833aa4a28').then((user) => {
    if (!user) {
        return console.log('Unable to find User');
    }
    
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
 

// var id = '5c11ebd9e4209618210cadd711';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
//     }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// Todo.findByIdAndUpdate(id, { text: 'Updated by Adrian'}).then((todo) => {
//     console.log('Todo by find and Update', todo)
// });