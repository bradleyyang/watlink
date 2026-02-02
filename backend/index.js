const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT;

const middleware = function (req, res, next) {
    console.log('middleware function ran');
    next();
};

app.use(middleware);

app.get('/', (req, res) => {
    res.send('test success');
});

app.get('/home', (req, res) => {
    res.json({ message: 'hello' });
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

