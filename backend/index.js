const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('test success');
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
