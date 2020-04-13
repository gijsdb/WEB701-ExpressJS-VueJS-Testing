const {Bid} = require('../models')

module.exports = {
    async addbid (req, res) {
      try {
        const bid = await Bid.create(req.body)
        res.send(bid.toJSON())
      } catch(err) {
        res.status(400).send({
            error: 'Failed to create bid'
        })
      }
    }
}