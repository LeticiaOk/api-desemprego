const express = require('express');
const cors = require('cors');
const vagas = require('./vagas.json');
const empresas = require('./empresas.json'); 
const salarios = require('./salarios.json'); 
const path = require('path');
const app = express();
const PORT = 8080;
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/vagas', (req, res) => {
    res.json(vagas);
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/empresas', (req, res) => {
    res.json(empresas);
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/salarios', (req, res) => {
    res.json(salarios);
});


app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});