'use strict'

class Login{
    async efetualogin(req, res, next){
        const Users = require('../../model/Users');

        const params = req.params,
        response = {
            status: '',
            error: ''
        };
        if(params.username && params.password){
            const usuario = await Users.findOne({username: params.username}, (err) => {
                if(err){
                    res.send(err);
                    return next();
                }
            });
    
            if(usuario){
                if(usuario.password){
                    if(usuario.password === params.password){
                        response.status = 200;
                        res.json(response);
                        return next();
                    }
                    else{
                        response.status = 406;
                        error = `Senha incorreta`;

                        res.json(response);
                        return next();
                    }
                }else{
                    response.status = 409;
                    error = 'O usuário no banco não contém senha.'
                    res.json(response);
                    return next();
                }
            }
            else{
                response.status = 404;
                error = 'Usuário informado não encontrado';

                res.json(response);
                return next();
            }
        }
        else{
            res.send(400);
            return next();
        }
    }
}

module.exports = new Login();