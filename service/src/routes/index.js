'use strict'

module.exports = (app) => {
    const login = require('../controller/Login');

    //Login
    app.post('/login', login.efetualogin);
    app.post('/login/createuser', login.criaUsuario);
};