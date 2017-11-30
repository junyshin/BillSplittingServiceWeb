<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:51
 */
require_once 'data_conn.php';
$user = $_GET["user"];
$result = $conn->query("DELETE From Users WHERE Email='$user'");

echo $result;
?>