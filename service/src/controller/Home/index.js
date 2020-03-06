'use strict'

const mongoose = require('mongoose');
const NoticeCards = require('../../model/NoticeCards');

class home{
    getFeedNotice(req, res, next){
        const Notice = NoticeCards;
        let select = Notice.find({isNotice: true}, (err, data) => {
            if(err){
                res.send(err);
                return next();
            }

            if(data){
                console.log(data);
                // res.json(data);
                // return next();
            }
        });
    }
    async createNewNotice(req, res, next){
        let validation = await validationNotice(req.body, true);
        
        if(validation.status === 200){
            const Notice = NoticeCards(req.body);
            Notice.save((err, object) => {
                if(err){
                    res.send(err);
                    return next();
                }

                res.json(object);
                return next();
            })
        }else{
            res.json(validation);
            return next();
        }
    }
    async modifyNotice(req, res, next){
        const Notice = NoticeCards;

        let validation = validationNotice(req.body, false);
        if(validation !== 200){
            res.json(validation);
            return next();
        }

        const options = {overwrite: true};
        Notice.findByIdAndUpdate({_id: req.body._id}, req.body, options, (err, data) => {
            if(err)
                throw err;

            if(data){
                res.json(data);
                return next();
            }
        })
    }
}

function validationNotice(body, isnew){
    const retorno = {
        status = 0,
        message = ''
    }
    
    if(body){
        if(!body.titulo){
            retorno.status = 400;
            retorno.message = 'Erro. Titulo da Noticia não localizado';
            return retorno;
        }
        else if(!body.autor){
            retorno.status = 400;
            retorno.message = 'Erro. Autor da Noticia não localizado.';
            return retorno;
        }
        else if(!body.href){
            retorno.status = 400,
            retorno.message = 'Erro. Referencia da Noticia não localizada.';
            return retorno;
        }
        else if(!body.img){
            retorno.status = 400,
            retorno.message = 'Erro. Imagem da Noticia não localizada';
            return retorno;
        }
        else if(!body.estilocard){
            retorno.status = 400,
            retorno.message = 'Erro, Estilização da Noticia não localizada.';
            return retorno;
        }
    }
    else{
        retorno.status = 400;
        retorno.message = 'Erro. Não foi localizado o corpo.';
        return retorno;
    }

    if(isnew){
        const Notice = NoticeCards;
        let select = Notice.findOne({href: body.href}, (err, data) => {
            if(err)
                throw err;
    
            if(data){
                retorno.status = 400;
                retorno.message = 'Erro. Referencia já registrada para outra Noticia';
                return retorno;
            }
        });
    
        let select2 = Notice.findOne({titulo: body.titulo}, (err, data) => {
            if(err)
                throw err;
    
            if(data){
                retorno.status = 400;
                retorno.message = 'Erro. Titulo já registrado para outra Noticia';
                return retorno;
            }
        });
    }
    
    retorno.status = 200;
    return retorno;
}

module.exports = new home();