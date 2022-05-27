-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: vlashkia
-- ------------------------------------------------------
-- Server version	8.0.23

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

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `userID` char(36) NOT NULL,
  `userName` char(17) NOT NULL,
  `userDPName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userEmail` varchar(256) NOT NULL,
  `userPassword` char(60) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userID_UNIQUE` (`userID`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  UNIQUE KEY `userEmail_UNIQUE` (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES ('197b4ecf-0132-4eb5-abbe-ecf165b17e78','alololo907371','Ruby man FTW!?','khatino1765@gmail.com','$2b$14$R3t1F2VqS3NcpiafXkFJo.d.jeMECepsgT10Q8M3yQjJx7bWzPMf6'),('2cf248f4-f467-4270-8109-09aeaa9f1c70','emojilover','?????❤??❣????','nanithenanibruh@gmail.com','$2b$14$m5F0daKMoPN.oCsDPR9J2.RsT4Zap1nxdoHWgHJu26UV89.l6DT2y'),('45c78111-236a-4462-9726-1abb55a2ff09','vernyiusovich123','Dr. Swift','ititiu18206@student.hcmiu.edu.vn','$2b$14$kXet7w1HlDdugSbSgcRAo.mT6lZykTZNrVoyYXfKU73IjXZ.Y/V4O'),('575433b7-e3bd-4743-9fda-cc7df2fcb39b','daonguyen27_10','Chloe','ndqdao2710@gmail.com','$2b$14$ueE.mtzN0nAPVqPHSiQv7eJm2bokoqMT55TJz03XIsMeOEADrPJNO'),('6bf5ce5b-9aec-417e-b522-b327fd52eb28','zainey.en.zach','Kha Võ Junior','revengemultikill@gmail.com','$2b$14$XavDYK7X1554bKBih4tKXeX9V.82vMwItOI9ZWBsaJyTkp/glWlmC'),('8d6c1a34-fe1f-4939-b925-9fa12c0d74a5','Kosovo','Chris Fogle','mckinley56512@treat.com','$2b$14$FJUUJZ5EIVhr9TfeC0j/cOURLBxwewIyhGczbhYKBJLWddmSFAl/a'),('ac5a7ace-c856-42dc-b363-401005cbdbe7','vernyiusovich','Dr. Swift','ititiu18247@student.hcmiu.edu.vn','$2b$14$61vjlvzSY.GujIKEclGvV.wlbr6Q/sys6lBP9bc6AiOuX2KqtGEsW'),('c484f122-7651-426b-8467-061edf037291','New Zealand','Reuben Gilliam','mariette-phillip2@blades.com','$2b$14$53y2Lmr2t1VEraZrWfoI6OoHIozSEFp/9tEKHbB75zbkkS/dv2/0W'),('c69c0a45-a107-4b57-977f-d7ac755b3621','Slovenia','Jerrie Beauchamp','lonny-starnes41@hotmail.com','$2b$14$3.0bK/wHQ8UhAal/jCfQFOzUms2GPDYAWrUOzUSX65pb5lLUAZx7S'),('c8c8d5d2-9265-4b96-991c-2c130aad4c1b','Libya','Joelle Flowers','jewelmota7@gmail.com','$2b$14$oq3n4RSXwqKpqkjDRxOOyelKCaOpGcogkSAJ.vjG6LK4EtOa3Gqdy'),('d595e68b-1637-4aff-9e7a-7ec3ae2cb28e','javainternftw','Java lover hehe','oracleforall@oracle.com','$2b$14$ehoEZy17XXyL6jN2nxhJYOjZ9yAZNPA1rFq2LM30kSGI8YjeKuDui'),('dbf18e72-341b-4c54-9f7f-503867f7aa03','','','','$2b$14$aJcyaSF6I6L5ek75OpaZ5e6xekNLXM.lpGU4cFgtV0h.3e3Xq3Sha'),('e0bdcdc7-6c02-42a0-9ac2-c057d7e135cb','St Lucia','Sam Conway','kenna934@gmail.com','$2b$14$j0a3a99n/Ja7HhJJfwvww.xo7XrRofeKKX7lsykYIYqJipjRFTEzq');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 13:01:05
