const knex = require('knex')(require('./knexFile'))
module.exports = {
    addHops({ variety, amount, bitterness, sweetness, price }) {
        console.log(`added ${amount} of Hop ${variety} with bitterness of ${bitterness} and sweetness of ${sweetness} at a price of ${price}`)
        return knex('hops').insert({
        variety,
        amount,
        bitterness,
        sweetness,
        price
      })
    },
    retrieveHops() {
        return knex('hops').select('*');
    }
}

  