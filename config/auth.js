// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : process.env.FBC, // your App ID
        'clientSecret'    : process.env.FBS, // your App Secret
        'callbackURL'     : 'https://localhost:3000/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },


    'googleAuth' : {
        'clientID'         : process.env.GOC,
        'clientSecret'     : process.env.GOS,
        'callbackURL'      : 'https://localhost:3000/auth/google/callback'
    }

};
