const express = require('express');
const httpStatus = require('http-status');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/api/ping', (req, res) => {
    res.sendStatus(httpStatus.OK);
});

app.use('/api', routes);


app.listen(8000, err => {
    if (err) {
        console.log('Cannot Listen Server', err);
    }
    console.log("Server is running on port 3000");
});

module.exports = {
    app,
};