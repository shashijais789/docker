const express = require("express");
const redis= require("redis");

const app = express();
const client = redis.createClient({
    host: 'redis-server', //service defined in the 
    port: 6379   //default port for redis
});
client.set('visits', 0);

app.get('/', (req, res)=>{
    client.get("visits", (err, count)=>{

        let noOfVisits = parseInt(count)+1;
        res.send('No. of visits is: ' + noOfVisits);
        client.set('visits', noOfVisits);

    });
});

app.listen(8080, ()=>{
    console.log('App started. Listening at port 8080.');
});