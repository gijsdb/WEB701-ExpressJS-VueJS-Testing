// Setting up required constants
const express = require('express');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')
const store = require('./store')
const auth = require('./auth');
const cookieSession = require('cookie-session');
const checkID = require('./checkID')

// Set auth to use passport.js
auth(passport);
// Intialize passport
app.use(passport.initialize());

// Mounts middleware to directory path
app.use(express.static(path.join(__dirname,"public")));
app.use('/', router);
app.use(bodyParser.json())
app.use(cookieParser());

// Set application to use cookies
app.use(cookieSession({
    name: 'session',
    keys: ['123']
}));

// When visiting / if the user has a cookie they are logged in
app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.sendFile(path.join('/public/marketplace.html'));
        /*
        res.json({
            status: 'session cookie set AKA logged in'
        });
        */
    } else {
        res.cookie('token', '')
        res.sendFile(path.join('/public/index.html'));
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
app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/marketplace');
    }
);

// Ensure user can only access loggedIn.html once they have logged in
app.get('/marketplace',(req, res) => {
    if(req.session.token) {
        res.cookie('token', req.session.token);
        res.sendFile(path.join(__dirname+'/public/marketplace.html'));
    } else {
        res.sendFile(path.join(__dirname+'/public/fail.html'));
    }
})

app.get('/addproduct',(req, res) => {
    if(req.session.token) {
        res.cookie('token', req.session.token);
        res.sendFile(path.join(__dirname+'/public/addproduct.html'));
    } else {
        res.sendFile(path.join(__dirname+'/public/fail.html'));
    }
})

app.get('/buyproduct',(req, res) => {
    if(req.session.token) {
        res.cookie('token', req.session.token);
        res.sendFile(path.join(__dirname+'/public/buyproduct.html'));
    } else {
        res.sendFile(path.join(__dirname+'/public/fail.html'));
    }
})

app.get('/retrieve/:id', function(req, res) {
    store.retrieveHop(req, res).then((hop) =>
        res.json(hop)
    );
})

app.get('/retrieve', function (req, res) {
    store.retrieveHops().then((hop) => 
        res.json(hop)
    );
   
})

app.post('/addhop', (req, res) => {
  store.addHops({
      variety: req.body.variety,
      amount: req.body.amount,
      bitterness: req.body.bitterness,
      sweetness: req.body.sweetness,
      price: req.body.price,
    })
    .then(() => res.sendStatus(200))
})

// When at /logout clear session and log out user
app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

// Show index.html on load
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.listen(7556, () => {
    console.log('Server is running on port 7556');
});