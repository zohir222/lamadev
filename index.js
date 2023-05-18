const express = require('express') ;

const app = express() ;

app.use(express.json()) ;

app.get("/test" , ( req , res )=>{
    res.json("its work ...!") ;
})

const userRoute = require('./routes/users') ;

app.use("/user" , userRoute ) ;

app.listen( process.env.PORT || 3010 , ()=> {
    console.log(`**********server runningn port 3010  *************`);
} )