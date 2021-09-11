const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');




app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000');
});