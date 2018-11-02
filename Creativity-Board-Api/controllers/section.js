const express = require('express'),
  router = express.Router(),
  section = require('../models/section');

router.post('/create', function (req, res) {
    section.createSection(req.body, function (err, responce) {
        if (err) {
            res.status(400).json({ success: false, meaasge: 'Section Createation Fails', error: err });
            return;
        }
        if (Object.keys(responce).length > 0) {
            res.status(201).json({ success: true, meaasge: 'Section Created Successfully'});
        } else {
            res.status(400).json({ success: false, meaasge: 'Section Createation Fails' });
        }
    });
});

router.get('/get-section/:boardId', function (req, res) {
    section.getSection(req.params.boardId,function(err,responce){
        if(err) {
            res.status(400).json({success:false,error:err,message:'Error Occured'});
            return;
        }
        res.status(400).json({success:true,data:responce});
    });
});
module.exports = router;