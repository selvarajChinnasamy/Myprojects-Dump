const express = require('express'),
  router = express.Router(),
  board = require('../models/board');

router.post('/create', function (req, res) {
    board.createBoard(req.body, function (err, responce) {
        if (err) {
            res.status(400).json({ success: false, meaasge: 'Board Createation Fails', error: err });
            return;
        }
        if (Object.keys(responce).length > 0) {
            res.status(201).json({ success: true, meaasge: 'Board Created Successfully', boardId: responce.insertId });
        } else {
            res.status(400).json({ success: false, meaasge: 'Board Createation Fails' });
        }
    });
});

router.get('/get-board/:userId', function (req, res) {
    board.getBoard(req.params.userId,function(err,responce){
        if(err) {
            res.status(400).json({success:false,error:err,message:'Error Occured'});
            return;
        }
        res.status(200).json({success:true,data:responce});
    });
});
module.exports = router;