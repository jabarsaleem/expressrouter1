const express = require('express'),
    http = require('http');

const hostname = "localhost";

const port = 3000;

const bodyparser = require('body-parser');

const strouter=require('./routers/strouter');


const app = express();

app.use(bodyparser.json());

app.use('/st', strouter);

app.get('/st/:stid', (req, res, next) => {


    res.end("it will show details of the student with ID numbder " + req.params.stid);

})

app.delete('/st/:stid', (req, res, next) => {


    res.end("it will delete a student with ID number " + req.params.stid);

});

app.post('/st/:stid', (req, res, next) => {

    res.statusCode = 403;
    res.end("this operation is invaild");

});
app.put('/st/:stid', (req, res, next) => {


    res.write("update the student with ID " + req.params.stid);
    res.end("updated the student with name " + req.body.name + "and the new details are " + req.body.details);
});



const server = http.createServer(app);

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
});