class Tabela{
    init(conexao){
        this.conexao = conexao;
        this.criarAtendimento();
    }
    criarAtendimento(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos 
        (id int NOT NULL AUTO_INCREMENT, 
         nome varchar(50) NOT NULL, 
         pet varchar(50) NOT NULL, 
         status varchar(20) NOT NULL, 
         servico varchar(20) NOT NULL, 
         data datetime NOT NULL, 
         dataCadastro datetime NOT NULL, 
         observacoes text, 
         PRIMARY KEY(id)
         )default charset utf8;`;

        this.conexao.query(sql, (erro)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log('TABELA CRIADA COM SUCESSO!!!');
            }
        })
    }
}

module.exports = new Tabela;