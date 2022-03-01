const Atendimento = require('../models/atendimento');

module.exports = app => {

    app.get('/', (req, res)=>{
        res.send(`<h1 align="center"> O SERVIDOR FOI INICIADO COM SUCESSO </h1></br>
        <h2 align="center">PASSOS DESTE PROJETO</h2></br>
        <p style=" max-width: 320px; text-align: center; border-radius: 30px; background-color: pink; padding: 25px; margin-left: auto; margin-right: auto " > Este é um texto exemplo de como rodar o html pelo servidor, estou no backend executando as tarefas que vão aparecer no navedor, estou amando muito fazer este tipo de aulas </p>`);
    })

    app.get('/atendimentos', (req, res) => {
        Atendimento.buscartodos(res);
    })
    app.get('/atendimentos/:id', (req, res) =>{
        const id = Number.parseInt(req.params.id);
        Atendimento.buscarID(id, res);
    })

    app.post('/atendimentos', (req, res) => {
        const valores = req.body;
        Atendimento.registrar(valores, res);
    })
    app.delete('/atendimentos/:id', (req, res) =>{
        const id = Number.parseInt(req.params.id);
        Atendimento.deletar(id, res);
    })
    app.patch('/atendimentos/:id', (req, res) => {
        const id = Number.parseInt(req.params.id);
        const valores = req.body;
        Atendimento.alterar(id, valores, res);
    })
}