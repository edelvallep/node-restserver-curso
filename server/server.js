require('./config/config');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Using Node.js `require()`
const mongoose = require('mongoose');

const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')))

console.log(path.resolve(__dirname, '../public'));

//Configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true },
    (err, resp) => {
        if (err) {
            throw err;
        }

        console.log('Base de datos online');
    });

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto 300");
});