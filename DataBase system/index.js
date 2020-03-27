const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const router = express.Router();

const app = express()


app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/', router);

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
  console.log('Server running on http://localhost:7556')
})