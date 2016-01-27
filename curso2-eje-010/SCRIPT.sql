-- Creamos base de datos;
CREATE DATABASE prueba CHARACTER SET utf8 COLLATE utf8_spanish_ci;
-- Usamos;
USE prueba;

-- Nombre Tabla: tareas "TABLA PARA ALMACENAR LAS TAREAS"
CREATE TABLE tareas(
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(125) NOT NULL,
  descripcion TEXT,
  autor VARCHAR(125) DEFAULT NULL
)comment='Gestion de tareas.';

DELETE FROM `tareas`;

INSERT INTO `tareas` (`id`, `titulo`, `descripcion`, `autor`) VALUES
	(1, 'Mi Primera tarea', 'Estoy algo contento porque almacene mi primera tarea', 'David Rivero'),
	(2, 'Aprendiendo AngularJS con PHP', 'Estoy aprendiendo de como trabajar desde php a traves de angularJS', 'Leyla Pastran'),
	(3, 'Añadiendo la columna autores', 'Me encuentro añadiendo la columna autores para las tareas', 'David Rivero');

