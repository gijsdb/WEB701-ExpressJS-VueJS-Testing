const {Hop} = require('../models')

module.exports = {
    async addhop (req, res) {
      try {
        const hop = await Hop.create(req.body)
        res.send(hop.toJSON())
      } catch(err) {
        res.status(400).send({
            error: 'Theres an error'
        })
      }
    },
    async retrievehops (req, res) {
      try {
        await Hop.findAll().then(function (hops) {
          res.json(hops)
      });
      } catch(err) {
        res.status(400).send({
          error: 'Theres an error'
        })
      }
    }
}