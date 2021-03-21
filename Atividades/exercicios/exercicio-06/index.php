<?php
    require 'connection.php';

    //Controller -> Model
    $estados = $connection->query("SELECT * FROM estados");

    //var_dump($estados->fetchAll());

    //View
    //include_once 'estadosView.php';
    require 'estadosView.php';