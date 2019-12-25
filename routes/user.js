const express = require('express'); 

const router = express.Router();

router.get('/login', (req, res)=> {
    res.json({message:"hello we are on user/login"})
})

module.exports = router;