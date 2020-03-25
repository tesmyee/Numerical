const simson = require('../models/simson-model')
const comsimson = require('../models/comsimson-model')
const trapzeidel = require('../models/trapzeidel-model')
const comtrap = require('../models/comtrap-model')

getSimson = async (req, res) => {
    await simson.find({}, (err, simsons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!simsons.length) {
            return res
                .status(404)
                .json({ success: false, error: `Simson error` })
        }
        return res.status(200).json({ success: true, data: simsons })
    }).catch(err => console.log(err))
}

getComsimson = async (req, res) => {
    await comsimson.find({}, (err, comsimsons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comsimsons.length) {
            return res
                .status(404)
                .json({ success: false, error: `ComSimson error` })
        }
        return res.status(200).json({ success: true, data: comsimsons })
    }).catch(err => console.log(err))
}

getTrapzeidel = async (req, res) => {
    await trapzeidel.find({}, (err, trapzeidels) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!trapzeidels.length) {
            return res
                .status(404)
                .json({ success: false, error: `Trapzeidel error` })
        }
        return res.status(200).json({ success: true, data: trapzeidels })
    }).catch(err => console.log(err))
}

getComtrap = async (req, res) => {
    await comtrap.find({}, (err, comtraps) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comtraps.length) {
            return res
                .status(404)
                .json({ success: false, error: `Composite Trapzeidel error` })
        }
        return res.status(200).json({ success: true, data: comtraps })
    }).catch(err => console.log(err))
}


module.exports = {
    getSimson,
    getComsimson,
    getTrapzeidel,
    getComtrap
}