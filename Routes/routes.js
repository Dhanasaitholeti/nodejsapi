const express = require('express');
const router = express.Router()
const data = require("../data/kiet")

router.get("/",(req,res) => {
//     res.set('Access-Control-Allow-Origin', '*')
    res.json(data)
});

router.get('/student/:id',(req,res) => {
//     res.set('Access-Control-Allow-Origin', '*')
    data[req.params.id]?res.json(data[req.params.id]):(res.status(404).json({}))
})


module.exports = router;
