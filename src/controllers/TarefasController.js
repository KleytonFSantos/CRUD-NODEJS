const TarefaService = require('../services/TarefaService')

module.exports = {
    buscarTodas: async (req, res) => {
        let json = {error: '', result:[]};
        let tarefas = await TarefaService.buscarTodas();

        for (let i in tarefas) {
            json.result.push({
                nome: tarefas[i].nome,
                conteudo: tarefas[i].conteudo,
                data_de_criacao: tarefas[i].data_de_criacao,
                nome_autor: tarefas[i].nome_autor
               
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error: '', result:{}};

        let id = req.params.id;
        let tarefa = await TarefaService.buscarUm(id);

        if(tarefa) {
            json.result = tarefa;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        
        let json = {error: '', result:{}};
        
        let nome = req.body.nome;
        let conteudo = req.body.conteudo;
        let dataCriacao = req.body.data_de_criacao;
        let autor = req.body.nome_autor;

        if(nome && conteudo && dataCriacao && autor) {
            let TarefaId = await TarefaService.inserir(nome, conteudo, dataCriacao, autor);
            json.result = {
                id: TarefaId,
                nome,
                conteudo,
                dataCriacao,
                autor
                
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    editar: async (req, res) => {
        let json = {error: '', result:{}};

        let nome = req.params.nome;
        let dataCriacao = req.body.data_de_criacao;
        let autor = req.body.nome_autor;
        let conteudo = req.body.conteudo;

        if(nome && conteudo && dataCriacao && autor ) {
            await TarefaService.editar(nome, conteudo, dataCriacao, autor);
            json.result = {
                nome,
                conteudo,
                dataCriacao,
                autor
                
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    deletar: async (req,res) => {
        let json = {error:'', result: {}};

        await TarefaService.deletar(req.params.id, res.json(json));

    }
    }
