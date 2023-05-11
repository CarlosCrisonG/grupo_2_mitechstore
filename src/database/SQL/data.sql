-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: mitechstore.c7kociemno1b.us-east-2.rds.amazonaws.com    Database: mi_tech_store
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'computadoras'),(2,'celulares'),(3,'accesorios'),(4,'electrodomesticos'),(5,'cuidado personal');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'negro'),(2,'blanco'),(3,'gris'),(4,'rojo'),(5,'verde'),(6,'azul'),(7,'amarillo'),(8,'violeta'),(9,'rosado'),(10,'anaranjado');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colors_has_products`
--

LOCK TABLES `colors_has_products` WRITE;
/*!40000 ALTER TABLE `colors_has_products` DISABLE KEYS */;
INSERT INTO `colors_has_products` VALUES (1,1),(1,2),(1,3);
/*!40000 ALTER TABLE `colors_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Arg'),(2,'Bol'),(3,'Bra'),(4,'Chi'),(5,'Col'),(6,'Ecu'),(7,'Par'),(8,'Per'),(9,'Uru'),(10,'Ven');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (1,'Pantalla AMOLED HD de 1.43',1),(2,'117 Modos fitness',1),(3,'Dual-band GPS',1),(4,'Monitoreo All-day',1),(5,'12 días de duración de batería',1),(6,'Una gran pantalla AMOLED de 1,43',2),(7,'El cristal de zafiro* es extremadamente duro y resistente al desgaste',2),(8,'El Xiaomi Watch S1 incluye dos correas: una de cuero de primera calidad y una de fluorocarbono resistente a la suciedad.',2),(9,'Toda la unidad vibra para aumentar significativamente el poder de limpieza',3),(10,'Cuenta con microfibras para garantizar una penetración uniforme del agua',3),(11,'Las migas se aspiran en un instante',3);
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'xiaomi-reloj1-id1.jpg',1),(2,'xiaomi-reloj2-id1.jpg',1),(3,'xiaomi-reloj3-id1.jpg',1),(4,'xiaomi-reloj4-id1.jpg',1),(5,'xiaomi-reloj1-id2.png',2),(6,'xiaomi-reloj-id2.png',2),(7,'vacum1-id3.png',3),(8,'vacum2-id3.png',3),(9,'vacum3-id3.png',3);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Xiaomi Watch S1 Active','Pantalla HD de 1.43 pulgadas con mas de 200 pantallas de reloj. Diseño personalizable',151.00,10,1,'active',2020,'46.5 x 47.3 x 11 mm','36.3 g',1,3),(2,'Xiaomi Watch S1','Pantalla HD de 1.43 pulgadas. Cristal de zafiro. Caja de acero inoxidable. Correa de cuero',205.00,10,1,'active',2019,'46.5 x 47.3 x 11 mm','36.3 g',1,3),(3,'Vacuum-Mop 2 Pro','Con trapeado de vibración sónica de alta frecuencia.',510.00,50,0,'active',2019,'13.9 x 13.78 x 3.21 inches','36.3 g',1,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `userprofile`
--

LOCK TABLES `userprofile` WRITE;
/*!40000 ALTER TABLE `userprofile` DISABLE KEYS */;
INSERT INTO `userprofile` VALUES (1,'Comprador'),(2,'Vendedor'),(3,'Administrador');
/*!40000 ALTER TABLE `userprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Doe','johndoe@gmail.com','$2a$10$aMYLt2jnLEEQqP6kc2DOAOWAOSqv.l50TrDXVMUpIslN37rvmAw8G','149598249','defaultUser.jpg','Antioquia','Medellín','2700','calle falsa 123',1,5),(2,'Jorge','Rodríguez','jorgito@gmail.com','$2a$10$RYPAxH7L9lp7jm9FxMyOY.T05J9Fo2tbx3U/gvv.O7fctgJWRlVgO','176815218','defaultUser.jpg','Rio Negro','Cipolletti','8326','calle falsa 678',2,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-05 20:12:24
