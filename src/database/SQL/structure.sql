CREATE DATABASE  IF NOT EXISTS `mi_tech_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mi_tech_store`;
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

-- SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `colors_has_products`
--

DROP TABLE IF EXISTS `colors_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors_has_products` (
  `colors_id` int NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`colors_id`,`products_id`),
  KEY `fk_colors_has_products_products1_idx` (`products_id`),
  KEY `fk_colors_has_products_colors1_idx` (`colors_id`),
  CONSTRAINT `fk_colors_has_products_colors1` FOREIGN KEY (`colors_id`) REFERENCES `colors` (`id`),
  CONSTRAINT `fk_colors_has_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `features` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_features_products1_idx` (`products_id`),
  CONSTRAINT `fk_features_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images_products_idx` (`products_id`),
  CONSTRAINT `fk_images_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `discount` int DEFAULT '0',
  `highlight` tinyint NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` int NOT NULL,
  `size` varchar(100) NOT NULL,
  `weight` varchar(45) NOT NULL,
  `inSale` tinyint NOT NULL,
  `categories_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories1_idx` (`categories_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `userprofile`
--

DROP TABLE IF EXISTS `userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userprofile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` text NOT NULL,
  `phone` text NOT NULL,
  `avatar` text CHARACTER SET utf8mb4 NOT NULL,
  `region` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` varchar(45) NOT NULL,
  `address` text NOT NULL,
  `userprofile_id` int NOT NULL,
  `country_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_users_userprofile1_idx` (`userprofile_id`),
  KEY `fk_users_country1_idx` (`country_id`),
  CONSTRAINT `fk_users_country1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  CONSTRAINT `fk_users_userprofile1` FOREIGN KEY (`userprofile_id`) REFERENCES `userprofile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 21:56:06
