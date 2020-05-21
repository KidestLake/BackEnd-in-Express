const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
router.get('/', (req,res)=>{
    res.send('postuuu');

});
router.get('/specific', (req,res)=>{
    res.send('specific postuuu');

});
router.post('/', (req,res)=>{
    console.log(req.body);
    
})
module.exports = router; 