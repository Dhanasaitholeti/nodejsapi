const express = require('express');
const router = express.Router()
const data = require("../data/kiet")

router.get("/",(req,res) => {
    res.json(data)
});

router.get('/student/:id',(req,res) => {
    data[req.params.id]?res.json(data[req.params.id]):(res.status(404).json({}))
})


module.exports = router;
