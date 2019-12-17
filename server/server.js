import './config/config.js';

import express from 'express';
const app = express();
import { urlencoded, json } from 'body-parser';

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

app.get('/usuario', function(req, res) {
    res.json('get usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        });

    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
})

app.listen(3000, () => {
    console.log('Escuchando el puerto', process.env.PORT);
});