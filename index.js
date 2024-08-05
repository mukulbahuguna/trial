require('dotenv').config();

const express = require('express');
const app = express();



app.get('/', (req,res)=>{
res.send("this is a home page")
})


app.get('/trial', (req, res) => {
    res.send("this is a trial backend development app")
})


app.get('/twitter', (req,res) => {
    res.send("www.twitter.com/mukulbahuguna")
})

app.listen(process.env.PORT, () => {
    console.log(`backend app listening on port ${PORT}`)
})