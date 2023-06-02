-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-06-2023 a las 16:38:29
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mi_tech_store`
--

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Computadoras'),
(2, 'Celulares'),
(3, 'Accesorios'),
(4, 'Electrodomesticos'),
(5, 'Cuidado personal');

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'negro'),
(2, 'blanco'),
(3, 'gris'),
(4, 'rojo'),
(5, 'verde'),
(6, 'azul'),
(7, 'amarillo'),
(8, 'violeta'),
(9, 'rosado'),
(10, 'anaranjado');

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id`, `name`) VALUES
(1, 'Argentina'),
(2, 'Bolivia'),
(3, 'Brasil'),
(4, 'Chile'),
(5, 'Colombia'),
(6, 'Ecuador'),
(7, 'Paraguay'),
(8, 'Peru'),
(9, 'Uruguay'),
(10, 'Venezuela');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `highlight`, `model`, `year`, `size`, `weight`, `inSale`, `categories_id`) VALUES
(1, 'Xiaomi Watch S1 Active', 'Pantalla HD de 1.43 pulgadas con mas de 200 pantallas de reloj. Diseño personalizable', '151.00', 10, 1, 'active', 2020, '46.5 x 47.3 x 11 mm', '36.3 g', 1, 3),
(2, 'Xiaomi Watch S1', 'Pantalla HD de 1.43 pulgadas. Cristal de zafiro. Caja de acero inoxidable. Correa de cuero', '205.00', 10, 1, 'active', 2019, '46.5 x 47.3 x 11 mm', '36.3 g', 1, 3),
(3, 'Vacuum-Mop 2 Pro', 'Con trapeado de vibración sónica de alta frecuencia.', '510.00', 50, 0, 'active', 2019, '13.9 x 13.78 x 3.21 inches', '36.3 g', 1, 3);

--
-- Volcado de datos para la tabla `colors_has_products`
--

INSERT INTO `colors_has_products` (`colors_id`, `products_id`) VALUES
(1, 1),
(1, 2),
(1, 3);

--
-- Volcado de datos para la tabla `features`
--

INSERT INTO `features` (`id`, `name`, `products_id`) VALUES
(1, 'Pantalla AMOLED HD de 1.43', 1),
(2, '117 Modos fitness', 1),
(3, 'Dual-band GPS', 1),
(4, 'Monitoreo All-day', 1),
(5, '12 días de duración de batería', 1),
(6, 'Una gran pantalla AMOLED de 1,43', 2),
(7, 'El cristal de zafiro* es extremadamente duro y resistente al desgaste', 2),
(8, 'El Xiaomi Watch S1 incluye dos correas: una de cuero de primera calidad y una de fluorocarbono resistente a la suciedad.', 2),
(9, 'Toda la unidad vibra para aumentar significativamente el poder de limpieza', 3),
(10, 'Cuenta con microfibras para garantizar una penetración uniforme del agua', 3),
(11, 'Las migas se aspiran en un instante', 3);

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `products_id`) VALUES
(1, 'xiaomi-reloj1-id1.jpg', 1),
(2, 'xiaomi-reloj2-id1.jpg', 1),
(3, 'xiaomi-reloj3-id1.jpg', 1),
(4, 'xiaomi-reloj4-id1.jpg', 1),
(5, 'xiaomi-reloj1-id2.png', 2),
(6, 'xiaomi-reloj-id2.png', 2),
(7, 'vacum1-id3.png', 3),
(8, 'vacum2-id3.png', 3),
(9, 'vacum3-id3.png', 3);

--
-- Volcado de datos para la tabla `userprofile`
--

INSERT INTO `userprofile` (`id`, `name`) VALUES
(1, 'Comprador'),
(2, 'Vendedor'),
(3, 'Administrador');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`, `avatar`, `region`, `city`, `zip`, `address`, `userprofile_id`, `country_id`) VALUES
(1, 'John', 'Doe', 'johndoe@gmail.com', '$2a$10$aMYLt2jnLEEQqP6kc2DOAOWAOSqv.l50TrDXVMUpIslN37rvmAw8G', '149598249', 'defaultUser.jpg', 'Antioquia', 'Medellín', '2700', 'calle falsa 123', 1, 5),
(2, 'Jorge', 'Rodríguez', 'jorgito@gmail.com', '$2a$10$RYPAxH7L9lp7jm9FxMyOY.T05J9Fo2tbx3U/gvv.O7fctgJWRlVgO', '176815218', 'defaultUser.jpg', 'Rio Negro', 'Cipolletti', '8326', 'calle falsa 678', 2, 1),
(3, 'Juan', 'Pérez', 'juan.perez@example.com', '$2a$10$uieRfLHEFIRtMjQtvFuq5.XZ3RQfZVlVKB7B8v3vXuq2HtB9hKsUu', '123456789', 'defaultUser.jpg', 'Antioquia', 'Medellín', '2700', 'calle falsa 123', 1, 1),
(4, 'María', 'López', 'maria.lopez@example.com', '$2a$10$ds6P4b1R2R.s6Yer2O7jq.UXDAI0dmeAdgRIZzn6fyWZ5OnlCMC7q', '987654321', 'defaultUser.jpg', 'Rio Negro', 'Cipolletti', '8326', 'calle falsa 456', 2, 2),
(5, 'Luis', 'González', 'luis.gonzalez@example.com', '$2a$10$KjZId4Nedf8X0r5f8v2Qsul.e1H6.c3S0YCV45z8sV0BEIw4sxSyq', '789456123', 'defaultUser.jpg', 'Buenos Aires', 'La Plata', '1900', 'calle falsa 789', 1, 3),
(6, 'Ana', 'García', 'ana.garcia@example.com', '$2a$10$LiXaSRrcrFTXBkZ5HIEc/.ma3g7.WBOeDv8Pl5xwT2/M5WE2I9bc.', '654321987', 'defaultUser.jpg', 'São Paulo', 'São Paulo', '4534', 'calle falsa 987', 2, 4),
(7, 'Carlos', 'Martínez', 'carlos.martinez@example.com', '$2a$10$K4RvhugyzSYGqtbwWun44.l2vmwOSU.xEDiG5aY3AxyY.DSN5YIkC', '987123654', 'defaultUser.jpg', 'Antioquia', 'Envigado', '2300', 'calle falsa 654', 1, 5),
(8, 'Andrés', 'Gómez', 'andres.gomez@example.com', '$2a$10$ZxkjB0x.Pjz0xqqjg8QRIOfe5NOXj2V86AbL2QoOhIiooO.GXrlEa', '987654321', 'defaultUser.jpg', 'Valparaíso', 'Viña del Mar', '2520', 'calle falsa 456', 2, 2),
(9, 'María', 'Sánchez', 'maria.sanchez@example.com', '$2a$10$3UMtkQsvx66dN8Z7edS7ouYoefv.zfMXLHgsCWeTCI4J2pVRW9s3m', '789456123', 'defaultUser.jpg', 'Buenos Aires', 'Mar del Plata', '7600', 'calle falsa 789', 1, 3),
(10, 'Sofía', 'López', 'sofia.lopez@example.com', '$2a$10$L/.u5jxiz9zsyHQBEWZUXeYp.ZqNopZBc4Dg7f0.GVyU/D1sRMT6.', '654321987', 'defaultUser.jpg', 'São Paulo', 'Campinas', '1300', 'calle falsa 987', 2, 4),
(11, 'Laura', 'Hernández', 'laura.hernandez@example.com', '$2a$10$tU7ZGvB0JQpVtx8I7q2Cl.kdy8PA4ncrBpMFOj.7AL/q/xxSp2WGS', '456789123', 'defaultUser.jpg', 'San José', 'San José', '1010', 'calle falsa 321', 2, 8),
(12, 'Diego', 'Rodríguez', 'diego.rodriguez@example.com', '$2a$10$CpEeZy2lfWZpUfJw21Y6ae6ZdJhQPEgMHCGyVYXbRjWBGkVZdL4Ou', '987654321', 'defaultUser.jpg', 'Valparaíso', 'Valparaíso', '2340', 'calle falsa 111', 1, 6),
(13, 'Fernanda', 'Martínez', 'fernanda.martinez@example.com', '$2a$10$OwKfABzhQxyQew6Ge7K5Wubu1vWxJe.lZxguVKQp9Z/tKG/nrgSFS', '789456123', 'defaultUser.jpg', 'Buenos Aires', 'Bahía Blanca', '8000', 'calle falsa 222', 2, 7),
(14, 'Carlos', 'Fernández', 'carlos.fernandez@example.com', '$2a$10$BpExeZC3/EJdyVQ4iv.4LOt0R1yz/VXv7aOJqSgk3IRghv1G6FS8K', '654321987', 'defaultUser.jpg', 'São Paulo', 'Sorocaba', '1000', 'calle falsa 333', 1, 8),
(15, 'Mariana', 'López', 'mariana.lopez@example.com', '$2a$10$G3AS5EkWpl9bk0bACqlVgeYz3sE9dRHGdFtWOFABmBw2fcTVt5nRq', '987123654', 'defaultUser.jpg', 'Antioquia', 'Itagüí', '0540', 'calle falsa 444', 2, 9);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
