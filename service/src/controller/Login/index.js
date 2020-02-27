'use strict'

const Users = require('../../model/Users')

class Login{
    async efetualogin(req, res, next){
        const params = req.body,
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
                        response.error = `Senha incorreta`;

                        res.json(response);
                        return next();
                    }
                }else{
                    response.status = 409;
                    response.error = 'O usuário no banco não contém senha.'
                    res.json(response);
                    return next();
                }
            }
            else{
                response.status = 404;
                response.error = 'Usuário informado não encontrado';

                res.json(response);
                return next();
            }
        }
        else{
            res.sendStatus(400);
            return next();
        }
    }

    async criaUsuario(req, res, next){
        const params = req.body,
        response = {
            status: '',
            error: ''
        };

        const validation = await validationUser(params);

        switch(validation){
            case 1:
                break;

            case 2:
                response.status = 400;
                response.error = 'Email já cadastrado';
                res.json(response);
                return next();

            case 3:
                response.status = 400;
                response.error = 'Username já cadastrado';
                res.json(response);
                return next();

            default:
                response.status = 500;
                response.error = '';
                res.json(response);
                return next();
        }

        const newuser = Users(params);
        
        newuser.save((err, object) => {
            if(err){
                res.send(err);
                return next();
            }

            res.json(object);
            return next();
        });
    }
}

function validationUser(body){
    const uusername = body.username,
          uemail    = body.email;

    const continuar = false;

    const result = Users.findOne({email: uemail}, (err, data) => {
        if(err)
            throw err;
        
        if(data)
            return 2;
                
    });

    const result1 = Users.findOne({username: uusername}, (err, data) => {
        if(err)
            throw err;

        if(data)
            return 3;
    })

    return 1;

}

module.exports = new Login();