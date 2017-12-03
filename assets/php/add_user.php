<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:33
 */
require_once 'data_conn.php';

$user = $_GET["email"];
$password = $_GET["password"];
$firstname = $_GET["firstname"];
$lastname = $_GET["lastname"];
$picture = $_GET["picture"];

$result = $conn -> query("Insert into Users (Password,Firstname,Lastname,Picture,Email) VALUES 
                            ('$password','$firstname','$lastname','$picture','$user')");
echo $result;
?>