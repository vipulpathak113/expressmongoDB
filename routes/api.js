const express = require('express');

const router = express.Router();
const Yoda = require('../models/yoda');

router.get('/yoda', function (req, res, next) {
    res.send({ type: 'GET' })

})

router.post('/yoda', function (req, res, next) {
    Yoda.findOne({ number: req.body.number }, function (err, yoda) {
        if (yoda) {
            return res.send("User Already Exists")
        }
        else {
            Yoda.create(req.body).then(function (yoda) {
                res.send(yoda);
            }).catch(next);
        }
    })


})

router.put('/yoda/:id', function (req, res, next) {
    Yoda.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (yoda) {
        res.send(yoda)
    })

})

router.delete('/yoda/:id', function (req, res, next) {
    Yoda.findByIdAndRemove({ _id: req.params.id }, function (err, yoda) {
        if (yoda == null) {
            return res.status(403).send("Id does not exists");
        }

        return res.status(200).send("Element Deleted Successfully");
    });

})

module.exports = router;