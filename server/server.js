const express = require('express');
require('./config/config');

const app = express();
const bodyParser = require('body-parser');

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.write('Rest Server');
    res.end();
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id
    })
});

app.post('/user', (req, res) => {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'name required'
        });
    } else {
        res.json({
            body
        });
    }
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id
    })
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id
    })
});

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${ process.env.PORT }!`));