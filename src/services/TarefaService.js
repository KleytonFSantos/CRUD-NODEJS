const db = require('../db');

module.exports = {
    buscarTodas: () => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM tarefas', (error, results)=>{
                if (error) { rejeitado(error); 
                return; }
                aceito(results);

            })
        }) 
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM tarefas WHERE id = ?', [id], (error, results)=>{
                if (error) { rejeitado(error);
                return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            })
        })
    },

    inserir: (nome, conteudo, dataCriacao, autor) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO tarefas (nome, conteudo, data_de_criacao, nome_autor) VALUES (?, ?, ?, ?)', [nome, conteudo, dataCriacao, autor], (error, results)=>{
                if (error) { rejeitado(error);
                return; }
                aceito(results.insertNome);
            
            })
        })
    },

    editar: (nome, conteudo, dataCriacao, autor) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE tarefas SET conteudo = ?, data_de_criacao = ?, nome_autor = ? WHERE nome = ?',  [ conteudo, dataCriacao, autor, nome], (error, results)=>{
                if (error) { rejeitado(error);
                return; }
                aceito(results)
            
            })
        })
    },

    deletar: (id) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM tarefas WHERE id = ?', [id], (error, results)=>{
                if (error) { rejeitado(error); 
                return; }
                aceito(results);

            })
        }) 
    }
};