const backward = require('../models/backward-model')
const forward = require('../models/forward-model')
const central = require('../models/central-model')

getForward = async (req, res) => {
    await forward.find({}, (err, forwards) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!forwards.length) {
            return res
                .status(404)
                .json({ success: false, error: `Simson error` })
        }
        return res.status(200).json({ success: true, data: forwards })
    }).catch(err => console.log(err))
}

getBackward = async (req, res) => {
    await backward.find({}, (err, backwards) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!backwards.length) {
            return res
                .status(404)
                .json({ success: false, error: `Simson error` })
        }
        return res.status(200).json({ success: true, data: backwards })
    }).catch(err => console.log(err))
}

getCentral = async (req, res) => {
    await central.find({}, (err, centrals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!centrals.length) {
            return res
                .status(404)
                .json({ success: false, error: `Simson error` })
        }
        return res.status(200).json({ success: true, data: centrals })
    }).catch(err => console.log(err))
}

module.exports ={
    getBackward,
    getForward,
    getCentral
}