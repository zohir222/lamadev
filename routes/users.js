const express = require('express') ;
const Router = express.Router() ;

Router.get("/" , (req , res )=> {
    res.json("this is user ") ;
}) ;


module.exports = Router ;