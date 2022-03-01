const conexao = require("../infroestrutura/conexao");
const chalk = require('chalk');
const moment = require('moment');
const res = require("express/lib/response");

class Atendimento{
    registrar(valores, res){

        const dataCadastro = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(valores.data, "DD/MM/YYYY").format('YYYY-MM-DD HH:MM:SS')
        const valoresDatados = {...valores, data, dataCadastro}

        const dataEhValida = moment(valores.data).isSameOrAfter(dataCadastro);
        const nomeEhvalido = valores.nome.length >= 5;

        const validar = [{
            nome: "data",
            validar: dataEhValida,
            mensagem: 'A data informada precisa ser maior que a data atual'
        },{
            nome: 'nome',
            validar: nomeEhvalido,
            mensagem: 'O nome precisa ter pelo menos 5 letras'
        }];

        const erros = validar.filter( item => !item.validar);
        const validaerro = erros.length;

            if(validaerro){
                console.log(erros.mensagem)
            }else{
                const sql = `INSERT INTO atendimentos SET ?`;
            conexao.query(sql, valoresDatados, (erro, resultado) => {
                if(erro){
                    res.status(400).json(erro);
                }else{
                    res.status(200).json(resultado);
                }
            })

        }
    }
    alterar(id, valores, res){
        const sql = 'UPDATE atendimentos SET ? WHERE id=?';
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format("YYYY-MM-DD HH:MM:SS")
        }
        
        
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })


    }
    deletar(id, res){
        const sql = `DELETE FROM atendimentos WHERE id=${id}`;

        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
        
    }
    buscartodos(res){
        const sql = 'SELECT * FROM atendimentos'
        conexao.query(sql, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })

    }
    buscarID(id, res){
        const sql = `SELECT * FROM atendimentos WHERE id= ${id}`;
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })

    }
}

module.exports = new Atendimento;