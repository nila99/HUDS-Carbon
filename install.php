<?php

/**
 * Open a connection via PDO to create a
 * new database and table with structure.
 *
 */

require "newconf.php";

try {
    $connection = new PDO("mysql:host=$host", $username, $password, $options);
    $sql = file_get_contents("data/init.sql");
    $connection->exec($sql);
    $carb = file_get_contents("data/carbonemissions.sql");
    $connection->exec($carb);
    
    echo "Database and table users created successfully.";
} catch(PDOException $error) {
    echo $sql . "<br>" . $error->getMessage();
}