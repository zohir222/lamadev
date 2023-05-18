const express = require('express') ;

const app = express() ;

app.use(express.json()) ;

app.get("/" , ( req , res )=>{
    res.json("its work ...!") ;
})



app.listen( process.env.PORT || 3011 , ()=> {
    console.log(`**********server runningn port 3011  *************`);
} )