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
    },

    retrieveHop(req, res) {
        const {
            id
        } = req.params
        return knex
        .select('variety', 'amount', 'bitterness', 'sweetness', 'price')
        .from('hops')
        .where({
           id: `${id}`
        }).then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Hop with ID ${id} do not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
    }

}


  