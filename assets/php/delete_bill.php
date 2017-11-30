<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:51
 */
require_once 'data_conn.php';

$billID = $_GET["id"];
$payer = $_GET["user"];
$result = $conn->query("DELETE '$billID' From Bills WHERE Payer='$payer'");

echo $result;
?>