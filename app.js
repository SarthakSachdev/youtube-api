const express = require('express');
const app = express();

let youtubeId = "";

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