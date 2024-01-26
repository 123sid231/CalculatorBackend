var express = require('express')
const { mongoose } = require('../services/mongodb')
const History = require('../schema/HistorySchema')
var router = express.Router()

router.post('/insertHistory', function (req, res) {
    let history = new History(req.body)
    history.save().then((resp) => {
        res.status(200).json({ success: true, data: resp })
    }).catch((err) => {
        res.status(500).json({ success: false, message: err?.message })
    })
})

router.get('/getHistory', function (req, res) {
    History.find().then((resp) => {
        res.status(200).json({ success: true, data: resp })
    }).catch((err) => {
        res.status(500).json({ success: false, message: err?.message })
    })
})

router.post('/deleteHistory', function (req, res) {
    History.findByIdAndDelete(req.body.id).then((resp) => {
        res.status(200).json({ success: true, data: resp })
    }).catch((err) => {
        res.status(500).json({ success: false, message: err?.message })
    })
})

module.exports = router;
