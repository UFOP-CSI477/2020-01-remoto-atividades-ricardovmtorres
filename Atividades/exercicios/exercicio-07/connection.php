<?php
//Configuração:
$dbfile = "./db/aula17.sqlite";
$dbuser = "";
$dbpassword = "";
$dbhost = "";

$strConnection = "sqlite:" . $dbfile;

$connection = new PDO($strConnection, $dbuser, $dbpassword);

    //var_dump($connection);