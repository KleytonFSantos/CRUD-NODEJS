create database dbApiTarefas;

use dbApiTarefas;

create table tarefas (
codigo int primary key auto_increment,
nome varchar(30),
conteudo text(300),
data_de_criacao date,
nome_autor varchar(30)
);

insert into tarefas (nome, conteudo, data_de_criacao) value ('reuniao', 'reuniao pela manha', '15/10/2021', 'reinaldo');
insert into tarefas (nome, conteudo, data_de_criacao) value ('analise de dados', 'analise financeira', '10/10/2021', 'arthur');

select * from tarefas