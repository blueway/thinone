-- MySQL dump 10.14  Distrib 5.5.51-MariaDB, for Linux (i686)
--
-- Host: localhost    Database: thinone
-- ------------------------------------------------------
-- Server version	5.5.51-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `th_auth`
--

DROP TABLE IF EXISTS `th_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `th_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  `icon` varchar(20) DEFAULT NULL,
  `order` int(2) NOT NULL DEFAULT '0',
  `ishow` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th_auth`
--

LOCK TABLES `th_auth` WRITE;
/*!40000 ALTER TABLE `th_auth` DISABLE KEYS */;
INSERT INTO `th_auth` VALUES (1,0,'全部','/','',0,1),(3,4,'用户管理','/user/index','fa-text',0,1),(4,1,'系统管理','/index/sysmenu?cate=sys','fa-text',0,1),(5,4,'角色管理','/role/index','fa-text',1,1),(6,4,'权限菜单','/auth/index','fa-text',2,1),(7,6,'列表','/auth/list','fa-text',0,0),(8,6,'更新','/auth/update','fa-text',1,0),(11,6,'删除','/auth/del','fa-text',2,0),(12,5,'列表','/role/list','fa-text',0,0),(13,5,'更新','/role/update','fa-text',1,0),(14,5,'删除','/role/del','fa-text',2,0),(15,3,'列表','/user/list','fa-text',0,0),(16,3,'更新','/user/update','fa-text',1,0),(17,3,'删除','/user/del','fa-text',2,0),(18,5,'权限列表','/role/authList','fa-text',3,0),(19,5,'权限更新','/role/doAuth','fa-text',4,0),(20,1,'内容管理','/index/sysmenu?cate=cms','fa-text',1,1),(21,20,'图表实例','/cms/index/index','fa-text',0,1),(22,20,'图表数据','/cms/index/chart','fa-text',1,0);
/*!40000 ALTER TABLE `th_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `th_mob`
--

DROP TABLE IF EXISTS `th_mob`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `th_mob` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th_mob`
--

LOCK TABLES `th_mob` WRITE;
/*!40000 ALTER TABLE `th_mob` DISABLE KEYS */;
INSERT INTO `th_mob` VALUES (1,'two'),(2,'one');
/*!40000 ALTER TABLE `th_mob` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `th_role`
--

DROP TABLE IF EXISTS `th_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `th_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(50) NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `desc` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th_role`
--

LOCK TABLES `th_role` WRITE;
/*!40000 ALTER TABLE `th_role` DISABLE KEYS */;
INSERT INTO `th_role` VALUES (1,'超级','2017-11-26 13:42:14','什么'),(2,'普通','2017-11-26 13:42:26','一般');
/*!40000 ALTER TABLE `th_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `th_role_auth`
--

DROP TABLE IF EXISTS `th_role_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `th_role_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `auth_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=260 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th_role_auth`
--

LOCK TABLES `th_role_auth` WRITE;
/*!40000 ALTER TABLE `th_role_auth` DISABLE KEYS */;
INSERT INTO `th_role_auth` VALUES (234,1,1),(235,1,4),(236,1,3),(237,1,15),(238,1,16),(239,1,17),(240,1,5),(241,1,12),(242,1,13),(243,1,14),(244,1,18),(245,1,19),(246,1,6),(247,1,7),(248,1,8),(249,1,11),(250,1,20),(251,1,21),(252,1,22),(253,2,1),(254,2,4),(255,2,3),(256,2,15),(257,2,20),(258,2,21),(259,2,22);
/*!40000 ALTER TABLE `th_role_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `th_user`
--

DROP TABLE IF EXISTS `th_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `th_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '1',
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th_user`
--

LOCK TABLES `th_user` WRITE;
/*!40000 ALTER TABLE `th_user` DISABLE KEYS */;
INSERT INTO `th_user` VALUES (40,'admin','CC03E747A6AFBBCBF8BE7668ACFEBEE5',1,'2017-11-26 10:16:57'),(44,'test','CC03E747A6AFBBCBF8BE7668ACFEBEE5',1,'2017-11-26 14:21:30');
/*!40000 ALTER TABLE `th_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `th_user_role`
--

DROP TABLE IF EXISTS `th_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `th_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `th_user_role`
--

LOCK TABLES `th_user_role` WRITE;
/*!40000 ALTER TABLE `th_user_role` DISABLE KEYS */;
INSERT INTO `th_user_role` VALUES (6,1,40),(10,2,44);
/*!40000 ALTER TABLE `th_user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-29 19:05:38
