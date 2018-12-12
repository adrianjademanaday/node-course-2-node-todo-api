var mongoose = require('mongoose');

// Creating Model for User
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// // create new instance of the User Model
// var user = new User({
//     email: '  adrianjade@gmail.com  '
// })

// // Save it 
// user.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save users', err);
// });

module.exports = {User};
