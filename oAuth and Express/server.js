
const express = require('express');
const app = express();
const passport = require('passport');
const auth = require('./auth');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const router = express.Router();

auth(passport);

app.use(passport.initialize());

app.use('/', router);

app.use(cookieSession({
    name: 'session',
    keys: ['123']
}));

app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set AKA logged in'
        });
    } else {
        res.cookie('token', '')
        res.sendFile(path.join('/index.html'));
        /*res.json({
            status: 'session cookie not set AKA logged out'
        });*/
    }
});

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

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/loggedIn',function(req,res){
    res.sendFile(path.join(__dirname+'/loggedIn.html'));
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});