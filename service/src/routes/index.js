'use strict'

module.exports = (app) => {
    const login = require('../controller/Login');

    //Login
    app.get('/login', login.efetualogin);
};