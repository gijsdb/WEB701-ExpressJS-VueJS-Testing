
// Setting up required constants
const express = require('express');
const app = express();
const passport = require('passport');
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const router = express.Router();

// Set auth to use passport.js
auth(passport);

// Intialize passport
app.use(passport.initialize());

// Mounts middleware to directory path
app.use('/', router);

// Set application to use cookies
app.use(cookieSession({
    name: 'session',
    keys: ['123']
}));

app.use(cookieParser());

// When visiting / if the user has a cookie they are logged in
app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.sendFile(path.join('/loggedIn.html'));
        /*
        res.json({
            status: 'session cookie set AKA logged in'
        });
        */
    } else {
        res.cookie('token', '')
        res.sendFile(path.join('/index.html'));
        /*res.json({
            status: 'session cookie not set AKA logged out'
        });*/
    }
});

// Provides some information about user with predefined scope set in Google console
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

// Sets token returned by Google
app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/loggedIn');
    }
);

// Ensure user can only access loggedIn.html once they have logged in
app.get('/loggedIn',(req, res) => {
    if(req.session.token) {
        res.cookie('token', req.session.token);
        res.sendFile(path.join(__dirname+'/loggedIn.html'));
    } else {
        res.json({
            status: 'session cookie not set AKA logged out'
        });
    }
   
})

// When at /logout clear session and log out user
app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

// Show index.html on load
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});