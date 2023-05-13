create table if not exists usuarios (
	id_usuario int primary key not null,
	nombre varchar(30),
	apellido varchar(30),
	correo varchar(40),
	contrasena varchar(20)
);

create table if not exists autores(
	id_usuario int primary key not null
);

create table tematicas(
	id_tematica serial primary key,
	nombre varchar(20)
);

create table editores(
	id_usuario int primary key not null
);


create table if not exists articulos(
	id_articulo serial primary key,
	editor_fk int,
	titulo varchar(40),
	resumen varchar(250),
	ruta varchar(100),
	constraint articulos_editor_fk foreign key(editor_fk)
	references editores(id_usuario) match simple
	on update no action
	on delete no action
);

create table autor_articulo(
	autor_fk int not null,
	articulo_fk int not null,
	fecha_presentacion date,
	constraint autor_articulo_autor_fk foreign key(autor_fk)
	references autores(id_usuario) match simple
	on update no action
	on delete restrict,
	constraint autor_articulo_articulo_fk foreign key(articulo_fk)
	references articulos(id_articulo) match simple
	on update no action
	on delete cascade
);

create table articulo_tematica(
	articulo_fk int,
	tematica_fk int,
	constraint articulo_tematica_articulo_fk foreign key(articulo_fk)
	references articulos(id_articulo) match simple
	on update no action
	on delete no action,
	constraint articulo_tematica_tematica_fk foreign key(tematica_fk)
	references tematicas(id_tematica) match simple
	on update restrict
	on delete restrict
);
