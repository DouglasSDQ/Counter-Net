-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database counternet;
use counternet;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(150),
senha varchar(256)
);

create table mapa (
idMapa int primary key auto_increment,
nomeMapa varchar(45)
);

insert into mapa values 
(null, 'Dust II'),
(null, 'Mirage'),
(null, 'Inferno'),
(null, 'Nuke'),
(null, 'Overpass'),
(null, 'Train'),
(null, 'Cache'),
(null, 'Cobblestone'),
(null, 'Ancient'),
(null, 'Oficce'),
(null, 'Agency'),
(null, 'Austria'),
(null, 'Anubis'),
(null,'Vertigo');
