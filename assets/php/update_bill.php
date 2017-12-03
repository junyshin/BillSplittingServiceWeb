<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 21:55
 */
require_once 'data_conn.php';

$billID = $_GET["id"];
$name = $_GET["name"];
$date = $_GET["date"];
$category = $_GET["category"];
$payment = $_GET["payment"];
$picture = $_GET["picture"];
$comment = $_GET["comment"];
$frequency = $_GET["frequency"];
$status = $_GET["status"];
$amount = $_GET["amount"];
$payer = $_GET["payer"];
$payee = $_GET["payee"];

$result = $conn -> query("UPDATE Bills SET Billname='$name', Due='$date', Label='$category', 
Payment='$payment', Picture='$picture', Comment='$comment', Frequency='$frequency', 
Status='$status', Amount='$amount', Payee='$payee' WHERE Payer='$payer' AND WHERE Id='$billID'");

echo $result;
?>