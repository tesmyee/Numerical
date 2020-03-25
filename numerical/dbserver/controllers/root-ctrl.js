
const bisection = require('../models/bisection-model')
const newton = require('../models/newton-model')
const onepoint = require('../models/onepoint-model')
const secant = require('../models/secant-mdel')
const taylor = require('../models/taylor-model')

getBisection = async (req, res) => {
    await bisection.find({}, (err, bisections) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!bisections.length) {
            return res
                .status(404)
                .json({ success: false, error: `Bisection error` })
        }
        return res.status(200).json({ success: true, data: bisections })
    }).catch(err => console.log(err))
}

getNewton = async (req, res) => {
    await newton.find({}, (err, newtons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!newtons.length) {
            return res
                .status(404)
                .json({ success: false, error: `Newton error` })
        }
        return res.status(200).json({ success: true, data: newtons })
    }).catch(err => console.log(err))
}

getOnepoint = async (req, res) => {
    await onepoint.find({}, (err, onepoints) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!onepoints.length) {
            return res
                .status(404)
                .json({ success: false, error: `Onepoint error` })
        }
        return res.status(200).json({ success: true, data: onepoints })
    }).catch(err => console.log(err))
}

getSecant = async (req, res) => {
    await secant.find({}, (err, secants) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!secants.length) {
            return res
                .status(404)
                .json({ success: false, error: `Secant error` })
        }
        return res.status(200).json({ success: true, data: secants })
    }).catch(err => console.log(err))
}

getTaylor = async (req, res) => {
    await taylor.find({}, (err, taylors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!taylors.length) {
            return res
                .status(404)
                .json({ success: false, error: `Taylor error` })
        }
        return res.status(200).json({ success: true, data: taylors })
    }).catch(err => console.log(err))
}



module.exports = {
    getBisection,
    getNewton,
    getOnepoint,
    getSecant,
    getTaylor
}
