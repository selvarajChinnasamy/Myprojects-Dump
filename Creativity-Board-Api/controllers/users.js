const express = require('express'),
  router = express.Router(),
  users = require('../models/users');
  config = require('../config');

router.post('/create', function (req, res) {
    users.createUser(req.body, function (err, responce) {
        if (err) {
            res.status(400).json({ success: false, meaasge: err.sqlMessage });
            return;
        }
        res.status(201).json({ success: true, meaasge: 'User Created Successfully' });
    });
});

router.post('/login', function (req, res) {
    users.userLogin(req.body, function (err, responce) {
        if (err){
            res.status(400).json({ success: false, meaasge: err });
        }else {
            if(responce.length === 1){
                res.status(200).json({ success: true, meaasge: 'User Loged In Successfully', userId: responce[0].userid });
            }else {
                res.status(400).json({ success: false, meaasge: 'User Login Err' });
            }
        }
    });
});

module.exports = router;