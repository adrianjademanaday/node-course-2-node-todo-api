var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
   text: {
       type: String
   }, 
   completed: {
       type: Boolean
   },  
   completedAt: {
       type: Number
   }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

var newTodo1 = new Todo({
    text: 'STRIDE Goals',
    completed: true,
    completedAt: 1234
})

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

newTodo1.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
    // console.log('Saved Todo1', doc); 
}, (err) => {
    console.log('Unable to save', err);
});

