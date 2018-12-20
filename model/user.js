// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

const Schema=mongoose.Schema;

// define the schema for our user model
var userSchema = mongoose.Schema({
    name:{type: String, required: false},
    surname:{type: String, required: false},
    username:{type:String,required:false,unique:true},
    about:{type: String, required: false},
    gender:{type: String, required: false},
    lang:{type: String, required: false},
    country:{type: String, required: false},
    imgUrl:{type: String, default: '/images/empty_profile.png' },
    birthday:{type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now},
    role:{ type: Boolean, default: false },
    block:{ type: Boolean, default: false },
    email:{type:String,required:false,unique:true},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    local            : {
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
    },
    google           : {
        id           : String,
        token        : String,
        name         : String
    }


});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);
