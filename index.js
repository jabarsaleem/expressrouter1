const express = require('express'),
    http = require('http');

const hostname = "localhost";

const port = 3000;
const app = express();

const bodyparser = require('body-parser');

const strouter = require('./routers/strouter');
const { use } = require('./routers/strouter');

const promorouter = require('./routers/promorouter');

const ltrouter = require('./routers/leaderrouter');



app.use(bodyparser.json());

app.use('/st', strouter);

app.use('/promo', promorouter);
app.use('/lt', ltrouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
});