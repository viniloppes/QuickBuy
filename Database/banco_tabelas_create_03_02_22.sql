-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.27 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando estrutura para tabela saleswebmvcappdb.departament
CREATE TABLE IF NOT EXISTS `departament` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` longtext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela saleswebmvcappdb.departament: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `departament` DISABLE KEYS */;
REPLACE INTO `departament` (`Id`, `Name`) VALUES
	(1, 'Computers'),
	(2, 'Electronics'),
	(3, 'Fashion'),
	(4, 'Books');
/*!40000 ALTER TABLE `departament` ENABLE KEYS */;

-- Copiando estrutura para tabela saleswebmvcappdb.salesrecord
CREATE TABLE IF NOT EXISTS `salesrecord` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Date` datetime(6) NOT NULL,
  `Amount` double NOT NULL,
  `Status` int NOT NULL,
  `SellerId` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_SalesRecord_SellerId` (`SellerId`),
  CONSTRAINT `FK_SalesRecord_Seller_SellerId` FOREIGN KEY (`SellerId`) REFERENCES `seller` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela saleswebmvcappdb.salesrecord: ~30 rows (aproximadamente)
/*!40000 ALTER TABLE `salesrecord` DISABLE KEYS */;
REPLACE INTO `salesrecord` (`Id`, `Date`, `Amount`, `Status`, `SellerId`) VALUES
	(1, '2018-09-25 00:00:00.000000', 11000, 1, 1),
	(2, '2018-09-04 00:00:00.000000', 7000, 1, 5),
	(3, '2018-09-13 00:00:00.000000', 4000, 2, 4),
	(4, '2018-09-01 00:00:00.000000', 8000, 1, 1),
	(5, '2018-09-21 00:00:00.000000', 3000, 1, 3),
	(6, '2018-09-15 00:00:00.000000', 2000, 1, 1),
	(7, '2018-09-28 00:00:00.000000', 13000, 1, 2),
	(8, '2018-09-11 00:00:00.000000', 4000, 1, 4),
	(9, '2018-09-14 00:00:00.000000', 11000, 0, 6),
	(10, '2018-09-07 00:00:00.000000', 9000, 1, 6),
	(11, '2018-09-13 00:00:00.000000', 6000, 1, 2),
	(12, '2018-09-25 00:00:00.000000', 7000, 0, 3),
	(13, '2018-09-29 00:00:00.000000', 10000, 1, 4),
	(14, '2018-09-04 00:00:00.000000', 3000, 1, 5),
	(15, '2018-09-12 00:00:00.000000', 4000, 1, 1),
	(16, '2018-10-05 00:00:00.000000', 2000, 1, 4),
	(17, '2018-10-01 00:00:00.000000', 12000, 1, 1),
	(18, '2018-10-24 00:00:00.000000', 6000, 1, 3),
	(19, '2018-10-22 00:00:00.000000', 8000, 1, 5),
	(20, '2018-10-15 00:00:00.000000', 8000, 1, 6),
	(21, '2018-10-17 00:00:00.000000', 9000, 1, 2),
	(22, '2018-10-24 00:00:00.000000', 4000, 1, 4),
	(23, '2018-10-19 00:00:00.000000', 11000, 2, 2),
	(24, '2018-10-12 00:00:00.000000', 8000, 1, 5),
	(25, '2018-10-31 00:00:00.000000', 7000, 1, 3),
	(26, '2018-10-06 00:00:00.000000', 5000, 1, 4),
	(27, '2018-10-13 00:00:00.000000', 9000, 0, 1),
	(28, '2018-10-07 00:00:00.000000', 4000, 1, 3),
	(29, '2018-10-23 00:00:00.000000', 12000, 1, 5),
	(30, '2018-10-12 00:00:00.000000', 5000, 1, 2);
/*!40000 ALTER TABLE `salesrecord` ENABLE KEYS */;

-- Copiando estrutura para tabela saleswebmvcappdb.seller
CREATE TABLE IF NOT EXISTS `seller` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` longtext,
  `Email` longtext,
  `BirthDate` datetime(6) NOT NULL,
  `Salary` double NOT NULL,
  `DepartamentId` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Seller_DepartamentId` (`DepartamentId`),
  CONSTRAINT `FK_Seller_Departament_DepartamentId` FOREIGN KEY (`DepartamentId`) REFERENCES `departament` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela saleswebmvcappdb.seller: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
REPLACE INTO `seller` (`Id`, `Name`, `Email`, `BirthDate`, `Salary`, `DepartamentId`) VALUES
	(1, 'Bob Marley', 'bob@gmail.com', '1998-04-21 00:00:00.000000', 1000, 2),
	(2, 'Maria Green', 'maria@gmail.com', '1979-12-31 00:00:00.000000', 3500, 2),
	(3, 'Alex Grey', 'alex@gmail.com', '1988-01-15 00:00:00.000000', 2200, 1),
	(4, 'Martha Red', 'martha@gmail.com', '1993-11-30 00:00:00.000000', 3000, 1),
	(5, 'Donald Blue', 'donald@gmail.com', '2000-01-09 00:00:00.000000', 4000, 3),
	(6, 'Alex Pink', 'bob@gmail.com', '1997-03-04 00:00:00.000000', 3000, 2),
	(11, 'VINICIUS LOPES DE AZEVEDO', 'viniloppes2000@gmail.com', '2001-05-02 00:00:00.000000', 5000, 2),
	(12, 'Ana', 'ana@gmail.com', '5333-03-04 00:00:00.000000', 5000, 2),
	(13, 'Ana', 'alex@yahoo.com', '2001-01-01 00:00:00.000000', 100, 1),
	(15, 'EDNA', 'viniloppes2000@gmail.com', '4444-03-20 00:00:00.000000', 5000, 1);
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;

-- Copiando estrutura para tabela saleswebmvcappdb.__efmigrationshistory
CREATE TABLE IF NOT EXISTS `__efmigrationshistory` (
  `MigrationId` varchar(95) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela saleswebmvcappdb.__efmigrationshistory: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `__efmigrationshistory` DISABLE KEYS */;
REPLACE INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
	('20211124181436_Initial', '2.1.14-servicing-32113'),
	('20211124190642_OtherEntities', '2.1.14-servicing-32113'),
	('20211126164855_DepartamentForeingKey', '2.1.14-servicing-32113');
/*!40000 ALTER TABLE `__efmigrationshistory` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
