// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '2390505437645876', // your App ID
        'clientSecret'    : 'f2be395ab3e8ce8657d7b0aaebffbb0d', // your App Secret
        'callbackURL'     : 'https://localhost:3000/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },


    'googleAuth' : {
        'clientID'         : '1047934199254-6q5uoe1e5jio4bift3i143ecvto9gsi2.apps.googleusercontent.com',
        'clientSecret'     : 'm2j7p5bTDmdto2l_fdlP9QdY',
        'callbackURL'      : 'https://localhost:3000/auth/google/callback'
    }

};
