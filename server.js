
// Importando express
const express = require('express');
const app = express();

// Importando o express-session
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Trabalhando com as renderização dos arquivos html
app.set('view engine', 'ejs');
app.use(express.static('./views/public'));

// A nossa senha
app.use(session({
    secret: 'M/c-Y6tP[Hqg^Ub%',
    resave: false,
    saveUninitialized: false
}));

module.exports = app;