<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:46
 */
require_once 'data_conn.php';

$user = $_GET["email"];
$password = $_GET["password"];
$firstname = $_GET["firstname"];
$lastname = $_GET["lastname"];
$picture = $_GET["picture"];

$result = $conn -> query("UPDATE Users Set Password='$password', Firstname='$firstname', Lastname='$lastname', Picture='$picture' WHERE Email='$user'");

echo $result;
?>
