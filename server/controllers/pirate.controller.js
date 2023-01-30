const Pirate = require('../models/pirate.model')


// testApi
module.exports.testApi = (req, res) => {
    res.json({Status: 'This is a test'})
}


// addPirate
module.exports.addPirate = (req, res) => {
    const newPirate = req.body
    Pirate.create(newPirate)
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err))
}

// display allPirates
module.exports.allPirates = (req, res) => {
    Pirate.find().sort({name: 1})
    .then(pirates => res.json(pirates))
    .catch(err => res.json(err))
}

// display onePirate
module.exports.onePirate = (req, res) => {
    const idFromParams = req.params.id
    Pirate.findOne({_id: idFromParams})
    .then(onepirate => res.json(onepirate))
    .catch(err => res.json(err))
}

// updatePirate
module.exports.updatePirate = (req, res) => {
    const idfromParams = req.params.id
    const newValue = req.body
    Pirate.findOneAndUpdate({_id: idfromParams}, newValue, {new: true, runValidators: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.status(400).json(err))
}


// deletePirate
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}




