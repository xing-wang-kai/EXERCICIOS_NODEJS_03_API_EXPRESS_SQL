const customExpress = require('./config/customExpress');
const conexao = require('./infroestrutura/conexao');
const Tabela = require('./infroestrutura/tabela')


const chalk = require('chalk')

const app = customExpress();

conexao.connect((erro)=>{
    if(erro){
        console.log(chalk.bgRed.black(erro));
    }else{
        Tabela.init(conexao);
        app.listen(3002, ()=> {
            console.log(chalk.bgGreen.black('Servidor iniciado com sucesso na porta 3002!!'));
        })
    }
})


