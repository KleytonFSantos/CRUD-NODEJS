const express = require('express');
const router = express.Router();

const TarefasController = require('./controllers/TarefasController')

router.get('/tarefas', TarefasController.buscarTodas);
router.get('/tarefa/:id', TarefasController.buscarUm);
router.post('/tarefas', TarefasController.inserir);
router.put('/tarefas/:id', TarefasController.editar);
router.delete('/tarefas/:id', TarefasController.deletar);

module.exports = router;