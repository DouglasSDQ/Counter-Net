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
idVotacao int primary key auto_increment,
fkUsuario int,
constraint fkUsuaio foreign key (fkUsuario) references usuario(idUsuario),
mapa varchar(45)
);

insert into mapa values 
(null, 'DustII'),
(null, 'Mirage'),
(null, 'Inferno'),
(null, 'Nuke'),
(null, 'Overpass'),
(null, 'Train'),
(null, 'Cache'),
(null, 'Cobblestone'),
(null,'Vertigo');


update mapa set nomeMapa = 'DustII' where idMapa = 1;



insert into voto values 
(2, 1, 'Mirage' ),
(3, 1, 'Train' ),
(4, 1, 'Overpass' );




select
(select count(*) from voto where mapa = 'Mirage') as 'Mirage',
(select count(*) from voto where mapa = 'Dust II') as 'Dust II',
(select count(*) from voto where mapa = 'Inferno') as Inferno,
(select count(*) from voto where mapa = 'Train') as Train,
(select count(*) from voto where mapa = 'Cobblestone') as Cobblestone,
(select count(*) from voto where mapa = 'Overpass') as Overpass,
(select count(*) from voto where mapa = 'Nuke') as Nuke,
(select count(*) from voto where mapa = 'Vertigo') as Vertigo,
(select count(*) from voto where mapa = 'Cache') as 'Cache';

select * from usuario;
select * from voto;
select * from mapa;



