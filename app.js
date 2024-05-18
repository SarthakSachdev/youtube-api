const express = require('express');
const app = express();

let youtubeId = "";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // const allowedOrigins = ['http://localhost:3000', 'http://gamebrag.onrender.com', 'https://gamebrag.onrender.com'];
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)) {
    //      res.setHeader('Access-Control-Allow-Origin', origin);
    // }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
  });
app.use(express.json())


app.get('/', (req,res) => {
    res.setHeader('content-type', 'text/json');
    res.send({"id" : `${youtubeId}`});
})

app.post('/', (req,res) => {
    const {id} = req.body;
    youtubeId = id;
    res.send({"id" : `${youtubeId}`})
})


app.listen(5000, () => 
{
    console.log("Listening on port 5000");
})