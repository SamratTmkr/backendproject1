const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log('middleware started ')
    next()
})
//create routes
//function means requestHandler which is middleware
app.get('/',function (req,res){
    res.send('Hello world eg nigi')
})

app.get("/profile", function(req, res, next){
    return next(new Error("something went wrong"))
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(3000)