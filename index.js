const express = require('express');
const app =  express();

app.get('/', (req, res)=>{
    res.send('Hello worldssspm223!');
})

app.listen('8000', (req, res)=>{
    console.log('server is listening to port 8000')
});
