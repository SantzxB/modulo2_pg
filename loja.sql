create database Loja;-- Comando pra criar o banco 
use Loja;

create table Clientes (
idcliente int primary key auto_increment,
nome varchar(100) not null,
email varchar(100),
cidade varchar (45) not null);

insert into Clientes (nome,email,cidade)
values ('João','joao@gmail.com','Salvador'),
('Edieno','edieno@gmail.com','Salvador'),
('Julia','julia@email.com','Salvador');

insert into Clientes (nome,cidade)
values ('Francisco', 'Jacobina');

select * from Clientes;

delete from Clientes
where idcliente =3;

update Clientes
set nome ='Paulo',
email = 'paulo@gmail.com',
cidade = 'Feira de Santana'
where idcliente = 5;

alter table Clientes
modify cidade varchar(100);

alter table Clientes
add idade int not null;

alter table Clientes
add telefone int not null;

alter table Clientes
drop column telefone;

select * from Clientes;

drop database Loja;