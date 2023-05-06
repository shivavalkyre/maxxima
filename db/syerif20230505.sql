/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50724 (5.7.24)
 Source Host           : localhost:3306
 Source Schema         : syerif20230505

 Target Server Type    : MySQL
 Target Server Version : 50724 (5.7.24)
 File Encoding         : 65001

 Date: 05/05/2023 23:55:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hasil
-- ----------------------------
DROP TABLE IF EXISTS `hasil`;
CREATE TABLE `hasil`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_ujian` int(11) NULL DEFAULT NULL,
  `id_matpel` int(11) NULL DEFAULT NULL,
  `hasil` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `peserta` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_ujian1`(`id_ujian`) USING BTREE,
  INDEX `id_matpel1`(`id_matpel`) USING BTREE,
  CONSTRAINT `id_matpel1` FOREIGN KEY (`id_matpel`) REFERENCES `ujian` (`id_matpel`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_ujian1` FOREIGN KEY (`id_ujian`) REFERENCES `ujian` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of hasil
-- ----------------------------
INSERT INTO `hasil` VALUES (3, 4, 6, 'A', '1234561');
INSERT INTO `hasil` VALUES (4, 4, 6, 'A', '1234562');
INSERT INTO `hasil` VALUES (6, 4, 6, 'C', '1234563');

-- ----------------------------
-- Table structure for mata_pelajaran
-- ----------------------------
DROP TABLE IF EXISTS `mata_pelajaran`;
CREATE TABLE `mata_pelajaran`  (
  `id_matpel` int(11) NOT NULL AUTO_INCREMENT,
  `nama_matpel` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_matpel`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mata_pelajaran
-- ----------------------------
INSERT INTO `mata_pelajaran` VALUES (6, 'Matematika');
INSERT INTO `mata_pelajaran` VALUES (7, 'Biologi');

-- ----------------------------
-- Table structure for peserta
-- ----------------------------
DROP TABLE IF EXISTS `peserta`;
CREATE TABLE `peserta`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_ujian` int(11) NULL DEFAULT NULL,
  `peserta` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_ujian`(`id_ujian`) USING BTREE,
  INDEX `peserta`(`peserta`) USING BTREE,
  CONSTRAINT `id_ujian` FOREIGN KEY (`id_ujian`) REFERENCES `ujian` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `peserta` FOREIGN KEY (`peserta`) REFERENCES `siswa` (`nis`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of peserta
-- ----------------------------
INSERT INTO `peserta` VALUES (3, 4, '1234561');
INSERT INTO `peserta` VALUES (4, 4, '1234562');
INSERT INTO `peserta` VALUES (5, 4, '1234563');
INSERT INTO `peserta` VALUES (6, 5, '1234561');
INSERT INTO `peserta` VALUES (7, 5, '1234562');
INSERT INTO `peserta` VALUES (8, 5, '1234563');

-- ----------------------------
-- Table structure for siswa
-- ----------------------------
DROP TABLE IF EXISTS `siswa`;
CREATE TABLE `siswa`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nis` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `nama` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `alamat` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `nis`(`nis`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of siswa
-- ----------------------------
INSERT INTO `siswa` VALUES (5, '1234561', 'siswa1', 'alamat1');
INSERT INTO `siswa` VALUES (6, '1234562', 'siswa2', 'alamat2');
INSERT INTO `siswa` VALUES (7, '1234563', 'siswa3', 'alamat3');

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `level` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES (2, 'Admin', 'Admin', 'Administrator');

-- ----------------------------
-- Table structure for ujian
-- ----------------------------
DROP TABLE IF EXISTS `ujian`;
CREATE TABLE `ujian`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_ujian` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `id_matpel` int(11) NULL DEFAULT NULL,
  `tanggal` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_matpel`(`id_matpel`) USING BTREE,
  CONSTRAINT `id_matpel` FOREIGN KEY (`id_matpel`) REFERENCES `mata_pelajaran` (`id_matpel`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of ujian
-- ----------------------------
INSERT INTO `ujian` VALUES (4, 'Ujian1', 6, '2023-05-05 21:29:09');
INSERT INTO `ujian` VALUES (5, 'Ujian2', 7, '2023-05-05 23:10:22');

SET FOREIGN_KEY_CHECKS = 1;
