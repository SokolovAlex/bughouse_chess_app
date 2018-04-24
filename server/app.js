const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

const boot = require('./boot');
const routerApi = require('./routes');
const config = require('./config');

const port = config.port;
const app = express();

boot();

app.use(cors())

app.use(bodyParser.json());

app.use('/api', routerApi());

app.listen(port, () => {
    console.log(`Application api starting on port ${port}!`);
});