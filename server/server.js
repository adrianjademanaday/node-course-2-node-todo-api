var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
   text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
   }, 
   completed: {
       type: Boolean,
       default: false
   },  
   completedAt: {
       type: Number,
       default: null
   }
});

// Creating Model for User
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// create new instance of the User Model
var user = new User({
    email: '  adrianjade@gmail.com  '
})

// Save it 
user.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save users', err);
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// User
// email - require it - trim it - set type - set min length of 1

// var newTodo1 = new Todo({
//     text: true
// });

// newTodo1.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2))
//     // console.log('Saved Todo1', doc); 
// }, (err) => {
//     console.log('Unable to save', err);
// });

