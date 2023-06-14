create database counternet;
use counternet;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(150),
senha varchar(500)
);

alter table usuario modify column senha varchar(500);

create table mapa (
idMapa int primary key auto_increment,
nomeMapa varchar(45)
);


create table voto (
fkUsuario int,
constraint fkUsuaio foreign key (fkUsuario) references usuario(idUsuario),
fkMapas int,
constraint fkMapas foreign	key (fkMapas) references mapa(idMapa)
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
(null,'Vertigo');


select * from usuario;




