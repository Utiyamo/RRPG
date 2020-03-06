'use strict'

module.exports = (app) => {
    const login = require('../controller/Login');
    const home = require('../controller/Home');

    //Login
    app.post('/login', login.efetualogin);
    app.post('/login/createuser', login.criaUsuario);

    //Home
    app.get('/home/feed', home.getFeedNotice);
    app.put('/home/feed/modifyNotice', home.modifyNotice);
    app.post('/home/feed/addNotice', home.createNewNotice);
};