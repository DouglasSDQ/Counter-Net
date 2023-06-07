create database counternet;
use counternet;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(150),
senha varchar(256)
);

alter table usuario modify column senha varchar(256);

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

select * from usuario;




