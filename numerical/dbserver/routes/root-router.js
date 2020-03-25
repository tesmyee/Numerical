const express = require('express')

const RootCtrl = require('../controllers/root-ctrl')
const IntegralCtrl = require('../controllers/integral-ctrl')
const DiffCtrl = require('../controllers/diff-ctrl')

const router = express.Router()

router.get('/bisections', RootCtrl.getBisection)
router.get('/newton',RootCtrl.getNewton)
router.get('/onepoint',RootCtrl.getOnepoint)
router.get('/secant',RootCtrl.getSecant)
// router.get('/taylor',RootCtrl.getTaylor
router.get('/simson',IntegralCtrl.getSimson)
router.get('/comsimson',IntegralCtrl.getComsimson)
router.get('/trapzeidel',IntegralCtrl.getTrapzeidel)
router.get('/comtrap',IntegralCtrl.getComtrap)
router.get('/backward',DiffCtrl.getBackward)
router.get('/forward',DiffCtrl.getForward)
router.get('/central',DiffCtrl.getCentral)

module.exports = router