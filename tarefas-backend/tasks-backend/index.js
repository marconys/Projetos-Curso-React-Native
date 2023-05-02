// const express = require('express');
// const app = express(); opção mais especifica

const app = require('express')() // opção mais reduzida

const db = require('./config/db.js')

const consign = require('consign')
consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.db = db

app.listen(3000, () => {
    console.log('Backend Executando...');
});