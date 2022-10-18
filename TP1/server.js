const express = require('express')
const app = express()
const api_search = "https://api.themoviedb.org/3/search/movie?api_key=a535455b5f0157b1298fce29df4a5b3c&query="
const axios = require('axios');
const cors = require('cors');

app.get('/films/:titre', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios.get(api_search+req.params.titre)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

app.get('/', (req,res) => {    
    res.send("Hello World");
    console.log("Hello World");
});

app.listen(8080, () => {  
    console.log("Listening on port 8080")       
})
