// Trigger de creación de autores a través del usuarios
LANGUAGE PLPGSQL
AS $$
BEGIN
	INSERT INTO autores (id_usuario) 
	VALUES (NEW.id_usuario);
	RETURN NEW;
END;
$$;

drop function crear_autor_trigger_func();

CREATE TRIGGER generar_autor
AFTER INSERT
ON usuarios
FOR EACH ROW
EXECUTE PROCEDURE crear_autor_trigger_func();

drop trigger if exists generar_autor on usuarios;

delete from usuarios;
//-----------------------------------------------