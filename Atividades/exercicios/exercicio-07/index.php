<?php
require 'connection.php';

//Controller -> Model
$produtos = $connection->query("SELECT * FROM produtos");

//var_dump($produtos->fetchAll());

//View
//include_once 'produtosView.php';
require 'produtosView.php';