const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const store = require('./store');
const cors = require('cors');
//const auth = require('./auth');
//const checkID = require('./checkID');



app.use(cors);
app.use(bodyParser.json());


app.get('/tokensignin', function(req,res) {
    console.log(req.body)
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


app.listen(7556, () => {
    console.log('Server is running on port 7556');
});
