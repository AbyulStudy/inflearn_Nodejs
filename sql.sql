create database jsman;
use jsman;
create table `jsman`(
	`UID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `EMAIL` VARCHAR(89) NOT NULL UNIQUE,
    `NAME` VARCHAR(32) NOT NULL UNIQUE,
    `PW` VARCHAR(64) NOT NULL
);
insert into user (EMAIL,NAME,PW) values ('devbyul@gmail.com','devbyul','1234');