<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:33
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

$result = $conn -> query("Insert into Bills (Billname,Due,Label,Payment,Picture,Comment,Frequency,Status,Amount,Payee,Payer) VALUES 
                            ('$name','$data','$category','$payment','$picture','$comment','$frequency','$status','$amount','$payee','$payer')");
echo $result;
?>