var express = require('express');
var router = express.Router();
const morgan = require('morgan');

router.use(morgan('dev'));
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 
 
module.exports = router; 